import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد الموردين", path: "suppliers"},
    ]},
    {name: "أخرى", links: [
        {label: "فاتورة المشتريات", path: "purch_invoice"},
        {label: "فاتورة مرتد المشتريات", path: "purch_return_invoice"},
    ]},
]

const Purch = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Purch;