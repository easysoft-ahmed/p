import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود العملة',
    dataIndex: 'CurrID',
    key: 'CurrID',
  },
  {
    title: 'اسم العملة',
    dataIndex: 'CurrName',
    key: 'CurrName',
  },
  {
    title: 'معامل العملة',
    dataIndex: 'CurrRate',
    key: 'CurrRate',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.CurrID}`} />
        <DeleteBtn url={`Fin/Currs?CurrId=${record.CurrID}`} />
      </>

    ),
    key: 'CurrID',
  },

];


const Currencies = ()=>{
  return(
    <TableMainData columns={columns} URL={"Fin/Currs"} title="عملة" />
  )
}

export default Currencies;