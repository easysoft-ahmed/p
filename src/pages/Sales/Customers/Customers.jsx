import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود العميل',
    dataIndex: 'CustomerID',
    key: 'CustomerID',
  },
  {
    title: 'اسم العميل',
    dataIndex: 'CustomerName',
    key: 'CustomerName',
  },
  {
    title: 'رقم التلفون',
    dataIndex: 'Phone',
    key: 'Phone',
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