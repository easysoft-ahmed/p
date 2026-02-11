import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الصنف',
    dataIndex: 'ProductID',
    ...getColumnSearchProps('ProductID', "رقم الصنف")
  },
  {
    title: 'إسم الصنف',
    dataIndex: 'Productname',
    ...getColumnSearchProps('Productname', "إسم الصنف")
  },
  {
    title: 'Product Name',
    dataIndex: 'ProdEngName',
    ...getColumnSearchProps('ProdEngName', "Product Name")
  },
  {
    title: 'الكود المرجعي', 
    dataIndex: 'CurrRate', // Need Change
    ...getColumnSearchProps('CurrRate', "الكود المرجعي")
  },
  {
    title: 'الوحدة',
    dataIndex: 'MainUnitName',
    ...getColumnSearchProps('MainUnitName', "الوحدة")
  },
  {
    title: 'التصنيف',
    dataIndex: 'CategoryName',
    ...getColumnSearchProps('CategoryName', "التصنيف")
  },
  {
    title: 'المنشأ',
    dataIndex: 'CountryName',
    ...getColumnSearchProps('CountryName', "المنشأ")
  },
  {
    title: 'الماركة',
    dataIndex: 'Marka',
    ...getColumnSearchProps('Marka', "الماركة")
  },
  {
    title: 'الموديل',
    dataIndex: 'Modale',
    ...getColumnSearchProps('Modale', "الموديل")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.ProductID}`} />
        <DeleteBtn url={`Stock/Products?ProductID=${record.ProductID}`} />
      </>

    ),
  },

];


const Products = ()=>{
    return(
      <TableMainData columns={columns} URL={"Stock/Products"} title="صنف" />
    )
}

export default Products;