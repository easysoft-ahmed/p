import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocID',
    key: 'name',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'CustomerName',
    key: 'age',
  },
  {
    title: 'الرقم الدفتري',
    dataIndex: 'DocTr_type',
    key: 'age',
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'age',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
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
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Sales?DocNumver=${record.DocNo}`} />
      </>

    ),
    key: 'StoreID',
  },

];


const SalesInvoice = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Sales")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة فاتورة مبيعات</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default SalesInvoice;