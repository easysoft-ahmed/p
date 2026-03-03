import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود الحساب',
    dataIndex: 'AccID',
    key: 'name',
  },
  {
    title: 'اسم الحساب',
    dataIndex: 'AccName',
    key: 'age',
  },
  {
    title: 'رتبة الحساب',
    dataIndex: 'AccRank',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.AccID}`} />
        <DeleteBtn url={`Acc/Accs?AccId=${record.AccID}`} />
      </>

    ),
    key: 'AccId',
  },

];


const AccountsCodes = ()=>{
  return(
    <TableMainData columns={columns} URL={"Acc/Accs"} title="حساب" />
  )
}

export default AccountsCodes;