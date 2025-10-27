import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_acc_code } from "../stateAccountCode";


const Comp2 = ()=>{
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
            <div className="flex justify-center gap-2 self-start mt-6 ">
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">طبيعة الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="debit_credit" checked={myData?.AccNeture === 1} onClick={e => changeValue(1, "AccNeture")} id="debit_credit_credit"/>
                            <label htmlFor="debit_credit_credit">مدين</label>
                        </div>
                        <div>
                            <input type="radio" name="debit_credit" id="debit_credit_depit"/>
                            <label htmlFor="debit_credit_depit" checked={myData?.AccNeture === 2} onClick={e => changeValue(2, "AccNeture")}>دائن</label>
                        </div>
                        <div>
                            <input type="radio" name="debit_credit" id="debit_credit_both"/>
                            <label htmlFor="debit_credit_both" checked={myData?.AccNeture === 3} onClick={e => changeValue(3, "AccNeture")}>مدين / دائن</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">نوع الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="acc_type" id="acc_type_main" checked={myData?.AccType === 1} onClick={e => changeValue(1, "AccType")}/>
                            <label htmlFor="acc_type_main">رئيسي</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_type" id="acc_type_child" checked={myData?.AccType === 2} onClick={e => changeValue(2, "AccType")}/>
                            <label htmlFor="acc_type_child">فرعي</label>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap content-start w-3/12 p-4 border rounded-md relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">مجموعة الحساب</h5>
                    <div className="[&>*]:py-2 [&_label]:px-2">
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_1" checked={myData?.AccGroup === 1} onClick={e => changeValue(1, "AccGroup")}/>
                            <label htmlFor="acc_group_1">اصول</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_2" checked={myData?.AccGroup === 2} onClick={e => changeValue(2, "AccGroup")}/>
                            <label htmlFor="acc_group_2">خصوم</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_3" checked={myData?.AccGroup === 3} onClick={e => changeValue(3, "AccGroup")}/>
                            <label htmlFor="acc_group_3">مصروفات</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_4" checked={myData?.AccGroup === 4} onClick={e => changeValue(4, "AccGroup")}/>
                            <label htmlFor="acc_group_4">ايرادات</label>
                        </div>
                        <div>
                            <input type="radio" name="acc_group" id="acc_group_5" checked={myData?.AccGroup === 5} onClick={e => changeValue(5, "AccGroup")}/>
                            <label htmlFor="acc_group_5">اخرى</label>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Comp2;