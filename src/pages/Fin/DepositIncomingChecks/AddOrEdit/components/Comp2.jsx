import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";

const Comp2 = ()=>{
    return(
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">رقم الشيك</th>
                            <th scope="col" class="px-6 py-3">جهة التعامل</th>
                            <th scope="col" class="px-6 py-3">الكود</th>
                            <th scope="col" class="px-6 py-3">الاسم</th>
                            <th scope="col" class="px-6 py-3">تاريخ الشيك</th>
                            <th scope="col" class="px-6 py-3">القيمة</th>
                            <th scope="col" class="px-6 py-3">اسم العملة</th>
                            <th scope="col" class="px-6 py-3">المعامل</th>
                            <th scope="col" class="px-6 py-3">ملاحظات</th>
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
                                <Select className="w-full">
                                    <Select.Option value="1">تظهير لعميل</Select.Option>
                                    <Select.Option value="2">تظهير لمورد</Select.Option>
                                    <Select.Option value="3">تظهير لاخرى</Select.Option>
                                    <Select.Option value="4">حساب</Select.Option>
                                    <Select.Option value="5">خزينة</Select.Option>
                                    <Select.Option value="6">بنك</Select.Option>
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
    )  
}

export default Comp2;