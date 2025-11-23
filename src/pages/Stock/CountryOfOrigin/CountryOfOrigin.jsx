import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود بلد المنشأ',
    dataIndex: 'CountryID',
    key: 'name',
  },
  {
    title: 'اسم بلد المنشأ',
    dataIndex: 'CountryName',
    key: 'age',
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.CountryID}`} />
        <DeleteBtn url={`Sys/Countries?CountryId=${record.CountryID}`} />
      </>

    ),
    key: 'CountryID',
  },

];


const CountryOfOrigin = ()=>{
    return(
      <TableMainData columns={columns} URL={"Sys/Countries"} title="بلد منشأ" />
    )
}

export default CountryOfOrigin;