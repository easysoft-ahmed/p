import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_user } from "../stateUser";
import dayjs from "dayjs";

const Comp1 = ()=>{
    let myData = useSelector(state => state.user.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_user({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_user({[id]: value}))
        }
    }
    return(
        <>
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="UserID">كود المستخدم</label>
                        <input type="text" disabled value={myData?.UserID || ""} onChange={e => changeValue(e.target.value, "UserID")} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="UserName">أسم المستخدم</label>
                        <input type="text" value={myData?.UserName || ""} onChange={e => changeValue(e.target.value, "UserName")} />
                    </div>
                    <div className="w-full"></div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="Email">البريد الالكتروني</label>
                        <input type="text" value={myData?.Email || ""} onChange={e => changeValue(e.target.value, "Email")} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                            <label htmlFor="">الصلاحية</label>
                            <Select
                                className="w-full" value={myData?.UserRole}
                                onChange={(value)=> changeValue(value, "UserRole")}
                            >
                                <Select.Option value={"0"}>مسؤول عام</Select.Option>
                                <Select.Option value={"1"}>دعم فني</Select.Option>
                                <Select.Option value={"2"}>مسؤول مخزن</Select.Option>
                            </Select>
                    </div>
                    <div className="w-full"></div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">العميل</label>
                        <Select className="w-full"
                            placeholder="-- غير محدد --"
                            onChange={(value)=>changeValue(value, "CustomerID")}
                            value={myData?.CustomerID}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            showSearch
                            options={myData?.dataSelects?.customers?.map(cust =>{ return {...cust, label: cust.CustomerName, value: cust.CustomerID}})}
                        />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="UserPassword">كلمة المرور</label>
                        <input type="password" value={myData?.UserPassword || ""} onChange={e => changeValue(e.target.value, "UserPassword")} />
                    </div>


            </div>

        </>
    )
}

export default Comp1;