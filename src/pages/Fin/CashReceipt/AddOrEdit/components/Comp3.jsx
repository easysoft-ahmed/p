import { PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Comp3 = ()=>{
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">العملة</th>
                            <th scope="col" class="px-6 py-3">القيمة</th>
                            <th scope="col" class="px-6 py-3">فقط</th>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )   
}

export default Comp3;