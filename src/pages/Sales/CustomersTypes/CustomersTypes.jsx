import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";

const columns = [
  {
    title: 'كود النوع',
    dataIndex: 'CustTypeID',
    key: 'CustTypeID',
  },
  {
    title: 'اسم النوع',
    dataIndex: 'CustTypeName',
    key: 'CustTypeName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <Link to={`edit/${record.CustTypeID}`}>Edit</Link>
        <DeleteBtn url={`Sales/CustomerTypes?CustTypeID=${record.CustTypeID}`} />
      </>

    ),
    key: 'CustTypeID',
  },


];


const CustomersTypes = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Sales/CustomerTypes")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default CustomersTypes;