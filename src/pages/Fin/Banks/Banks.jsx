import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود البنك',
    dataIndex: 'BankID',
    key: 'BankID',
  },
  {
    title: 'اسم البنك',
    dataIndex: 'BankName',
    key: 'BankName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.BankID}`} />
        <DeleteBtn url={`Fin/Banks?BankID=${record.BankID}`} />
      </>

    ),
    key: 'BankID',
  },

];


const Banks = ()=>{
  return(
    <TableMainData columns={columns} URL={"Fin/Banks"} title="بنك" />
  )
}

export default Banks;