import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'TaxID',
    key: 'name',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'TaxName',
    key: 'age',
  },
  {
    title: 'الرقم الدفتري',
    dataIndex: 'TaxName',
    key: 'age',
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'TaxName',
    key: 'age',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'TaxName',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'TaxName',
    key: 'age',
  },
];


const SalesInvoice = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Taxs")
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