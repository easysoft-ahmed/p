import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import { edit_purch_order } from "../statePurchOrder";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

const Comp1 = ()=>{
    let myData = useSelector(state => state.purch_order.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        if(prop){
            dispatch(edit_purch_order({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_purch_order({[id]: value}))
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
                        <label htmlFor="">فاتورة مورد</label>
                        <input disabled type="text" value={myData?.OtherDocNo || ""} onChange={e => changeValue(e.target.value, "OtherDocNo")} />
                    </div>
                    <div className="input_label_basic pe-4 w-3/12">
                        <label htmlFor="">تاريخ الفاتورة</label>
                        <DatePicker value={dayjs(myData.DocDate)} allowClear={false} onChange={(date, dateStr)=>changeValue(dateStr, "DocDate")} />
                    </div>
                    <div className="input_label_basic  w-3/12">
                        <label htmlFor="">تاريخ الاستحقاق</label>
                        <DatePicker value={dayjs(myData.DueDate)} allowClear={false} onChange={(date, dateStr)=>changeValue(dateStr, "DueDate")} />
                    </div>
                    <div className="input_label_basic w-full lg:w-2/12">
                        <label htmlFor="">العملة</label>
                        <Select
                            placeholder="-- غير محدد --"
                            allowClear
                            onChange={(val, opt)=>{
                                dispatch(edit_purch_order({CurrID: opt.CurrID, CurrRate: opt.CurrRate}))
                            }}
                            value={myData?.CurrID}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            showSearch
                            options={myData?.dataSelects?.currencies?.map(curr =>{ return {...curr, label: curr.CurrName, value: curr.CurrID}})}
                        />
                    </div>

                    <div className="input_label_basic w-full px-4 lg:w-1/12">
                        <label htmlFor="">قيمة العملة</label>
                        <input type="text" value={myData?.CurrRate} onChange={(e) => changeValue(e.target.value, "CurrRate")} />
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-3/12">
                        <label htmlFor="">نوع الجهة</label>
                        <Select 
                            className="w-full"
                            value={myData?.SideType} 
                            onChange={value => dispatch(edit_purch_order({SideType: value, CustomerId: "", CustomerName: "", SellerID: "", SellerName: "", VendorID: "", VendorName: ""}))}
                        >
                            <Select.Option value={0}>عميل</Select.Option>
                            <Select.Option value={1}>مورد</Select.Option>
                            <Select.Option value={2}>مندوب</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-3/12">
                        <label htmlFor="">اسم الجهة</label>
                        <Select
                            className="w-full"
                            value={myData?.[myData?.SideType === 0 ? "CustomerId" : myData?.SideType === 1 ? "VendorId":"SellerID"]} 
                            onChange={(value, opt) =>{
                                dispatch(edit_purch_order({
                                    [myData?.SideType === 0 ? "CustomerId" : myData?.SideType === 1 ? "VendorId":"SellerID"]: opt[myData?.SideType === 0 ? "CustomerID" : myData?.SideType === 1 ? "VendorID":"SellerID"] ,
                                    [myData?.SideType === 0 ? "CustomerName" : myData?.SideType === 1 ? "VendorName":"SellerName"]: opt[myData?.SideType === 0 ? "CustomerName" : myData?.SideType === 1 ? "VendorName":"SellerName"]}))
                            }}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            showSearch
                            options={
                                myData?.dataSelects?.[myData?.SideType === 0 ? "customers" : myData?.SideType === 1 ? "suppliers":"staff"]?.map(item =>{
                                    let test = {...item, value: item[myData?.SideType === 0 ? "CustomerID" : myData?.SideType === 1 ? "VendorID":"SellerID"], label: item[myData?.SideType === 0 ? "CustomerName" : myData?.SideType === 1 ? "VendorName":"SellerName"]}
                                    return test
                                })}
                        />
                    </div>

                    <div className="input_label_basic w-full lg:w-3/12">
                        <label htmlFor="">مندوب الشراء</label>
                        <Select className="w-full"
                            value={myData?.SellerID} 
                            onChange={(val , opt) => dispatch(edit_purch_order({SellerID: opt.SellerID, SellerName: opt.SellerName}))}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            showSearch
                            options={myData?.dataSelects?.staff?.map(staf =>{ return {...staf, label: staf.SellerName, value: staf.SellerID}})}
                            disabled={myData?.SideType === 2 ? true:false}
                        />
                    </div>

                    <div className="input_label_basic w-full pe-4 lg:w-3/12">
                        <label htmlFor="">اسم الحساب</label>
                        <Select 
                            className="w-full" 
                            id="AccId" 
                            value={myData?.AccId || ""}
                            onChange={value => changeValue(value, "AccId")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.acc_codes?.map(acc =>{ return {value: acc.AccID, label: acc.AccName, ...acc}})}
                        />
                    </div>

                    <div className="input_label_basic w-full pe-4 lg:w-6/12">
                        <label htmlFor="">ملاحظات</label>
                        <input type="text" value={myData?.Notes} onChange={e => changeValue(e.target.value, "Notes")} />
                    </div>

                    <div className="input_label_basic w-full lg:w-3/12">
                        <label htmlFor="">المخزن</label>
                        <Select
                            className="w-full"
                            showSearch
                            id="StoreId" value={myData?.StoreId || 0} onChange={(value) => changeValue(value, "StoreId")}
                            disabled
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.stores?.map(store => 
                                    <Select.Option value={store.StoreID}>{store.StoreName}</Select.Option>    
                                )}
                        </Select>
                    </div>




                </div>
            </div>

        </>
    )
}

export default Comp1;