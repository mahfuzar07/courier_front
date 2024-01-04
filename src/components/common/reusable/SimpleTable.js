import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const SimpleTable = ({ columns, dataSource, pagination, scroll }) => {
  const { t } = useTranslation();

  const [dataColumns, setDataColumns] = useState([]);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (dataSource) {
      transformData(dataSource);
    }
    if (columns) {
      transformColumns(columns);
    }
  }, [dataSource, columns]);

  function transformData(values) {
    const newdata = [];
    for (let i = 0; i < values.length; i++) {
      newdata.push({
        key: i + 1,
        ...values[i],
      });
    }
    setData(newdata);
  }

  function transformColumns(values) {
    const newColumn = {
      title: t('common.serial'),
      dataIndex: 'key',
      width: 50,
    };

    setDataColumns([newColumn, ...values]);
  }

  return (
    <div>
      <Table
        columns={dataColumns}
        dataSource={data}
        pagination={pagination}
        scroll={scroll}
        size="middle"
      />
    </div>
  );
};

export default SimpleTable;
