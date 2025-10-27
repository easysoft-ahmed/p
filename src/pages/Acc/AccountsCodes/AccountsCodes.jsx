import { PlusOutlined } from "@ant-design/icons";
import { Button, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";

const columns = [
  {
    title: 'كود الحساب',
    dataIndex: 'AccID',
    key: 'name',
  },
  {
    title: 'اسم الحساب',
    dataIndex: 'AccName',
    key: 'age',
  },
  {
    title: 'رتبة الحساب',
    dataIndex: 'AccRank',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.AccID}`} />
        <DeleteBtn url={`Acc/Accs?AccId=${record.AccID}`} />
      </>

    ),
    key: 'AccId',
  },

];


const AccountsCodes = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  
  useEffect(()=>{
    getData("Acc/Accs");
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود حساب</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default AccountsCodes;