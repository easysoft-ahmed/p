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
    title: 'كود المورد',
    dataIndex: 'VendorID',
    key: 'VendorID',
  },
  {
    title: 'اسم المورد',
    dataIndex: 'VendorName',
    key: 'VendorName',
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
        <EditBtn url={`edit/${record.VendorID}`} />
        <DeleteBtn url={`Purch/Vendors?VendorID=${record.VendorID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const Suppliers = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Purch/Vendors")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة مورد</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Suppliers;