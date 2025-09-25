import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";

const Comp1 = ()=>{
    return(
        <>
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-2/12">
                        <label htmlFor="">كود العميل</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">أسم العميل</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-5/12">
                        <label htmlFor="">العنوان</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-1/12 text-center">
                        <label htmlFor="stop_customer">وقف التعامل</label>
                        <Switch id="stop_customer" className="!w-auto" />
                    </div>

                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">نوع العميل</label>
                        <Select className="w-full">
                            <Select.Option value="1">انواع العملاء</Select.Option>
                            <Select.Option value="2">عملاء محلي</Select.Option>
                            <Select.Option value="3">عملاء محافظات</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">المصدر</label>
                        <Select className="w-full">
                            <Select.Option value="1">فيسبوك</Select.Option>
                            <Select.Option value="2">انستجرام</Select.Option>
                            <Select.Option value="3">واتساب</Select.Option>
                        </Select>
                    </div>



                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">تلفون</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">موبابيل</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">فاكس</label>
                        <input type="text" />
                    </div>
                    
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">حد الائتمان</label>
                        <input type="text" />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">فترة الائتمان ( يوم )</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-2/12 text-center">
                        <label htmlFor="customer_supplier">مورد / عميل</label>
                        <Switch id="customer_supplier" className="!w-auto" />
                    </div>

                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">المنطقة</label>
                        <Select className="w-full">
                            <Select.Option value="1">فيسبوك</Select.Option>
                            <Select.Option value="2">انستجرام</Select.Option>
                            <Select.Option value="3">واتساب</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-2/12">
                        <label htmlFor="">المندوب</label>
                        <Select className="w-full">
                            <Select.Option value="1">فيسبوك</Select.Option>
                            <Select.Option value="2">انستجرام</Select.Option>
                            <Select.Option value="3">واتساب</Select.Option>
                        </Select>
                    </div>

                    <div className="w-full flex">
                        <div className="flex flex-wrap items-end w-8/12 pe-4">
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">مركز التكلفة</label>
                                <Select className="w-full">
                                    <Select.Option value="1">جنية مصري</Select.Option>
                                    <Select.Option value="2">دولار</Select.Option>
                                    <Select.Option value="3">يورو</Select.Option>
                                </Select>
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">حساب مرتبط</label>
                                <Select className="w-full">
                                    <Select.Option value="1">جنية مصري</Select.Option>
                                    <Select.Option value="2">دولار</Select.Option>
                                    <Select.Option value="3">يورو</Select.Option>
                                </Select>
                            </div>
                            <div className="flex ps-2 w-4/12">
                                <div className="input_label_basic w-9/12">
                                    <label htmlFor="">العملة</label>
                                    <Select className="w-full">
                                        <Select.Option value="1">جنية مصري</Select.Option>
                                        <Select.Option value="2">دولار</Select.Option>
                                        <Select.Option value="3">يورو</Select.Option>
                                    </Select>
                                </div>
                                <div className="input_label_basic ps-2 w-3/12">
                                    <label htmlFor="">المعامل</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">تاريخ أول المدة</label>
                                <DatePicker />
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">رصيد اول المدة</label>
                                <input type="text" />
                            </div>
                            <div className="input_label_basic ps-4 w-full lg:w-4/12">
                                <Radio.Group
                                    block
                                    options={[{label: "مدين", value: 0},{label: "دائن", value: 1}]}
                                    defaultValue={1}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </div>




                        </div>
                        <div className="w-4/12 border mt-4 py-2 px-4">
                            <h6 className="font-bold">التسعير</h6>
                            <div className="input_label_basic w-full">
                                <label htmlFor="">شريحة الاسعار</label>
                                <Select className="w-full">
                                    <Select.Option value="1">سعر بيع</Select.Option>
                                    <Select.Option value="2">سعر جملة</Select.Option>
                                    <Select.Option value="3">سعر خاص 1</Select.Option>
                                    <Select.Option value="2">سعر وكلاء</Select.Option>
                                    <Select.Option value="2">سعر خاص 2</Select.Option>
                                    <Select.Option value="2">سعر شراء</Select.Option>
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