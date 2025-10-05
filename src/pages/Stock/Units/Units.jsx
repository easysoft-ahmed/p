import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'كود وحدة القياس',
    dataIndex: 'UnitID',
    key: 'UnitID',
  },
  {
    title: 'اسم وحدة القياس',
    dataIndex: 'UnitName',
    key: 'UnitName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <Link to={`edit/${record.UnitID}`}>Edit</Link>
    ),
    key: 'UnitID',
  },

];


const Units = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Stock/Units")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة وحدة قياس</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Units;