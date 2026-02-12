import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود النوع',
    dataIndex: 'CustTypeID',
    key: 'CustTypeID',
    ...getColumnSearchProps('CustTypeID', "كود النوع")
  },
  {
    title: 'اسم النوع',
    dataIndex: 'CustTypeName',
    key: 'CustTypeName',
    ...getColumnSearchProps('CustTypeName', "اسم النوع")
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