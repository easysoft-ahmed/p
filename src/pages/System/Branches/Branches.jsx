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
    title: 'كود الفرع',
    dataIndex: 'BranchID',
    key: 'BranchID',
  },
  {
    title: 'أسم الفرع',
    dataIndex: 'BranchName',
    key: 'BranchName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.BranchID}`} />
        <DeleteBtn url={`Sys/Branches?BranchId=${record.BranchID}`} />
      </>

    ),
    key: 'BranchID',
  },

];


const Branches = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Sys/Branches")
  }, [])
    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>
            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة فرع</Button>
            </Link>
            
            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Branches;