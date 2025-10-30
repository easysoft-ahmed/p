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
    title: 'كود المستخدم',
    dataIndex: 'UserID',
    key: 'UserID',
  },
  {
    title: 'أسم المستخدم',
    dataIndex: 'UserName',
    key: 'UserName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.UserID}`} />
        <DeleteBtn url={`Identity/Users?UserId=${record.UserID}`} />
      </>

    ),
    key: 'UserID',
  },

];


const Users = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Identity/Users")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>
            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة مستخدم</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Users;