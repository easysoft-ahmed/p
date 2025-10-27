import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_acc_code } from "../stateAccountCode";

const Comp1 = ()=>{
    let myData = useSelector(state => state.acc_code.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        if(prop){
            dispatch(edit_acc_code({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_acc_code({[id]: value}))
        }
    }
    return(
        <div className="flex flex-wrap justify-center gap-2 w-full">
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">كود الحساب</label>
                <input type="text" disabled value={myData?.AccID || ""} onChange={e => changeValue(e.target.value, "AccID")}  />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">الرتبة</label>
                <Input disabled value={myData?.AccRank || ""} onChange={e => changeValue(e.target.value, "AccRank")} />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">أسم الحساب بالعربي</label>
                <input type="text" value={myData?.AccName || ""} onChange={e => changeValue(e.target.value, "AccName")} />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">أسم الحساب بالانجليزية</label>
                <input type="text" value={myData?.AccEngName || ""} onChange={e => changeValue(e.target.value, "AccEngName")} />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">الحساب الاعلى</label>
                <Select className="w-full" value={myData?.UpAccId?.toString() || ""} onChange={value => changeValue(value, "UpAccId")}>
                    {myData?.dataSelects?.acc_codes?.map(up => 
                        <Select.Option value={up.AccID?.toString()}>{up.AccName}</Select.Option>    
                    )}
                </Select>
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">التوجية المحاسبي</label>
                <Select className="w-full" value={myData?.AccDir} onChange={value => changeValue(value, "AccDir")}>
                    {/* {myData?.dataSelects?.acc_codes?.map(up => 
                        <Select.Option value={up.AccID?.toString()}>{up.AccName}</Select.Option>    
                    )} */}
                    <Select.Option value={0}>بدون تحديد</Select.Option>
                    <Select.Option value={1}>عملاء</Select.Option>
                    <Select.Option value={2}>موردين</Select.Option>
                    <Select.Option value={3}>جهات</Select.Option>
                    <Select.Option value={4}>مخازن</Select.Option>
                    <Select.Option value={5}>اوراق القبض</Select.Option>
                    <Select.Option value={6}>اوراق الدفع</Select.Option>
                    <Select.Option value={7}>خزن</Select.Option>
                    <Select.Option value={8}>بنوك</Select.Option>
                    <Select.Option value={9}>مشتريات</Select.Option>
                    <Select.Option value={10}>مرتد مشتريات</Select.Option>
                    <Select.Option value={11}>مبيعات</Select.Option>
                    <Select.Option value={12}>مرتد مبيعات</Select.Option>
                </Select>
            </div>
        </div>

    )
}

export default Comp1;