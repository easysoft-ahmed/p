import { PlusOutlined } from "@ant-design/icons";
import { Button, message, Spin, Table } from "antd";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";

const columns = [
  {
    title: 'كود اليومية',
    dataIndex: 'AccDailyId',
    key: 'AccDailyId',
  },
  {
    title: 'أسم اليومية',
    dataIndex: 'AccDailyName',
    key: 'AccDailyName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.AccDailyId}`} />
        <DeleteBtn url={`Acc/AccDailys?DailyId=${record.AccDailyId}`} />
      </>

    ),
    key: 'AccDailyId',
  },

];


const HelpsCodes = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Acc/AccDailys")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>
            <Link to="/accounts/helps_codes/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default HelpsCodes;