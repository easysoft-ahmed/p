import DeleteBtn from "../../../components/DeleteBtn";
import EditBtn from "../../../components/EditBtn";
import ButtonPrintReportPage from "../../../components/PrintReport";
import TableMainData, { getColumnSearchProps } from "../../../components/TableMainData";

const columns = [
  {
    title: 'كود المورد',
    dataIndex: 'VendorID',
    key: 'VendorID',
    ...getColumnSearchProps('VendorID', "كود المورد")
  },
  {
    title: 'اسم المورد',
    dataIndex: 'VendorName',
    key: 'VendorName',
    ...getColumnSearchProps('VendorName', "اسم المورد")
    
  },
  {
    title: 'رقم التلفون',
    dataIndex: 'Phone',
    key: 'Phone',
    ...getColumnSearchProps('Phone', "رقم التلفون")
  },
  {
    title: 'السجل التجاري',
    dataIndex: 'OfficalNo',
    key: 'OfficalNo',
    ...getColumnSearchProps('OfficalNo', "السجل التجاري")
  },
  {
    title: 'البطاقة الضريبية',
    dataIndex: 'TaxCrad',
    key: 'TaxCrad',
    ...getColumnSearchProps('TaxCrad', "البطاقة الضريبية")
  },
  {
    title: 'إجراء',
    render: (record) => (
      <>
        <EditBtn url={`edit/${record.VendorID}`} />
        <DeleteBtn url={`Purch/Vendors?VendorID=${record.VendorID}`} />
        {/* <ButtonPrintReportPage WindowName={"VendorsReport"} DocId={record.VendorID} /> */}
      </>

    ),
    key: 'StoreID',
  },


];


const Suppliers = ()=>{
    return(
      <TableMainData columns={columns} URL={"Purch/Vendors"} title="مورد" />
    )
}

export default Suppliers;