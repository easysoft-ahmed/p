import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";

const columns = [
  {
    title: 'كود العملة',
    dataIndex: 'CurrID',
    key: 'CurrID',
  },
  {
    title: 'اسم العملة',
    dataIndex: 'CurrName',
    key: 'CurrName',
  },
  {
    title: 'معامل العملة',
    dataIndex: 'CurrRate',
    key: 'CurrRate',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <Link to={`edit/${record.CurrID}`}>Edit</Link>
        <DeleteBtn url={`Fin/Currs?CurrId=${record.CurrID}`} />
      </>

    ),
    key: 'CurrID',
  },

];


const Currencies = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Currs")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="/financial/currencies/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Currencies;