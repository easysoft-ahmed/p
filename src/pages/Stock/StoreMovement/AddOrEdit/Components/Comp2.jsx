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
                            <th scope="col" class="px-6 py-3">اسم المخزن</th>
                            <th scope="col" class="px-6 py-3">رصيد الصنف</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between gap-4 self-start mt-6 ">
                <div className="flex flex-wrap content-start w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">الحسابات المرتبطة</h5>
                    <div class="relative overflow-x-auto mt-4">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="[&>*]:text-nowrap">
                                    <th scope="col" class="px-2">
                                        <button><PlusOutlined /></button>
                                    </th>
                                    <th scope="col" class="px-6 py-3">كود الحساب</th>
                                    <th scope="col" class="px-6 py-3">اسم الحساب</th>
                                    <th scope="col" class="px-6 py-3">مدين</th>
                                    <th scope="col" class="px-6 py-3">دائن</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="flex flex-wrap w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">القيمة</h5>
                    
                    <div className="input_label_basic px-4 w-full">
                        <label htmlFor="">إجمالي القيمة</label>
                        <div className="flex w-full gap-3">
                            <Input disabled className="w-4/12" type="text" />
                            <Input disabled type="text" className="w-8/12" />
                        </div>
                    </div>





                </div>

            </div>
        </>
    )  
}

export default Comp2;