import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد انواع الموردين", path: "suppliers_types"},
        {label: "أكواد الموردين", path: "suppliers"},
    ]},
    {name: "أخرى", links: [
        {label: "فاتورة المشتريات", path: "purch_invoice"},
        {label: "فاتورة مرتد المشتريات", path: "purch_return_invoice"},
    ]},
    {name: "أخرى", links: [
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
        <TemplateOne data={sections} />
    )
}


export default Purch;