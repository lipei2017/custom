import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
type Props = {};

const columns = [
  {
    title: '#',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'A',
    dataIndex: 'value',
    key: 'value',
  },
];
export default function index({}: Props) {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/mock/history');
      const data = res.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return <Table dataSource={dataSource} columns={columns} />;
}
