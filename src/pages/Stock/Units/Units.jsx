import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود وحدة القياس',
    dataIndex: 'UnitID',
    key: 'UnitID',
  },
  {
    title: 'اسم وحدة القياس',
    dataIndex: 'UnitName',
    key: 'UnitName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.UnitID}`} />
        <DeleteBtn url={`Stock/Units?UnitID=${record.UnitID}`} />
      </>
    ),
    key: 'UnitID',
  },

];


const Units = ()=>{


    return(
      <TableMainData columns={columns} URL={"Stock/Units"} title="وحدة قياس" />
    )
}

export default Units;