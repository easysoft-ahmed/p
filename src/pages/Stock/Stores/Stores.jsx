import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المخزن',
    dataIndex: 'StoreID',
    ...getColumnSearchProps('StoreID', "كود المخزن")
  },
  {
    title: 'اسم المخزن',
    dataIndex: 'StoreName',
    ...getColumnSearchProps('StoreName', "اسم المخزن")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.StoreID}`} />
        <DeleteBtn url={`Stock/Stores?StoreID=${record.StoreID}`} />
      </>

    ),
  },
];


const Stores = ()=>{

    return(
      <TableMainData columns={columns} URL={"Stock/Stores"} title="مخزن" />
    )
}

export default Stores;