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
                                <th scope="col" class="px-6 py-3">جهة التعامل</th>
                                <th scope="col" class="px-6 py-3">الكود</th>
                                <th scope="col" class="px-6 py-3">الاسم</th>
                                <th scope="col" class="px-6 py-3">مدين</th>
                                <th scope="col" class="px-6 py-3">دائن</th>
                            </tr>
                        </thead>
                        <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                            <tr>
                                {/* index */}
                                <td className="text-center">1</td>
                                <td>
                                    <Select className="w-full">
                                        <Select.Option value="1">عميل</Select.Option>
                                        <Select.Option value="2">مورد</Select.Option>
                                        <Select.Option value="3">أخرى</Select.Option>
                                        <Select.Option value="4">حساب</Select.Option>
                                        <Select.Option value="5">صندوق</Select.Option>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full mt-4 border p-4">
                    <div className="flex justify-evenly">
                        <div className="input_label_basic w-full lg:w-3/12">
                            <label htmlFor="">إجمالي المدين</label>
                            <Input type="text" disabled={true} value={3000}/>
                        </div>
                        <div className="input_label_basic w-full lg:w-3/12">
                            <label htmlFor="">إجمالي الدائن</label>
                            <Input type="text" disabled={true} value={1000}/>
                        </div>
                        <div className="input_label_basic w-full lg:w-3/12">
                            <label htmlFor="">متبقي</label>
                            <Input type="text" disabled={true} value={3000}/>
                        </div>

                    </div>
                </div>
            </>
    )  
}

export default Comp2;