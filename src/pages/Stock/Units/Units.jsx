import { useState } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";
import { Button, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";


const Units = ()=>{
  const columns = [
    {
      title: 'كود وحدة القياس',
      dataIndex: 'UnitID',
      key: 'UnitID',
      ...getColumnSearchProps('UnitID', "كود وحدة القياس")
    },
    {
      title: 'اسم وحدة القياس',
      dataIndex: 'UnitName',
      key: 'UnitName',
      ...getColumnSearchProps('UnitName', "اسم وحدة القياس")
    },
    {
      title: 'إجراء',
      render: (record) => (
        <>
          <EditBtn url={`edit/${record.UnitID}`} />
          <DeleteBtn url={`Stock/Units?UnitID=${record.UnitID}`} />
        </>
      ),
      key: 'UnitID',
    },

  ];

    return(
      <TableMainData columns={columns} URL={"Stock/Units"} title="وحدة قياس" />
    )
}

export default Units;