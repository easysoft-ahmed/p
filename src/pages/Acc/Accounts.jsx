import { Link } from "react-router-dom"

const Accounts = ()=>{
    return(
        <div className="w-full">
            <h2 className="w-full">الاكواد</h2>
            <div className="flex gap-4">
                <Link to="/accounts/accounts_codes">أكواد الحسابات</Link>
                <Link to="/accounts/helps_codes">أكواد اليوميات المساعدة</Link>
            </div>
        </div>
    )
}


export default Accounts;