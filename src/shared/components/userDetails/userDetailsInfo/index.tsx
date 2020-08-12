import React from 'react';

type Props = {
  name: string;
  text: string;
};

const UserDetailsInfo: React.FC<Props> = ({ name, text }) => (
  <div className="user-details-info-row">
    <div className="user-details-info-row-name">{name}:</div>
    <div className="user-details-info-row-value">{text}</div>
  </div>
);

export default UserDetailsInfo;
