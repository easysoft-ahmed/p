import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocID',
    key: 'name',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'CustomerName',
    key: 'age',
  },
  {
    title: 'الرقم الدفتري',
    dataIndex: 'DocTr_type',
    key: 'age',
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'age',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
    key: 'age',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Sales?DocNumver=${record.DocNo}`} />
      </>

    ),
    key: 'StoreID',
  },

];


const SalesInvoice = ()=>{
  return(
    <TableMainData columns={columns} URL={"Sales"} title="فاتورة مبيعات" />
  )
}

export default SalesInvoice;