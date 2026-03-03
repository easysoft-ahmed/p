import EditBtn from "../../../components/EditBtn";
import DeleteBtn from "../../../components/DeleteBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";
import ButtonPrintReportPage from "../../../components/PrintReport";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocNo',
    key: 'DocID',
    ...getColumnSearchProps('DocNo', "رقم الفاتورة")
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'VendorName',
    key: 'VendorName',
    ...getColumnSearchProps('VendorName', "اسم الجهة")
  },
  {
    title: 'الرقم الدفتري', 
    dataIndex: 'TaxName', // Need Change
    key: 'age', // Need Change
    ...getColumnSearchProps('TaxName', "الرقم الدفتري")
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'DocDate',
    ...getColumnSearchProps('DocDate', "تاريخ الفاتورة")
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
    key: 'NetTotal',
    ...getColumnSearchProps('NetTotal', "صافي القيمة")
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'Notes',
    ...getColumnSearchProps('Notes', "ملاحظات")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Purch?DocId=${record.DocID}`} />
        <ButtonPrintReportPage WindowName={"PurchesInvoice"} DocId={record.DocID} />
      </>

    ),
    key: 'StoreID',
  },

];


const PurchInvoice = ()=>{

    return(
      <TableMainData columns={columns} URL={"Purch"} title="فاتورة مشتريات" />
    )
}

export default PurchInvoice;