import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker } from "antd";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { edit_cash_out } from "../stateCashOut";

const Comp1 = ()=>{
    let myData = useSelector(state => state.cash_out.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        if(prop){
            dispatch(edit_cash_out({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_cash_out({[id]: value}))
        }
    }

    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic pe-4 w-3/12">
                        <label htmlFor="">رقم الفاتورة</label>
                        <input type="text" disabled value={myData?.DocNo || ""} onChange={e => changeValue(e.target.value, "DocNo")} />
                    </div>
                    <div className="input_label_basic pe-4 w-3/12">
                        <label htmlFor="">تاريخ الفاتورة</label>
                        <DatePicker value={dayjs(myData.DocDate)} allowClear={false} onChange={(date, dateStr)=>changeValue(dateStr, "DocDate")} />
                    </div>
                    <div className="input_label_basic w-full lg:w-6/12">
                        <label htmlFor="">ملاحظات</label>
                        <input type="text" value={myData?.Notes || ""} onChange={e => changeValue(e.target.value, "Notes")} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Comp1;