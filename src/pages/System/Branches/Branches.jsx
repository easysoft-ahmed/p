import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

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
  return(
    <TableMainData columns={columns} URL={"Sys/Branches"} title="فرع" />
  )
}

export default Branches;