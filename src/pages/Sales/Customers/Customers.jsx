import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود العميل',
    dataIndex: 'CustomerID',
    key: 'CustomerID',
    ...getColumnSearchProps('CustomerID', "كود العميل")
  },
  {
    title: 'اسم العميل',
    dataIndex: 'CustomerName',
    key: 'CustomerName',
    ...getColumnSearchProps('CustomerName', "اسم العميل")
  },
  {
    title: 'رقم التلفون',
    dataIndex: 'Phone',
    key: 'Phone',
    ...getColumnSearchProps('Phone', "رقم التلفون")
  },
  {
    title: 'السجل التجاري',
    dataIndex: 'OfficalNo',
    key: 'OfficalNo',
    ...getColumnSearchProps('OfficalNo', "السجل التجاري")
  },
  {
    title: 'البطاقة الضريبية',
    dataIndex: 'TaxCrad',
    key: 'TaxCrad',
    ...getColumnSearchProps('TaxCrad', "البطاقة الضريبية")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.CustomerID}`} />
        <DeleteBtn url={`Sales/Customers?CustomerID=${record.CustomerID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const Customers = ()=>{
  return(
    <TableMainData columns={columns} URL={"Sales/Customers"} title="عميل" />
  )
}

export default Customers;