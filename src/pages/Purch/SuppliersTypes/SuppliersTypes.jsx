import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود النوع',
    dataIndex: 'VendorTypeID',
    key: 'VendorTypeID',
  },
  {
    title: 'اسم النوع',
    dataIndex: 'VendorTypeName',
    key: 'VendorTypeName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.VendorTypeID}`} />
        <DeleteBtn url={`Purch/VendorTypes?VendorTypeID=${record.VendorTypeID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const SuppliersTypes = ()=>{
    return(
      <TableMainData columns={columns} URL={"Purch/VendorTypes"} title="نوع مورد" />
    )
}

export default SuppliersTypes;