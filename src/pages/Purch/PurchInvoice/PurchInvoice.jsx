import EditBtn from "../../../components/EditBtn";
import DeleteBtn from "../../../components/DeleteBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الفاتورة',
    dataIndex: 'DocNo',
    key: 'DocID',
  },
  {
    title: 'اسم الجهة',
    dataIndex: 'VendorName',
    key: 'VendorName',
  },
  {
    title: 'الرقم الدفتري', 
    dataIndex: 'TaxName', // Need Change
    key: 'age', // Need Change
  },
  {
    title: 'تاريخ الفاتورة',
    dataIndex: 'DocDate',
    key: 'DocDate',
  },
  {
    title: 'صافي القيمة',
    dataIndex: 'NetTotal',
    key: 'NetTotal',
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    key: 'Notes',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.DocNo}`} />
        <DeleteBtn url={`Purch?DocId=${record.DocID}`} />
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