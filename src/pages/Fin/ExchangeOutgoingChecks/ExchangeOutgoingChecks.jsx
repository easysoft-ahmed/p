import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'رقم الشيك',
    dataIndex: 'CurrID',
    key: 'name',
  },
  {
    title: 'رقم الاذن',
    dataIndex: 'CurrName',
    key: 'age',
  },
  {
    title: 'تاريخ الشيك',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'القيمة',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الملاحظات',
    dataIndex: 'CurrRate',
    key: 'age',
  },
];


const ExchangeOutgoingChecks = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Currs")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>صرف شيك صادر</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default ExchangeOutgoingChecks;