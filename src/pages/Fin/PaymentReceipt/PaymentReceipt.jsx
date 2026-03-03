import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import EditBtn from "../../../components/EditBtn";
import DeleteBtn from "../../../components/DeleteBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الايصال',
    dataIndex: 'DocNo',
    key: 'DocNo',
  },
  {
    title: 'تاريخ الايصال',
    dataIndex: 'DocDate',
    key: 'DocDate',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'Notes',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Fin/CashOut?DocId=${record.DocID}`} />
      </>

    ),
    key: 'DocId',
  },

];


const PaymentReceipt = ()=>{
    return(
      <>
        <TableMainData columns={columns} URL={"Fin/CashOut"} title="ايصال دفع" />
      </>
    )
}

export default PaymentReceipt;