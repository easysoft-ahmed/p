import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المندوب',
    dataIndex: 'SellerID',
    key: 'SellerID',
  },
  {
    title: 'اسم البائع',
    dataIndex: 'SellerName',
    key: 'SellerName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.SellerID}`} />
        <DeleteBtn url={`Sales/Sellers?SellerID=${record.SellerID}`} />
      </>

    ),
    key: 'StoreID',
  },


];


const DelegatesAndStaff = ()=>{
    return(
      <TableMainData columns={columns} URL={"Sales/Sellers"} title="مندوب" />
    )
}

export default DelegatesAndStaff;