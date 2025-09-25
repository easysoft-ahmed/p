import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";

const Comp2 = ()=>{
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">كود الصنف</th>
                            <th scope="col" class="px-6 py-3">اسم الصنف</th>
                            <th scope="col" class="px-6 py-3">اسم الوحدة</th>
                            <th scope="col" class="px-6 py-3">الكمية</th>
                            <th scope="col" class="px-6 py-3">السعر</th>
                            <th scope="col" class="px-6 py-3">الاجمالي</th>
                            <th scope="col" class="px-6 py-3">ملاحظات</th>
                            <th scope="col" class="px-6 py-3">اسم المخزن</th>
                            <th scope="col" class="px-6 py-3">مركز التكلفة</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                        <tr>
                            {/* index */}
                            <td className="text-center">1</td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                            <td>
                                <Input />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between gap-4 self-start mt-6 ">
                <div className="flex flex-wrap content-start w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">طرق السداد</h5>
                    <div className="flex flex-wrap justify-between input_label_basic px-4 w-6/12">
                        <label htmlFor="" className="w-full">طريقة السداد</label>
                        <Select className="!w-8/12">
                            <Select.Option value="1">نقدي</Select.Option>
                            <Select.Option value="2">آجل</Select.Option>
                            <Select.Option value="3">سداد جزء</Select.Option>
                            <Select.Option value="4">شيك</Select.Option>
                            <Select.Option value="5">تقسيط</Select.Option>
                            <Select.Option value="6">فيزا + نقدي</Select.Option>
                            <Select.Option value="7">فيزا</Select.Option>
                        </Select>
                    </div>
                    <div class="relative overflow-x-auto mt-4">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="[&>*]:text-nowrap">
                                    <th scope="col" class="px-2">
                                        <button><PlusOutlined /></button>
                                    </th>
                                    <th scope="col" class="px-6 py-3">نوع الجهة</th>
                                    <th scope="col" class="px-6 py-3">اسم الجهة</th>
                                    <th scope="col" class="px-6 py-3">القيمة</th>
                                    <th scope="col" class="px-6 py-3">الرصيد</th>
                                </tr>
                            </thead>
                            <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                                <tr>
                                    {/* index */}
                                    <td className="text-center">1</td>
                                    <td>
                                        <Select className="w-full">
                                            <Select.Option value="1">خزينة</Select.Option>
                                            <Select.Option value="2">بنك</Select.Option>
                                        </Select>
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex flex-wrap w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">الخصومات و الضرائب</h5>
                    <div className="flex flex-wrap justify-between input_label_basic px-4 w-6/12">
                        <label htmlFor="" className="w-full">الضريبة</label>
                        <Select className="!w-8/12">
                            <Select.Option value="1">بدون تحديد</Select.Option>
                            <Select.Option value="2">ضريبة القيمة المضافة</Select.Option>
                            <Select.Option value="3">صنف 3</Select.Option>
                        </Select>
                        <Input type="text" disabled  className="!w-3/12"/>
                    </div>
                    <div className="flex flex-wrap justify-between input_label_basic px-4 w-6/12">
                        <label htmlFor="" className="w-full">الربحية</label>
                        <Input type="text" disabled  className="!w-6/12"/>
                        <Input type="text" disabled  className="!w-5/12"/>
                    </div>
                    
                    <div className="input_label_basic px-4 w-6/12">
                        <label htmlFor="">الاجمالي</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">ض.أ.ت.ص</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">الصافي</label>
                        <Input type="text" disabled />
                    </div>
                    <div className=" flex self-end input_label_basic px-4 w-6/12">
                        <Input type="text" value={"صفر جنية مصري"} disabled />
                    </div>
                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">نسبة الخصم</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">قيمة الخصم</label>
                        <input type="text" />
                    </div>




                </div>

            </div>
        </>
    )  
}

export default Comp2;