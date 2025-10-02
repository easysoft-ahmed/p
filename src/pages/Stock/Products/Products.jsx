import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'رقم الصنف',
    dataIndex: 'ProductID',
    key: 'name',
  },
  {
    title: 'إسم الصنف',
    dataIndex: 'Productname',
    key: 'Productname',
  },
  {
    title: 'Product Name',
    dataIndex: 'ProdEngName',
    key: 'ProdEngName',
  },
  {
    title: 'الكود المرجعي', 
    dataIndex: 'CurrRate', // Need Change
    key: 'age', // Need Change
  },
  {
    title: 'الوحدة',
    dataIndex: 'MainUnitName',
    key: 'MainUnitName',
  },
  {
    title: 'التصنيف',
    dataIndex: 'CategoryName',
    key: 'CategoryName',
  },
  {
    title: 'المنشأ',
    dataIndex: 'CountryName',
    key: 'CountryName',
  },
  {
    title: 'الماركة',
    dataIndex: 'Marka',
    key: 'Marka',
  },
  {
    title: 'الموديل',
    dataIndex: 'Modale',
    key: 'Modale',
  },
  {
    title: 'الوصف',
    dataIndex: 'CurrRate', // Need Change
    key: 'age', // Need Change
  },
  {
    title: 'إجراء',
    render: (record) => (
      <Link to={`edit/${record.ProductID}`}>Edit</Link>
    ),
  },

];


const Products = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Stock/Products")
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