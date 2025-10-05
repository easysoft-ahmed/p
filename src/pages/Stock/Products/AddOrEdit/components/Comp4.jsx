import { PercentageOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";

const Comp4 = ()=>{
    let myData = useSelector(state => state.product.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_product({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_product({[id]: value}))
        }
    }


    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-full">
                    <div className="flex flex-wrap xl:flex-nowrap">
                        <div className="flex flex-wrap p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">التحكم في حركات الصنف</h5>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">الموردين</label>
                                <Select className="w-full" showSearch value={myData.VendorProdTrans}  onChange={value => changeValue(value, "VendorProdTrans")}>
                                    <Select.Option value={0}>شراء + ارتجاع</Select.Option>    
                                    <Select.Option value={1}>شراء فقط</Select.Option>    
                                    <Select.Option value={2}>ارتجاع فقط</Select.Option>    
                                    <Select.Option value={3}>ايقاف كامل</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">العملاء</label>
                                <Select className="w-full" showSearch value={myData.CustomerProdTrans}  onChange={value => changeValue(value, "CustomerProdTrans")}>
                                    <Select.Option value={0}>بيع + ارتجاع</Select.Option>    
                                    <Select.Option value={1}>بيع فقط</Select.Option>    
                                    <Select.Option value={2}>ارتجاع فقط</Select.Option>    
                                    <Select.Option value={3}>ايقاف كامل</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">الفروع</label>
                                <Select className="w-full" showSearch value={myData.BranchProdTrans} onChange={value => changeValue(value, "BranchProdTrans")}>
                                    <Select.Option value={0}>صرف + ارتجاع</Select.Option>    
                                    <Select.Option value={1}>صرف فقط</Select.Option>    
                                    <Select.Option value={2}>ارتجاع فقط</Select.Option>    
                                    <Select.Option value={3}>ايقاف كامل</Select.Option>    
                                </Select>
                            </div>
                        </div>

                        <div className="flex flex-wrap p-4 border my-3 xl:mx-2 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">توريد الصنف</h5>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">الشركة المصنع</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">المورد الرئيسي</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">بث معدل الاستهلاك</label>
                                <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                    <Select.Option value={"1"}>تلقائيا من الطلبات</Select.Option>    
                                    <Select.Option value={"2"}>مانيوال</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">اوامر التوريد</label>
                                <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                    <Select.Option value={"1"}>مستخدم</Select.Option>    
                                    <Select.Option value={"2"}>موقوف</Select.Option>    
                                </Select>
                            </div>

                        </div>

                        <div className="flex flex-wrap p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">مراقبة كميات الصنف</h5>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">سحب على المكشوف</label>
                                <Select className="w-full" showSearch value={myData.ProdTrans} onChange={value => changeValue(value, "ProdTrans")}>
                                    <Select.Option value={0}>السماح باجراء الحركة</Select.Option>    
                                    <Select.Option value={1}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                    <Select.Option value={2}>منع الحركة نهائيا</Select.Option>    
                                </Select>
                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة الحد الادنى</label>
                                    <Select className="w-full" showSearch value={myData.MinLimitTrans} onChange={value => changeValue(value, "MinLimitTrans")}>
                                        <Select.Option value={0}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={1}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={2}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">الحد الادنى</label>
                                    <Input type="text" value={myData.MinLimitQty} onChange={e => changeValue(e.target.value, "MinLimitQty")}/>
                                </div>

                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة حد الطلب</label>
                                    <Select className="w-full" showSearch value={myData.LimitTrans} onChange={value => changeValue(value, "LimitTrans")}>
                                        <Select.Option value={0}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={1}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={2}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">حد الطلب</label>
                                    <Input type="text" value={myData.LimitQty} onChange={e => changeValue(e.target.value, "LimitQty")}/>
                                </div>

                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة الحد الاقصى</label>
                                    <Select className="w-full" showSearch value={myData.MaxLimitTrans} onChange={value => changeValue(value, "MaxLimitTrans")}>
                                        <Select.Option value={0}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={1}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={2}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">الحد الاقصى</label>
                                    <Input type="text" value={myData.MaxLimitQty} onChange={e => changeValue(e.target.value, "MaxLimitQty")}/>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Comp4;