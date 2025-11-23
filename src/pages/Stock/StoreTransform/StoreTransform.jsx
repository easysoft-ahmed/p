import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم المستند',
    dataIndex: 'TransDoc',
    key: 'name',
  },
  {
    title: 'تاريخ المستند',
    dataIndex: 'DocDate',
    key: 'age',
  },
  {
    title: 'من مخزن',
    dataIndex: 'StoreId',
    key: 'age',
  },
  {
    title: 'الى مخزن',
    dataIndex: 'StoreId',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TransDoc}`} />
        <DeleteBtn url={`Stock/TransForm?TransDoc=${record.TransDoc}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const StoreTransform = ()=>{
  return(
    <TableMainData columns={columns} URL={"Stock/TransForm"} title="تحويل من مخزن الى أخر" />
  )
}

export default StoreTransform;