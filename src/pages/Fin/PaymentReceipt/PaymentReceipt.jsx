import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'رقم الايصال',
    dataIndex: 'BoxID',
    key: 'name',
  },
  {
    title: 'تاريخ الايصال',
    dataIndex: 'BoxName',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'BoxName',
    key: 'age',
  },

];


const PaymentReceipt = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Boxs")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="/financial/payment_receipt/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة ايصال دفع</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default PaymentReceipt;