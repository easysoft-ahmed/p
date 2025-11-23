import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "وحدات القياس", path: "units"},
        {label: "الالوان", path: "colors"},
        // {label: "مجموعات المقاسات", path: "sizes_group"},
        {label: "المقاسات", path: "sizes"},
        {label: "بلد المنشأ", path: "country_of_origin"},
        {label: "الاصناف", path: "products"},
        {label: "المخازن", path: "stores"},
    ]},
    {name: "أخرى", links: [
        {label: "طباعة الباركود", path: "print_barcode"},
        {label: "حركة المخزون", path: "stores_movement"},
        {label: "التحويلات بين المخازن", path: "store_transform"},
        {label: "حركة الجرد الفعلي", path: "real_inventory"},
        {label: "قائمة الاسعار", path: "price_list"},
        {label: "بحث متقدم للاصناف", path: "advanced_search"},
    ]},
    {name: "الاعدادات", links: [
        {label: "التثبيت و الخصائص", path: "settings"},
    ]}  
]

const Stock = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Stock;