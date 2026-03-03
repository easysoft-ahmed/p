import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";

const columns = [
  {
    title: 'كود التصنيف',
    dataIndex: 'BankID',
    key: 'name',
  },
  {
    title: 'كود البند',
    dataIndex: 'BankName',
    key: 'age',
  },
  {
    title: 'اسم البند',
    dataIndex: 'BankName',
    key: 'age',
  },
  {
    title: 'النوع',
    dataIndex: 'BankName',
    key: 'age',
  },

];


const RankCashFlow = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Banks")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="/financial/rank_cash_flow/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة تصنيف</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default RankCashFlow;