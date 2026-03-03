import { Input, Radio, Switch } from "antd";
import JsBarcode from "jsbarcode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_print_barcode } from "./statePrintBarcode";
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";

const PrintBarcode = ()=>{
    let myData = useSelector(state => state.print_barcode.value);
    let dispatch = useDispatch();
    useEffect(()=>{
        // JsBarcode(".barcode").init();
        JsBarcode(".barcode" , "33982309498333");

    }, [])
    return(
        <>
            <div className="flex flex-wrap justify-between border-b pb-5 w-full">
                    <div class="relative overflow-x-auto mt-4 md:w-6/12">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="[&>*]:text-nowrap">
                                    <th scope="col" class="px-2">
                                        <button><PlusOutlined /></button>
                                        
                                    </th>
                                    <th scope="col" class="px-6 py-3">كود الصنف</th>
                                    <th scope="col" class="px-6 py-3">اسم الصنف</th>
                                    <th scope="col" class="px-6 py-3">السعر</th>
                                    <th scope="col" class="px-6 py-3">الكمية</th>
                                    <th scope="col" class="px-6 py-3">الباركود</th>
                                </tr>
                            </thead>
                            <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">

                                    <tr>
                                        {/* index */}
                                        <td className="text-center">
                                            <button ><CloseCircleOutlined /></button>
                                        </td>
                                        <td>
                                            <Input  />
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

                    <div className="border-r border-gray-300"></div>

                    <div className="flex flex-wrap w-5/12 justify-center">

                        <div className="flex flex-wrap justify-center border-b border-gray-300 w-full  pb-5">
                            <div className="flex flex-wrap w-full [&>*]:pt-2">
                                <b className="w-full text-center">{myData.bg_title}</b>
                            </div>
                            <svg className="barcode" > </svg>
                            <div className="flex flex-wrap w-full [&>*]:pt-2">
                                <b className="w-full text-center">{myData.product_name ? "اسم الصنف" : ""}</b>
                                <b className="w-full text-center">{myData.price ? "السعر" : ""}</b>
                                <b className="w-6/12 text-center">{myData.size ? "المقاس" : ""}</b>
                                <b className="w-6/12 text-center">{myData.color ? "اللون" : ""}</b>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center w-full sm:w-8/12 pt-4 [&>*]:text-center [&>*]:pb-4">
                            <div className="input_label_basic w-full">
                                <label htmlFor="">عنوان الخلفية</label>
                                <input type="text" value={myData.bg_title} onChange={(e)=>dispatch(edit_print_barcode({bg_title: e.target.value}))}/>
                            </div>

                            <div className="input_label_basic w-6/12 ps-2">
                                <label htmlFor="">إظهار اسم الصنف</label>
                                <Switch className="!w-auto" value={myData.product_name} onChange={(value)=>dispatch(edit_print_barcode({product_name: value}))} />
                            </div>
                            <div className="input_label_basic w-6/12 ps-2">
                                <label htmlFor="">إظهار المقاس</label>
                                <Switch className="!w-auto" value={myData.size}  onChange={(value)=>dispatch(edit_print_barcode({size: value}))}/>
                            </div>
                            <div className="input_label_basic w-6/12 ps-2">
                                <label htmlFor="">إظهار اللون</label>
                                <Switch className="!w-auto" value={myData.color}  onChange={(value)=>dispatch(edit_print_barcode({color: value}))}/>
                            </div>
                            <div className="input_label_basic w-6/12 ps-2">
                                <label htmlFor="">إظهار السعر</label>
                                <Switch className="!w-auto" value={myData.price}  onChange={(value)=>dispatch(edit_print_barcode({price: value}))}/>
                            </div>

                            <Radio.Group
                                block
                                options={[{ label: 'سعر البيع في الاكواد', value: 1 }, { label: 'اخر سعر بيع', value: 2 }]}
                                defaultValue="Apple"
                                optionType="button"
                                buttonStyle="solid"
                                className="w-full"
                            />


                        </div>
                        
                        
                    </div>

            </div>
        </>
    )
}


export default PrintBarcode;