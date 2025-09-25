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
                            <th scope="col" class="px-6 py-3">عدد الاقساط</th>
                            <th scope="col" class="px-6 py-3">نوع القسط</th>
                            <th scope="col" class="px-6 py-3">تاريخ بداية القسط</th>
                            <th scope="col" class="px-6 py-3">القيمة</th>
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
                                    <Select.Option value="1">يومي</Select.Option>
                                    <Select.Option value="2">اسبوعي</Select.Option>
                                    <Select.Option value="3">شهري</Select.Option>
                                    <Select.Option value="4">ربع سنوي</Select.Option>
                                    <Select.Option value="5">نص سنوي</Select.Option>
                                    <Select.Option value="6">سنوي</Select.Option>
                                    <Select.Option value="7">دفعة</Select.Option>
                                </Select>
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