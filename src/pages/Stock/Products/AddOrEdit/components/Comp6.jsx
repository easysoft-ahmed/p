import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Comp6 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-6/12">
                    <div class="relative overflow-x-auto mt-4 w-full">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="[&>*]:text-nowrap">
                                    <th scope="col" class="px-2">
                                        <button><PlusOutlined /></button>
                                    </th>
                                    <th scope="col" class="px-6 py-3">باركود الصنف</th>
                                    <th scope="col" class="px-6 py-3">سعر البيع</th>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
    )
}

export default Comp6;