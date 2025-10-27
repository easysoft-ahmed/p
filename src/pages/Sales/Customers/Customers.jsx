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
    title: 'كود العميل',
    dataIndex: 'CustomerID',
    key: 'CustomerID',
  },
  {
    title: 'اسم العميل',
    dataIndex: 'CustomerName',
    key: 'CustomerName',
  },
  {
    title: 'رقم التلفون',
    dataIndex: 'Phone',
    key: 'Phone',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.CustomerID}`} />
        <DeleteBtn url={`Sales/Customers?CustomerID=${record.CustomerID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const Customers = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Sales/Customers")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة عميل</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Customers;