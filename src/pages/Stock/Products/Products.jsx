import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'رقم الصنف',
    dataIndex: 'CurrID',
    key: 'name',
  },
  {
    title: 'إسم الصنف',
    dataIndex: 'CurrName',
    key: 'age',
  },
  {
    title: 'Product Name',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الكود المرجعي',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الوحدة',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'التصنيف',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'المنشأ',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الماركة',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الموديل',
    dataIndex: 'CurrRate',
    key: 'age',
  },
  {
    title: 'الوصف',
    dataIndex: 'CurrRate',
    key: 'age',
  },
];


const Products = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Currs")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة صنف</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Products;