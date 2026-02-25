import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import usePost from "../../../../../hooks/usePost";
import { useDispatch, useSelector } from "react-redux";
import { edit_store_transform, init_state_store_transform } from "../stateStoreTransform";
import { useNavigate, useParams } from "react-router-dom";
import usePut from "../../../../../hooks/usePut";
import { useState } from "react";
import MessageRequest from "../../../../../components/MessageRequest";
import ButtonPrintReportPage from "../../../../../components/PrintReport";
function genUniqueId() {
  return Math.random().toString(9).substring(2, 7);
}

const Comp1 = ()=>{
    
    let myData = useSelector(state => state.store_transform.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        if(prop){
            dispatch(edit_store_transform({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_store_transform({[id]: value}))
        }
    }

    

    return(
        <>
            <div className="flex flex-wrap justify-center">

                <div className="flex flex-wrap w-full">
                    <div className=" flex flex-wrap w-full lg:w-6/12">
                        <div className="input_label_basic pe-4 w-6/12">
                            <label htmlFor="">رقم المستند</label>
                            <input type="text" disabled value={myData?.DocNo || ""} onChange={e => changeValue(e.target.value, "DocNo")}/>
                        </div>
                        <div className="input_label_basic pe-4 w-6/12">
                            <label htmlFor="">تاريخ المستند</label>
                            <DatePicker value={dayjs(myData.DocDate)} allowClear={false} onChange={(date, dateStr)=>changeValue(dateStr, "DocDate")}/>
                        </div>

                        <div className="input_label_basic pe-4 w-full lg:w-6/12">
                            <label htmlFor="">من مخزن</label>
                            <Select className="w-full"
                                value={myData.StoreName || myData.StoreId ? myData?.dataSelects?.stores?.filter(store => store.StoreID == myData.StoreId)[0]?.StoreName || myData.StoreId : ""}
                                options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}
                                onChange={(value, record) =>{
                                    if(myData.ToStoreId !== record?.StoreID){
                                        dispatch(edit_store_transform({StoreId: record?.StoreID, StoreName: record?.StoreName}));
                                    }

                                }}
                            />
                        </div>
                        <div className="input_label_basic pe-4 w-full lg:w-6/12">
                            <label htmlFor="">الى مخزن</label>
                            <Select
                                className="w-full"
                                value={myData.ToStoreName || myData.ToStoreId ? myData?.dataSelects?.stores?.filter(store => store.StoreID == myData.ToStoreId)[0]?.StoreName || myData.ToStoreId : ""}
                                onChange={(value, record) =>{
                                    if(myData.StoreId !== record?.StoreID){
                                        dispatch(edit_store_transform({ToStoreId: record?.StoreID, ToStoreName: record?.StoreName}));
                                    }
                                }}
                                showSearch filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}
                            />
                        </div>
                    </div>
                    
                    <div className="input_label_basic w-full lg:w-6/12">
                        <label htmlFor="">ملاحظات</label>
                        <TextArea className="!m-0 !mb-2" rows={5} value={myData?.Notes || ""} onChange={e => changeValue(e.target.value, "Notes")}/>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Comp1;