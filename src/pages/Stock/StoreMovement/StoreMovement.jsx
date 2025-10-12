import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import { handleOnlyDate } from "../../../helpers";
import DeleteBtn from "../../../components/DeleteBtn";

let switchValue = (key)=>{
  switch (key) {
    case 0: return "رصيد أول المدة"; 
    case 1: return "إضافة"
    case 2: return "صرف"
    case 3: return "مرتد صرف"
    case 4: return "عينات و هدايا واردة"
    case 5: return "عينات و هدايا صادرة"
    default: return "تالف"
  }
}
const columns = [
  {
    title: 'رقم المستند',
    dataIndex: 'DocNo',
    key: 'name',
  },
  {
    title: 'تاريخ المستند',
    render: (record)=>(
      <span>{handleOnlyDate(record.DocDate)}</span>
    )
  },
  {
    title: 'نوع الحركة',
    render: (record)=>(
      <span>{switchValue(record.TransType)}</span>
    )
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
        <Link to={`edit/${record.TransDoc}`}>Edit</Link>
        <DeleteBtn url={`Stock/Trans?TransDoc=${record.TransDoc}`} />
      </>

    ),
    key: 'StoreID',
  },

];


const StoreMovement = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Stock/Trans")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة حركة مخزون</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default StoreMovement;