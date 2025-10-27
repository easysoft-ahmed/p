import { PlusOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Spin, Table } from "antd";
import { Link } from "react-router-dom";
import MessageRequest from "../../../components/MessageRequest";
import useGet from "../../../hooks/useGet";
import { useEffect } from "react";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";

const columns = [
  {
    title: 'كود الضريبة',
    dataIndex: 'TaxID',
    key: 'TaxID',
  },
  {
    title: 'اسم الضريبة',
    dataIndex: 'TaxName',
    key: 'TaxName',
  },
  {
    title: 'نسبة الضريبة',
    dataIndex: 'TaxRate',
    key: 'TaxRate',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TaxID}`} />
        <DeleteBtn url={`Fin/Taxs?TaxId=${record.TaxID}`} />
      </>

    ),
    key: 'TaxID',
  },

];


const Taxes = ()=>{
  let {getData, resultGet, isLoadingGet, errorMsgGet} = useGet();
  useEffect(()=>{
    getData("Fin/Taxs")
  }, [])

    return(
        <>
            <MessageRequest data={resultGet?.ResponseObject} errorMsg={errorMsgGet}/>

            <Link to="/financial/taxes/add">
                <Button type="primary" iconPosition="start" icon={<PlusOutlined />}>إضافة كود</Button>
            </Link>



            <Spin spinning={isLoadingGet} fullscreen />

            <Table dataSource={resultGet?.ResponseObject} columns={columns} />
        </>
    )
}

export default Taxes;