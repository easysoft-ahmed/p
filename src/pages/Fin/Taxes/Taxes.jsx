import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود الضريبة',
    dataIndex: 'TaxID',
    key: 'TaxID',
  },
  {
    title: 'اسم الضريبة',
    dataIndex: 'TaxName',
    key: 'TaxName',
  },
  {
    title: 'نسبة الضريبة',
    dataIndex: 'TaxRate',
    key: 'TaxRate',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TaxID}`} />
        <DeleteBtn url={`Fin/Taxs?TaxId=${record.TaxID}`} />
      </>

    ),
    key: 'TaxID',
  },

];


const Taxes = ()=>{
  return(
    <TableMainData columns={columns} URL={"Fin/Taxs"} title="ضريبة" />
  )
}

export default Taxes;