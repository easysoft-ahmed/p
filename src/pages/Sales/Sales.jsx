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
]

const Sales = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Sales;