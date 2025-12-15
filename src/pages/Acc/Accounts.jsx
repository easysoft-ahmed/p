import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {
        name: "الاكواد" ,
        links: [
            {label: "أكواد الحسابات", path: "accounts_codes"},
            {label: "أكواد اليوميات المساعدة", path: "helps_codes"},
        ]
    },
    {
        name: "التقارير" ,
        links: [
            {label: "اجمالي قيود اليومية", path: "reports/total_daily_restrict"},
            {label: "كشف حساب الاستاذ المساعد", path: "reports/general_ledger_statement"},
            {label: "التقارير الختامية", path: "reports/final_report"},
        ]
    },
]
const Accounts = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Accounts;