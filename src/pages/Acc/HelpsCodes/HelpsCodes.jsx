import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود اليومية',
    dataIndex: 'AccDailyId',
    key: 'AccDailyId',
  },
  {
    title: 'أسم اليومية',
    dataIndex: 'AccDailyName',
    key: 'AccDailyName',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.AccDailyId}`} />
        <DeleteBtn url={`Acc/AccDailys?DailyId=${record.AccDailyId}`} />
      </>

    ),
    key: 'AccDailyId',
  },

];


const HelpsCodes = ()=>{
  return(
    <TableMainData columns={columns} URL={"Acc/AccDailys"} title="كود مساعدة" />
  )
}

export default HelpsCodes;