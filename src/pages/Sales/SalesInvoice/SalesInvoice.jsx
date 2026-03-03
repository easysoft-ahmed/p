import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import ButtonPrintReportPage from "../../../components/PrintReport";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocID',
    key: 'name',
    ...getColumnSearchProps('DocID', "رقم الفاتورة")
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'CustomerName',
    key: 'age',
    ...getColumnSearchProps('CustomerName', "اسم الجهة")
  },
  {
    title: 'الرقم الدفتري',
    dataIndex: 'DocTr_type',
    key: 'age',
    ...getColumnSearchProps('DocTr_type', "الرقم الدفتري")
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'age',
    ...getColumnSearchProps('DocDate', "تاريخ الفاتورة")
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
    key: 'age',
    ...getColumnSearchProps('NetTotal', "صافي القيمة")
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'age',
    ...getColumnSearchProps('Notes', "ملاحظات")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Sales?DocNumver=${record.DocNo}`} />
        <ButtonPrintReportPage WindowName={"SalesInvoice"} DocId={record.DocNo} />
      </>

    ),
  },

];


const SalesInvoice = ()=>{
  return(
    <TableMainData columns={columns} URL={"Sales"} title="فاتورة مبيعات" />
  )
}

export default SalesInvoice;