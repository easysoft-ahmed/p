import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المستخدم',
    dataIndex: 'UserID',
    key: 'UserID',
  },
  {
    title: 'أسم المستخدم',
    dataIndex: 'UserName',
    key: 'UserName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.UserID}`} />
        <DeleteBtn url={`Identity/Users?UserId=${record.UserID}`} />
      </>

    ),
    key: 'UserID',
  },

];


const Users = ()=>{
  return(
    <TableMainData columns={columns} URL={"Identity/Users"} title="مستخدم" />
  )
}

export default Users;