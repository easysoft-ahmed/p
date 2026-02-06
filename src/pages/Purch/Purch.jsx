import ButtonPrintReportPage from "../../components/PrintReport";
import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد انواع الموردين", path: "suppliers_types"},
        {label: "أكواد الموردين", path: "suppliers"},
    ]},
    {name: "أخرى", links: [
        {label: "امر شراء", path: "purch_order"},
        {label: "طلب شراء", path: "purch_request"},
        {label: "فاتورة المشتريات", path: "purch_invoice"},
        {label: "فاتورة مرتد المشتريات", path: "purch_return_invoice"},
    ]},
    {name: "التقارير", links: [
        {label: "إجمالي المشتريات", path: "reports/total_purch"},
        {label: "كشف حساب / ارصدة الموردين", path: "reports/suppliers_acc_statement"},
        {label: "تقرير مصروفات المشتريات", path: "reports/purch_expenses"},
        {label: "إجمالي طلبات الشراء", path: "reports/total_order_purch"},
        {label: "إجمالي اومر الشراء", path: "reports/total_command_purch"},
    ]},
    {name: "الاعدادات", links: [
        {label: "التثبيت و الخصائص", path: "settings"},
    ]},
]

const Purch = ()=>{
    return(
        <>
            <TemplateOne data={sections} />
            <div className="section_row">
                <h2 className="w-full">اوامر طباعة</h2>
                <div className="flex flex-wrap gap-4 w-full pt-4">
                    <ButtonPrintReportPage title="الموردين" WindowName={"VendorsReport"} DocId={1}/>
                </div>
            </div>

        </>
    )
}


export default Purch;