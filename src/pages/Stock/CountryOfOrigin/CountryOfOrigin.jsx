import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'كود بلد المنشأ',
    dataIndex: 'CountryID',
    key: 'name',
  },
  {
    title: 'اسم بلد المنشأ',
    dataIndex: 'CountryName',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <Link to={`edit/${record.CountryID}`}>Edit</Link>
    ),
    key: 'CountryID',
  },

];


const CountryOfOrigin = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Sys/Countries")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة بلد منشأ</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default CountryOfOrigin;