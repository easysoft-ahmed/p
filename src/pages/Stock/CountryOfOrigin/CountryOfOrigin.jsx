import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود بلد المنشأ',
    dataIndex: 'CountryID',
    ...getColumnSearchProps('CountryID', "كود بلد المنشأ")
  },
  {
    title: 'اسم بلد المنشأ',
    dataIndex: 'CountryName',
    ...getColumnSearchProps('CountryName', "اسم بلد المنشأ")
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