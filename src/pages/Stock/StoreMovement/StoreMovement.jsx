import { handleOnlyDate } from "../../../helpers";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

let switchValue = (key)=>{
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
    search: 'DocNo',
    key: 'name',
  },
  {
    title: 'تاريخ المستند',
    search: "DocDate",
    render: (record)=>(
      <span>{handleOnlyDate(record.DocDate)}</span>
    )
  },
  {
    title: 'نوع الحركة',
    search: "TransType",
    render: (record)=>(
      <span>{switchValue(record.TransType)}</span>
    )
  },
  {
    title: 'ملاحظات',
    dataIndex: 'Notes',
    search: "Notes",
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.TransDoc}`} />
        <DeleteBtn url={`Stock/Trans?TransDoc=${record.TransDoc}`} />
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