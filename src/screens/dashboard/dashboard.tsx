import React, { useEffect, useState } from 'react';
import Spinner from '../../shared/components/spinner';
import UserDetails from '../../shared/components/userDetails/index';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '@redux/actions';

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [fetching, setFetching] = useState(true);
  const list = useSelector((state: IReducerStates) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await setFetching(true);

      try {
        await dispatch(fetchList());
      } catch (error) {
        console.error(error);
      }

      setFetching(false);
    })();
  }, [dispatch]);

  return (
    <>
      <div className="dashboard">
        <div>Dashboard</div>
        {fetching && <Spinner />}
        {!fetching && <UserDetails user={list[0]} />}
      </div>
    </>
  );
};

export default Dashboard;
