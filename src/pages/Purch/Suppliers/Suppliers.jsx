import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المورد',
    dataIndex: 'VendorID',
    key: 'VendorID',
  },
  {
    title: 'اسم المورد',
    dataIndex: 'VendorName',
    key: 'VendorName',
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
        <EditBtn url={`edit/${record.VendorID}`} />
        <DeleteBtn url={`Purch/Vendors?VendorID=${record.VendorID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const Suppliers = ()=>{
    return(
      <TableMainData columns={columns} URL={"Purch/Vendors"} title="مورد" />
    )
}

export default Suppliers;