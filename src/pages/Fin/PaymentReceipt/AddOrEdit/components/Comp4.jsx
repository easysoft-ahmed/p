import { PlusOutlined } from "@ant-design/icons"
import { Input, Select, Tabs } from "antd"

const TableBillPayment = ()=>{
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">نوع الفاتورة</th>
                            <th scope="col" class="px-6 py-3">رقم الفاتورة</th>
                            <th scope="col" class="px-6 py-3">قيمة الفاتورة</th>
                            <th scope="col" class="px-6 py-3">المسدد</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                        <tr>
                            {/* index */}
                            <td className="text-center">1</td>
                            <td>
                                <Select className="w-full">
                                    <Select.Option value="1">مبيعات</Select.Option>
                                    <Select.Option value="2">مرتد مشتريات</Select.Option>
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
        </>
    )
}

const TableItems = ()=>{
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">كود البند</th>
                            <th scope="col" class="px-6 py-3">اسم البند</th>
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


const TableCostCenters = ()=>{
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">كود مركز التكلفة</th>
                            <th scope="col" class="px-6 py-3">اسم مركز التكلفة</th>
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


const items = [
  { key: '1', label: 'تسديد الفواتير', children: <TableBillPayment /> },
  { key: '2', label: 'البنود', children: <TableItems /> },
  { key: '3', label: 'مراكز التكلفة', children: <TableCostCenters /> },
];


const Comp4 = ()=>{
    return(
        <>
            <Tabs type="card" items={items} />
        </>
    )
}

export default Comp4;