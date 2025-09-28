import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";


const Comp7 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-5/12">
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">اللون</label>
                        <Select className="w-full" showSearch allowClear defaultValue={0} >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="">المقاس</label>
                        <Select className="w-full" showSearch allowClear defaultValue={0} >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>

                    <div className="flex flex-wrap p-4 border my-3 relative w-full">
                        <h5 className="font-bold top-[-15px] absolute bg-white">بدائل الاصناف</h5>
                        <div class="relative overflow-x-auto mt-4 w-full">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="[&>*]:text-nowrap">
                                        <th scope="col" class="px-2">
                                            <button><PlusOutlined /></button>
                                        </th>
                                        <th scope="col" class="px-6 py-3">كود الصنف البديل</th>
                                        <th scope="col" class="px-6 py-3">اسم الصنف البديل</th>
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
                    
                    
                    <div className="w-full flex flex-wrap justify-self-center [&_*]:text-center">

                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف ذات تواريخ صلاحية</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف لة رقم قطعة</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف ارشيف</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">سيريال نمبر</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف خدمة</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف مجمع</label>
                            <Switch id="have_barcode" className="!w-auto"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Comp7;