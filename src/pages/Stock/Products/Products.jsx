import { useSearchParams } from "react-router-dom";
import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";
import { getProductBySearch } from "../../../services/ProductsApi";
import { useEffect, useState } from "react";
import useCategories from "../../../hooks/useCategories";


const Products = ()=>{
  let [newData, setNewData] = useState(null)
  let {data} = useCategories();
    const columns = [
      {
        title: 'رقم الصنف',
        dataIndex: 'ProductID',
        ...getColumnSearchProps('ProductID', "رقم الصنف")
      },
      {
        title: 'إسم الصنف',
        dataIndex: 'Productname',
        ...getColumnSearchProps('Productname', "إسم الصنف", setNewData)
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
        filters: data?.map(ele => { return {...ele, text: ele?.CategoryName, value: ele?.CategoryName}}) || [],
        onFilter: (value, record) => record.CategoryName.startsWith(value),

        // ...getColumnSearchProps('CategoryName', "التصنيف")
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
    
    return(
      <TableMainData columns={columns} resultSearch={newData} URL={"Stock/Products"} title="صنف" />
    )
}

export default Products;