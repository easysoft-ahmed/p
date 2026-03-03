import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";
import ButtonPrintReportPage from "../../../components/PrintReport";
import { handleOnlyDate } from "../../../helpers";

const columns = [
  {
    title: 'رقم المستند',
    dataIndex: 'DocNo',
    ...getColumnSearchProps('DocNo', "رقم المستند")
  },
  {
    title: 'تاريخ المستند',
    search: "DocDate",
    render: (record)=>(
      <span>{handleOnlyDate(record.DocDate)}</span>
    ),
    ...getColumnSearchProps('DocDate', "تاريخ المستند")

  },
  {
    title: 'من مخزن',
    dataIndex: 'StoreName',
    ...getColumnSearchProps('StoreName', "من مخزن")  },
  {
    title: 'الى مخزن',
    dataIndex: 'ToStoreName',
    ...getColumnSearchProps('ToStoreName', "الى مخزن")
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    search: "Notes",
    ...getColumnSearchProps('Notes', "ملاحظات")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TransDoc}`} />
        <DeleteBtn url={`Stock/TransForm?TransDoc=${record.TransDoc}`} />
        <ButtonPrintReportPage WindowName={"TransFormInvoice"} DocId={record.TransDoc} />
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