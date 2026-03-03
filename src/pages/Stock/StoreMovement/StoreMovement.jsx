import { handleOnlyDate } from "../../../helpers";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";
import ButtonPrintReportPage from "../../../components/PrintReport";

let switchValue = (key)=>{
  console.log(key);
  
  switch (key) {
    case 0: return "رصيد أول المدة"; 
    case 1: return "إضافة"
    case 2: return "صرف"
    case 3: return "مرتد صرف"
    case 4: return "عينات و هدايا واردة"
    case 5: return "عينات و هدايا صادرة"
    default: return "تالف"
  }
}
const columns = [
  {
    title: 'رقم المستند',
    dataIndex: 'DocNo',
    ...getColumnSearchProps('DocNo', "رقم المستند")
  },
  {
    title: 'تاريخ المستند',
    search: "DocDate",
    render: (record)=>(
      <span>{handleOnlyDate(record.DocDate)}</span>
    ),
    ...getColumnSearchProps('DocDate', "تاريخ المستند")

  },
  {
    title: 'نوع الحركة',
    dataIndex: 'TransType',
    
    filters: [
      { text: 'رصيد أول المدة', value: 0 },
      { text: 'إضافة', value: 1 },
      { text: "صرف", value: 2 },
      { text: "مرتد صرف", value: 3 },
      { text: "عينات و هدايا واردة", value: 4 },
      { text: "عينات و هدايا صادرة", value: 5 },
      { text: "تالف", value: 6 },
    ],
    
    onFilter: (value, record) => record.TransType === value,
    filterMultiple: true,
    render: (record)=>(
      <span>{switchValue(record)}</span>
    ),
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    search: "Notes",
    ...getColumnSearchProps('Notes', "ملاحظات")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TransDoc}`} />
        <DeleteBtn url={`Stock/Trans?TransDoc=${record.TransDoc}`} />
        <ButtonPrintReportPage WindowName={"StockInvoice"} DocId={record.TransDoc} />
      </>

    ),
    key: 'StoreID',
  },

];


const StoreMovement = ()=>{
    return(
      <TableMainData columns={columns} URL={"Stock/Trans"} title="حركة مخزن" />
    )
}

export default StoreMovement;