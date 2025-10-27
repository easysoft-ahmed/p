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
    title: 'من مخزن',
    dataIndex: 'StoreId',
    key: 'age',
  },
  {
    title: 'الى مخزن',
    dataIndex: 'StoreId',
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
        <EditBtn url={`edit/${record.TransDoc}`} />
        <DeleteBtn url={`Stock/TransForm?TransDoc=${record.TransDoc}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const StoreTransform = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Stock/TransForm")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة تحويل الى مخزن اخر</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default StoreTransform;