import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_customer } from "../stateCustomer";
import dayjs from "dayjs";

const Comp1 = ()=>{
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
        <>
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-2/12">
                        <label htmlFor="">كود العميل</label>
                        <input type="text" disabled value={myData?.CustomerID || ""} onChange={e => changeValue(e.target.value, "CustomerID")} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">أسم العميل</label>
                        <input type="text" value={myData?.CustomerName || ""} onChange={e => changeValue(e.target.value, "CustomerName")} />
                    </div>
                    <div className="input_label_basic ps-2 w-5/12">
                        <label htmlFor="">العنوان</label>
                        <input type="text" value={myData?.Address || ""} onChange={e => changeValue(e.target.value, "Address")} />
                    </div>
                    <div className="input_label_basic ps-2 w-1/12 text-center">
                        <label htmlFor="stop_customer">وقف التعامل</label>
                        <Switch id="stop_customer" value={myData?.IsStoped || ""} onChange={value => changeValue(value, "IsStoped")} className="!w-auto" />
                    </div>

                    <div className="input_label_basic w-2/12">
                        <label htmlFor="">نوع العميل</label>
                        <Select className="w-full" value={myData?.CustTypeID?.toString() || ""} onChange={value => changeValue(value, "CustTypeID")}>
                            {myData?.dataSelects?.customers_types?.map(Cust => 
                                <Select.Option value={Cust.CustTypeID?.toString()}>{Cust.CustTypeName}</Select.Option>    
                            )}
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">المصدر</label>
                        <Select className="w-full" value={myData?.SourceId} onChange={value => changeValue(value, "SourceId")}>
                            <Select.Option value={1}>فيسبوك</Select.Option>
                            <Select.Option value={2}>انستجرام</Select.Option>
                            <Select.Option value={3}>واتساب</Select.Option>
                        </Select>
                    </div>



                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">تلفون</label>
                        <input type="text" value={myData?.Phone || ""} onChange={e => changeValue(e.target.value, "Phone")} />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">موبابيل</label>
                        <input type="text" value={myData?.Mobile || ""} onChange={e => changeValue(e.target.value, "Mobile")} />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">فاكس</label>
                        <input type="text" value={myData?.Fax || ""} onChange={e => changeValue(e.target.value, "Fax")} />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">الايميل</label>
                        <input type="text" value={myData?.EMail || ""} onChange={e => changeValue(e.target.value, "EMail")} />
                    </div>
                    
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">حد الائتمان</label>
                        <input type="text" value={myData?.CreditLimit || ""} onChange={e => changeValue(e.target.value, "CreditLimit")} />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">فترة الائتمان ( يوم )</label>
                        <input type="text" value={myData?.CreditLimitPeriod || ""} onChange={e => changeValue(e.target.value, "CreditLimitPeriod")} />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12 text-center">
                        <label htmlFor="customer_supplier">مورد / عميل</label>
                        <Switch id="customer_supplier" value={myData?.IsVendorCustomer || ""} onChange={value => changeValue(value, "IsVendorCustomer")} className="!w-auto" />
                    </div>

                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">المنطقة</label>
                        <Select className="w-full">
                            <Select.Option value="1">المعادي</Select.Option>
                            <Select.Option value="2">مدينة نصر</Select.Option>
                            <Select.Option value="3">اكتوبر</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">المندوب</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear value={myData?.SellerID || ""} onChange={value => changeValue(value, "SellerID")}
                            defaultValue={0} id="SellerID"
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                            {myData?.dataSelects?.staff?.map(staf => 
                                <Select.Option value={staf?.SellerID}>{staf.SellerName}</Select.Option>    
                            )}
                        </Select>
                    </div>

                    <div className="w-full flex">
                        <div className="flex flex-wrap items-end w-8/12 pe-4">
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">مركز التكلفة</label>
                                <Select 
                                    className="w-full" 
                                    id="CostId" 
                                    value={myData?.CostId} 
                                    onChange={value => changeValue(value, "CostId")}
                                >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                        {myData?.dataSelects?.cost_centers?.map(center => 
                                            <Select.Option value={center.CostID}>{center.CostName}</Select.Option>    
                                        )}
                                </Select>
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">حساب مرتبط</label>
                                <Select 
                                    className="w-full" 
                                    id="AccId" 
                                    value={myData?.AccId} 
                                    onChange={value => changeValue(value, "AccId")}
                                >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                        {myData?.dataSelects?.acc_codes?.map(acc => 
                                            <Select.Option value={acc?.AccID?.toString()}>{acc.AccName}</Select.Option>    
                                        )}
                                </Select>
                            </div>
                            <div className="flex ps-2 w-4/12">
                                <div className="input_label_basic w-9/12">
                                    <label htmlFor="">العملة</label>
                                    <Select
                                        showSearch
                                        placeholder="-- غير محدد --"
                                        allowClear
                                        onChange={(val, opt)=>{
                                            dispatch(edit_customer({CurrID: opt.CurrID, CurrRate: opt.CurrRate}))
                                        }}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        value={myData?.CurrID}
                                        options={myData?.dataSelects?.currencies?.map(curr =>{ return {...curr, label: curr.CurrName, value: curr.CurrID}})}
                                    />
                                </div>
                                <div className="input_label_basic ps-2 w-3/12">
                                    <label htmlFor="">المعامل</label>
                                    <input type="text" value={myData?.CurrRate} onChange={e => changeValue(e.target.value, "CurrRate")} />
                                </div>
                            </div>

                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">تاريخ أول المدة</label>
                                <DatePicker value={dayjs(myData?.FirstBalDate)} onChange={(date, dateStr)=>changeValue(dateStr, "FirstBalDate")}/>
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">رصيد اول المدة</label>
                                <input type="text" value={myData?.FirstBal || ""} onChange={e => changeValue(e.target.value, "FirstBal")} />
                            </div>
                            <div className="input_label_basic content-end ps-2 w-full lg:w-4/12">
                                <Radio.Group
                                    block
                                    options={[{label: "مدين", value: 0},{label: "دائن", value: 1}]}
                                    value={myData?.IsDebit ? 0 : 1}
                                    optionType="button"
                                    onChange={(e)=>dispatch(edit_customer({IsDebit: e.target.value === 0 ? true:false, IsCredit:  e.target.value === 1 ? true:false}))}
                                    buttonStyle="solid"
                                />
                            </div>



                        </div>
                        <div className="w-4/12 border mt-4 py-2 px-4">
                            <h6 className="font-bold">التسعير</h6>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">شريحة الاسعار</label>
                                <Select className="w-full"
                                    value={myData?.CustPricing} 
                                    onChange={value => changeValue(value, "CustPricing")}

                                >
                                    <Select.Option value={0}>-- تحديد شريحة سعر -- </Select.Option>
                                    <Select.Option value={1}>سعر بيع</Select.Option>
                                    <Select.Option value={2}>سعر جملة</Select.Option>
                                    <Select.Option value={3}>سعر خاص 1</Select.Option>
                                    <Select.Option value={4}>سعر وكلاء</Select.Option>
                                    <Select.Option value={5}>سعر خاص 2</Select.Option>
                                    <Select.Option value={6}>سعر شراء</Select.Option>
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">قائمة اسعار</label>
                                <Select className="w-full">
                                    {/* <Select.Option value="1"></Select.Option> */}
                                </Select>
                            </div>
                        </div>
                    </div>

            </div>

        </>
    )
}

export default Comp1;