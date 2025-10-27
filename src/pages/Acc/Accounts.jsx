import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد الحسابات", path: "accounts_codes"},
        {label: "أكواد اليوميات المساعدة", path: "helps_codes"},
    ]},
]
const Accounts = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Accounts;