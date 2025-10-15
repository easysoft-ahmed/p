import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";

const columns = [
  {
    title: 'كود البنك',
    dataIndex: 'BankID',
    key: 'BankID',
  },
  {
    title: 'اسم البنك',
    dataIndex: 'BankName',
    key: 'BankName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <Link to={`edit/${record.BankID}`}>Edit</Link>
        <DeleteBtn url={`Fin/Banks?BankID=${record.BankID}`} />
      </>

    ),
    key: 'BankID',
  },

];


const Banks = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Banks")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="/financial/banks/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Banks;