import { Link } from "react-router-dom"
import TemplateOne from "../../Layouts/TemplateOne";

const sections = [
    {name: "الاكواد" , links: [
        {label: "أكواد العملات", path: "currencies"},
        {label: "أكواد الضرائب", path: "taxes"},
        {label: "أكواد الخزن", path: "boxs"},
        {label: "أكواد البنوك", path: "banks"},
        {label: "أكواد البنود ( مقبوضات - مدفوعات)", path: "code_cash_flow"},
        {label: "تصنيف البنود ( مقبوضات - مدفوعات)", path: "rank_cash_flow"},
        {label: "أكواد تعامل جهات اخرى", path: "#"},
    ]},
    {name: "الإيصالات", links: [
        {label: "إيصالات قبض", path: "cash_receipt"},
        {label: "إيصالات دفع", path: "payment_receipt"},
    ]},
    {name: "الشيكات", links: [
        {label: "شيكات واردة", path: "incoming_checks"},
        {label: "شيكات صادرة", path: "outgoing_checks"},
        {label: "إيداع في حافظة", path: "deposit_in_wallet"},
        {label: "إيداع شيكات واردة", path: "deposit_incoming_checks"},
        {label: "صرف شيكات صادرة", path: "exchange_outgoing_checks"},
        {label: "رد شيكات واردة", path: "return_incoming_checks"},
        {label: "رد شيكات صادرة", path: "return_outgoing_checks"},
    ]},
    {name: "الماليات", links: [
        {label: "التحويلات المالية", path: "money_transfer"},
        {label: "التسويات المالية", path: "fin_adjustments"},
    ]},
    {name: "الاقساط", links: [
        {label: "إضافة بيانات الاقساط", path: "installments_data"},
        {label: "التسويات المالية", path: "fin_adjustments"},
    ]}
]

const Financial = ()=>{
    return(
        <TemplateOne data={sections} />
    )
}


export default Financial;