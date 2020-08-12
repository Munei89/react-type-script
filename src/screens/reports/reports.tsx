import React from 'react';
import { Table } from 'antd';
import { dataSource, columns } from '@constants/reports';
import styles from './reports.module.scss';

type Props = {};

const Reports: React.FC<Props> = () => {
  return (
    <div className={styles['reports']}>
      <h2>Reports</h2>
      <div className={styles['table-wrapper']}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};
export default Reports;
