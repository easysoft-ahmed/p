import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData from "../../../components/TableMainData";

const columns = [
  {
    title: 'رقم الصنف',
    dataIndex: 'ProductID',
    key: 'name',
  },
  {
    title: 'إسم الصنف',
    dataIndex: 'Productname',
    key: 'Productname',
  },
  {
    title: 'Product Name',
    dataIndex: 'ProdEngName',
    key: 'ProdEngName',
  },
  {
    title: 'الكود المرجعي', 
    dataIndex: 'CurrRate', // Need Change
    key: 'age', // Need Change
  },
  {
    title: 'الوحدة',
    dataIndex: 'MainUnitName',
    key: 'MainUnitName',
  },
  {
    title: 'التصنيف',
    dataIndex: 'CategoryName',
    key: 'CategoryName',
  },
  {
    title: 'المنشأ',
    dataIndex: 'CountryName',
    key: 'CountryName',
  },
  {
    title: 'الماركة',
    dataIndex: 'Marka',
    key: 'Marka',
  },
  {
    title: 'الموديل',
    dataIndex: 'Modale',
    key: 'Modale',
  },
  {
    title: 'الوصف',
    dataIndex: 'CurrRate', // Need Change
    key: 'age', // Need Change
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