import { PercentageOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";

const Comp2 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-full">

                    <div className="flex flex-wrap xl:flex-nowrap">
                        <div className="flex p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الرئيسية</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" value={1} disabled/>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text"/>
                            </div>
                        </div>

                        <div className="flex p-4 border my-3 xl:mx-2 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الفرعية</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" />
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text"/>
                            </div>
                        </div>

                        <div className="flex p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الإستخدام</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch allowClear defaultValue={0} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" />
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text"/>
                            </div>
                        </div>
                    </div>



                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر الجملة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر وكلاء</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر خاص 1</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر خاص 2</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اقل سعر بيع</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اعلى سعر بيع</label>
                        <input type="text" />
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة قيمة مضافة</label>
                        <Input type="text" addonAfter={<PercentageOutlined />}/>
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">خصم اساسي</label>
                        <input type="text" />
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة خصم 1</label>
                        <Input type="text" addonAfter={<PercentageOutlined />}/>
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة خصم 2</label>
                        <Input type="text" addonAfter={<PercentageOutlined />}/>
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اقصى نسبة خصم</label>
                        <Input type="text" addonAfter={<PercentageOutlined />}/>
                    </div>
                

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">مخزن افتراضي</label>
                        <Select className="w-full" showSearch allowClear defaultValue={0} >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">قيمة العمولة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">نسبة العمولة</label>
                        <Input type="text" addonAfter={<PercentageOutlined />}/>
                    </div>

                </div>
            </div>
    )  
}

export default Comp2;