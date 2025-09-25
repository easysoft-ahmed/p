import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";

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
                            <th scope="col" class="px-6 py-3">جهة التعامل</th>
                            <th scope="col" class="px-6 py-3">الكود</th>
                            <th scope="col" class="px-6 py-3">الاسم</th>
                            <th scope="col" class="px-6 py-3">القيمة</th>
                            <th scope="col" class="px-6 py-3">نوع جهة الايداع</th>
                            <th scope="col" class="px-6 py-3">جهة الايداع</th>
                            <th scope="col" class="px-6 py-3">اسم العملة</th>
                            <th scope="col" class="px-6 py-3">المعامل</th>
                            <th scope="col" class="px-6 py-3">اسم المندوب</th>
                            <th scope="col" class="px-6 py-3">ملاحظات</th>
                            <th scope="col" class="px-6 py-3">رصيد الجهة</th>
                            <th scope="col" class="px-6 py-3">التفقيط</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                        <tr>
                            {/* index */}
                            <td className="text-center">1</td>
                            <td>
                                <Select className="w-full">
                                    <Select.Option value="sample">عميل</Select.Option>
                                    <Select.Option value="sample">مورد</Select.Option>
                                    <Select.Option value="sample">أخرى</Select.Option>
                                    <Select.Option value="sample">حساب</Select.Option>
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
        </>
    )
}


export default Comp2;