import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { edit_store_movement, init_state_store_movement } from "../stateStoreMovement";
function genUniqueId() {
  return Math.random().toString(9).substring(2, 7);
}

const Comp1 = ()=>{
    let myData = useSelector(state => state.store_movement.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_store_movement({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_store_movement({[id]: value}))
        }
    }


    
    return(
        <>
        
            <div className="flex flex-wrap justify-center">

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">رقم المستند</label>
                        <input type="text" disabled value={myData?.DocNo || ""} onChange={e => changeValue(e.target.value, "DocNo")}/>
                    </div>
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">تاريخ المستند</label>
                        <DatePicker value={dayjs(myData.DocDate)} allowClear={false} onChange={(date, dateStr)=>changeValue(dateStr, "DocDate")}/>
                    </div>
                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">نوع الحركة</label>
                        <Select
                            className="w-full" value={myData.TransType}
                            onChange={(value)=>changeValue(value, "TransType")}
                        >
                            <Select.Option value={0}>أرصدة أول المدة</Select.Option>
                            <Select.Option value={1}>إضافة</Select.Option>
                            <Select.Option value={2}>صرف</Select.Option>
                            <Select.Option value={3}>مرتد صرف</Select.Option>
                            <Select.Option value={4}>عينات و هدايا واردة</Select.Option>
                            <Select.Option value={5}>عينات و هدايا صادرة</Select.Option>
                            <Select.Option value={6}>تالف</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">استدعاء الصنف</label>
                        <Select className="w-full">
                            <Select.Option value="1">- بمعرفة المستخدم -</Select.Option>
                            <Select.Option value="2">كل الاصناف</Select.Option>
                            <Select.Option value="3">مورد رئيسي</Select.Option>
                            <Select.Option value="4">بلد المنشأ</Select.Option>
                            <Select.Option value="5">تصنيف</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">المخزن</label>
                        <Select
                            className="w-full"
                            showSearch
                            id="StoreId" value={myData?.StoreId || 0} onChange={value => changeValue(value, "StoreId")}
                            disabled
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.stores?.map(store => 
                                    <Select.Option value={store.StoreID}>{store.StoreName}</Select.Option>    
                                )}
                        </Select>
                    </div>

                    <div className="input_label_basic w-full lg:w-2/12">
                        <label htmlFor="">مركز التكلفة</label>
                        <Select className="w-full" defaultValue={1} disabled>
                            <Select.Option value={1}>-- غير محدد --</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-full lg:w-full">
                        <label htmlFor="">ملاحظات</label>
                        <TextArea rows={2} value={myData?.Notes || ""} onChange={e => changeValue(e.target.value, "Notes")}/>
                    </div>




                </div>
            </div>

        </>
    )
}

export default Comp1;