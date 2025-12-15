import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد المناطق", path: "cities"},
        {label: "أكواد المندوبين", path: "delegates_staff"},
        {label: "أكواد مصدر العميل", path: "customer_source"},
        {label: "أكواد انواع العملاء", path: "customers_types"},
        {label: "أكواد العملاء", path: "customers"},
    ]},
    {name: "أخرى", links: [
        {label: "العروض الخاصة", path: "sale"},
        {label: "عروض الاسعار", path: "offers_price"},
        {label: "المبيعات", path: "sales_invoice"},
        {label: "مرتد المبيعات", path: "sales_return_invoice"},
    ]},
    {name: "التقارير", links: [
        {label: "إجمالي المبيعات", path: "reports/total_sales"},
        {label: "كشف حساب / ارصدة العملاء", path: "reports/customers_acc_statement"},
        {label: "ربحية الاصناف المباعة", path: "reports/profit_sales_products"},
        {label: "إجمالي حركة العملاء", path: "reports/total_customers_movement"},
        {label: "العملاء الراكدة", path: "reports/low_customers"},
        {label: "إجمالي الفواتير المستحقة", path: "reports/total_due_invoice"},
    ]},
]

const Sales = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Sales;