import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";

const Comp1 = ()=>{
    return(
        <>
                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-2/12">
                        <label htmlFor="">كود المورد</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">أسم المورد</label>
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
                        <label htmlFor="">نوع المورد</label>
                        <Select className="w-full">
                            <Select.Option value="1">انواع الموردين</Select.Option>
                            <Select.Option value="2">مورد محلي</Select.Option>
                            <Select.Option value="3">مورد اجنبي</Select.Option>
                        </Select>
                    </div>



                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">تلفون</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">موبابيل</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
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

                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">مندوب</label>
                        <Select className="w-full">
                            <Select.Option value="1">مندوب 1</Select.Option>
                        </Select>
                    </div>
                    <div className="flex ps-2 w-3/12">
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

                    <div className="w-full flex">
                        <div className="flex flex-wrap self-center w-8/12 pe-4">


                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">تاريخ أول المدة</label>
                                <DatePicker />
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">رصيد اول المدة</label>
                                <input type="text" />
                            </div>
                            <div className="input_label_basic content-end ps-2 w-full lg:w-4/12">
                                <Radio.Group
                                    block
                                    options={[{label: "مدين", value: 0},{label: "دائن", value: 1}]}
                                    defaultValue={1}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </div>

                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">التوجية المحاسبي</label>
                                <Select className="w-full">
                                    <Select.Option value="1">مشتريات</Select.Option>
                                </Select>
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">دفعة مقدمة</label>
                                <input type="text" />
                            </div>
                            <div className="input_label_basic ps-2 w-4/12">
                                <label htmlFor="">تامين اعمال</label>
                                <input type="text" />
                            </div>



                        </div>
                        <div className="w-4/12 border rounded-md mt-4 py-2 px-4">
                            {/* <h6 className="font-bold">التسعير</h6> */}
                            <div className="flex flex-wrap justify-between">
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="fixed_assets">مورد اصول ثابتة</label>
                                    <Switch id="fixed_assets" className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_services">مورد خدمات</label>
                                    <Switch id="sup_services" className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_exports">مورد استيراد</label>
                                    <Switch id="sup_exports" className="!w-auto" />
                                </div>
                                <div className="input_label_basic ps-2 w-6/12 text-center">
                                    <label htmlFor="sup_cust">مورد / عميل</label>
                                    <Switch id="sup_cust" className="!w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

        </>
    )
}

export default Comp1;