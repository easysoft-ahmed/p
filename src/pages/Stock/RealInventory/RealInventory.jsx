import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

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
    title: 'المخزن',
    dataIndex: 'StoreId',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'StoreId',
    key: 'age',
  },
];


const RealInventory = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Stock/TransForm")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة حركة جرد مخزني</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default RealInventory;