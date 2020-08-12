import React from 'react';
import { Layout } from 'antd';

import styles from './header.module.scss';

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header>
      <h2 className={styles['header']}>BANKING PLATFORM</h2>
    </Header>
  );
};

export default MainHeader;
