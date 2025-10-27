import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import EditBtn from "../../../components/EditBtn";
import DeleteBtn from "../../../components/DeleteBtn";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocNo',
    key: 'DocID',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'VendorName',
    key: 'VendorName',
  },
  {
    title: 'الرقم الدفتري', 
    dataIndex: 'TaxName', // Need Change
    key: 'age', // Need Change
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'DocDate',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
    key: 'NetTotal',
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
        <DeleteBtn url={`Purch?DocId=${record.DocID}`} />
      </>

    ),
    key: 'StoreID',
  },

];


const PurchInvoice = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Purch")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة فاتورة شراء</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default PurchInvoice;