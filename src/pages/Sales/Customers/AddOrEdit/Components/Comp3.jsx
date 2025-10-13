import { useDispatch, useSelector } from "react-redux";
import { edit_customer } from "../stateCustomer";

const Comp3 = ()=>{
    let myData = useSelector(state => state.customer.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_customer({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_customer({[id]: value}))
        }
    }

    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">السجل التجاري</label>
                        <input type="text" value={myData?.OfficalNo || ""} onChange={e => changeValue(e.target.value, "OfficalNo")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">البطاقة الضريبية</label>
                        <input type="text" value={myData?.TaxCrad || ""} onChange={e => changeValue(e.target.value, "TaxCrad")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">رقم التسجيل الضريبي</label>
                        <input type="text" value={myData?.TaxNo || ""} onChange={e => changeValue(e.target.value, "TaxNo")} />
                    </div>
                </div>
            </div>
    )
}

export default Comp3;