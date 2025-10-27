import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_supplier } from "../stateSupplier";
import dayjs from "dayjs";

const Comp1 = ()=>{
    let myData = useSelector(state => state.supplier.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_supplier({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_supplier({[id]: value}))
        }
    }
    return(
        <>
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-2/12">
                        <label htmlFor="">كود المورد</label>
                        <input type="text" disabled value={myData?.VendorID || ""} onChange={e => changeValue(e.target.value, "VendorID")} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">أسم المورد</label>
                        <input type="text" value={myData?.VendorName || ""} onChange={e => changeValue(e.target.value, "VendorName")} />
                    </div>
                    <div className="input_label_basic ps-2 w-5/12">
                        <label htmlFor="">العنوان</label>
                        <input type="text" value={myData?.Address || ""} onChange={e => changeValue(e.target.value, "Address")} />
                    </div>
                    <div className="input_label_basic ps-2 w-1/12 text-center">
                        <label htmlFor="stop_customer">وقف التعامل</label>
                        <Switch id="stop_customer" value={myData?.IsStoped || ""} onChange={value => changeValue(value, "IsStoped")} className="!w-auto" />
                    </div>

                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">نوع المورد</label>
                        <Select 
                            className="w-full" value={myData?.VendorTypeID?.toString() || ""} 
                            onChange={value => changeValue(value, "VendorTypeID")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.suppliers_types?.map(vend =>{ return {value: vend.VendorTypeID?.toString(), label: vend.VendorTypeName, ...vend}})}
                        />
                    </div>



                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">تلفون</label>
                        <input type="text" value={myData?.Phone || ""} onChange={e => changeValue(e.target.value, "Phone")} />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">موبابيل</label>
                        <input type="text" value={myData?.Mobail || ""} onChange={e => changeValue(e.target.value, "Mobail")} />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">فاكس</label>
                        <input type="text" value={myData?.Fax || ""} onChange={e => changeValue(e.target.value, "Fax")} />
                    </div>
                    
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">حد الائتمان</label>
                        <input type="text" value={myData?.CreditLimit || ""} onChange={e => changeValue(e.target.value, "CreditLimit")} />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">فترة الائتمان ( يوم )</label>
                        <input type="text" value={myData?.CreditLimitPeriod || ""} onChange={e => changeValue(e.target.value, "CreditLimitPeriod")} />
                    </div>

                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">مندوب</label>
                        <Select
                            className="w-full"
                            allowClear value={myData?.SellerID?.toString() || ""} onChange={value => changeValue(value, "SellerID")}
                            id="SellerID"
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.staff?.map(staf =>{ return {value: staf.SellerID?.toString(), label: staf.SellerName, ...staf}})}

                        />
                    </div>
                    <div className="flex ps-2 w-3/12">
                        <div className="input_label_basic w-9/12">
                            <label htmlFor="">العملة</label>
                            <Select 
                                className="w-full" 
                                value={myData?.CurrId} 
                                onChange={(value, opt) => dispatch(edit_supplier({CurrId: opt.CurrID, CurrRate: opt.CurrRate}))}
                                showSearch filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={myData?.dataSelects?.currencies?.map(currency =>{ 
                                    return {...currency, value: currency.CurrID, label: currency.CurrName}
                                })}
                            />
                        </div>
                        <div className="input_label_basic ps-2 w-3/12">
                            <label htmlFor="">المعامل</label>
                            <input type="text" value={myData?.CurrRate || ""} onChange={e => changeValue(e.target.value, "CurrRate")}/>
                        </div>
                    </div>

                    <div className="w-full flex">
                        <div className="flex flex-wrap self-center w-8/12 pe-4">


                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">تاريخ أول المدة</label>
                                <DatePicker  value={dayjs(myData?.FirstBalDate)} onChange={(date, dateStr)=>changeValue(dateStr, "FirstBalDate")}/>
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
                                    onChange={(e)=>dispatch(edit_supplier({IsDebit: e.target.value === 0 ? true:false, IsCredit:  e.target.value === 1 ? true:false}))}
                                    buttonStyle="solid"
                                />
                            </div>

                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">التوجية المحاسبي</label>
                                <Select 
                                    className="w-full" 
                                    id="AccId" 
                                    value={myData?.AccId} 
                                    onChange={value => changeValue(value, "AccId")}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={myData?.dataSelects?.acc_codes?.map(acc =>{ 
                                        return {...acc, value: acc.AccID, label: acc.AccName}
                                    })}

                                />
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">دفعة مقدمة</label>
                                <input type="text" value={myData?.PaymentPart || ""} onChange={e => changeValue(e.target.value, "PaymentPart")} />
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">تامين اعمال</label>
                                <input type="text" value={myData?.InsureWork || ""} onChange={e => changeValue(e.target.value, "InsureWork")} />
                            </div>



                        </div>
                        <div className="w-4/12 border rounded-md mt-4 py-2 px-4">
                            {/* <h6 className="font-bold">التسعير</h6> */}
                            <div className="flex flex-wrap justify-between">
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="fixed_assets">مورد اصول ثابتة</label>
                                    <Switch id="fixed_assets" value={myData?.IsFixedAVendor || ""} onChange={value => changeValue(value, "IsFixedAVendor")} className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_services">مورد خدمات</label>
                                    <Switch id="sup_services" value={myData?.IsServiceVendor || ""} onChange={value => changeValue(value, "IsServiceVendor")} className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_exports">مورد استيراد</label>
                                    <Switch id="sup_exports" value={myData?.IsImportVendor || ""} onChange={value => changeValue(value, "IsImportVendor")} className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_cust">مورد / عميل</label>
                                    <Switch id="sup_cust" value={myData?.IsClientVendor || ""} onChange={value => changeValue(value, "IsClientVendor")} className="!w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </>
    )
}

export default Comp1;