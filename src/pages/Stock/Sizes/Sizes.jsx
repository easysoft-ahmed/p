import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المقاس',
    dataIndex: 'MeagureID',
    key: 'MeagureID',
  },
  {
    title: 'اسم المقاس',
    dataIndex: 'MeagureName',
    key: 'MeagureID',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.MeagureID}`} />
        <DeleteBtn url={`Stock/Meagures?MeagureID=${record.MeagureID}`} />
      </>
    ),
    key: 'MeagureID',

  },

];


const Sizes = ()=>{
    return(
      <TableMainData columns={columns} URL={"Stock/Meagures"} title="مقاس" />
    )
}

export default Sizes;