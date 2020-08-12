import axios from 'axios';
import config from '../../configs/config';
type APIFetchList = () => Promise<IItem[]>;

export const fetchList: APIFetchList = async () => {
  const response = await axios.get(config.BASE_URL + '/users/1');
  localStorage.setItem('user', JSON.stringify(response.data));
  const list: IItem[] = [response.data];
  return list;
};
