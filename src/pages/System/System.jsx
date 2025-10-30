import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "بيانات الشركة", path: "company_data"},
        {label: "الفروع", path: "branches"},
        {label: "المستخدمين", path: "users"},
    ]},
]

const System = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default System;