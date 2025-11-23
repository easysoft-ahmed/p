import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود النوع',
    dataIndex: 'CustTypeID',
    key: 'CustTypeID',
  },
  {
    title: 'اسم النوع',
    dataIndex: 'CustTypeName',
    key: 'CustTypeName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.CustTypeID}`} />
        <DeleteBtn url={`Sales/CustomerTypes?CustTypeID=${record.CustTypeID}`} />
      </>

    ),
    key: 'CustTypeID',
  },


];


const CustomersTypes = ()=>{
  return(
    <TableMainData columns={columns} URL={"Sales/CustomerTypes"} title="نوع عميل" />
  )
}

export default CustomersTypes;