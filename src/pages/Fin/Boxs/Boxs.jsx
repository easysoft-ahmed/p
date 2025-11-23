import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود الخزنة',
    dataIndex: 'BoxID',
    key: 'name',
  },
  {
    title: 'اسم الخزنة',
    dataIndex: 'BoxName',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.BoxID}`} />
        <DeleteBtn url={`Fin/Boxs?BoxID=${record.BoxID}`} />
      </>

    ),
    key: 'BoxID',
  },

];


const Boxs = ()=>{
  return(
    <TableMainData columns={columns} URL={"Fin/Boxs"} title="خزينة" />
  )
}

export default Boxs;