import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'TaxID2',
    key: 'name',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'TaxName2',
    key: 'age',
  },
  {
    title: 'الرقم الدفتري',
    dataIndex: 'TaxName2',
    key: 'age',
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'TaxName2',
    key: 'age',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'TaxName2',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'TaxName2',
    key: 'age',
  },
];


const SalesReturnInvoice = ()=>{
  return(
    <TableMainData columns={columns} URL={"Fin/Taxs"} title="فاتورة مرتد مبيعات" />
  )
}

export default SalesReturnInvoice;