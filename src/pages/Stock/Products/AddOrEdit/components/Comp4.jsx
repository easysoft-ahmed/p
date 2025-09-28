import { PercentageOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";

const Comp4 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-full">
                    <div className="flex flex-wrap xl:flex-nowrap">
                        <div className="flex flex-wrap p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">التحكم في حركات الصنف</h5>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">الموردين</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">العملاء</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">الفروع</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
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
                                <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                    <Select.Option value={"1"}>السماح باجراء الحركة</Select.Option>    
                                    <Select.Option value={"2"}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                    <Select.Option value={"3"}>منع الحركة نهائيا</Select.Option>    
                                </Select>
                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة الحد الادنى</label>
                                    <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                        <Select.Option value={"1"}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"2"}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"3"}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">الحد الادنى</label>
                                    <Input type="text"/>
                                </div>

                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة حد الطلب</label>
                                    <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                        <Select.Option value={"1"}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"2"}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"3"}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">حد الطلب</label>
                                    <Input type="text"/>
                                </div>

                            </div>
                            <div className="flex w-full">
                                <div className="input_label_basic w-8/12">
                                    <label htmlFor="">مراقبة الحد الاقصى</label>
                                    <Select className="w-full" showSearch allowClear defaultValue={"1"} >
                                        <Select.Option value={"1"}>السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"2"}>تحذير مع السماح باجراء الحركة</Select.Option>    
                                        <Select.Option value={"3"}>منع الحركة نهائيا</Select.Option>    
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-4 w-4/12">
                                    <label htmlFor="">الحد الاقصى</label>
                                    <Input type="text"/>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Comp4;