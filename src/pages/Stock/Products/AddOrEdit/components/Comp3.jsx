import { CloseCircleOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_new_row_tables_product, edit_product, edit_row_tables_product, remove_row_tables_product } from "../stateProduct";

const Comp3 = ()=>{
    let myData = useSelector(state => state.product.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_product({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_product({[id]: value}))
        }
    }

    return(
            <div className="relative overflow-x-auto mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" className="px-2">
                                <button onClick={()=> dispatch(add_new_row_tables_product("ProductVendors"))}><PlusOutlined /></button>
                            </th>
                            <th scope="col" className="px-6 py-3">كود المورد</th>
                            <th scope="col" className="px-6 py-3">اسم المورد</th>
                            <th scope="col" className="px-6 py-3">المورد الرئيسي</th>
                            <th scope="col" className="px-6 py-3">مورد مفضل</th>
                            <th scope="col" className="px-6 py-3">عملة التعامل</th>
                            <th scope="col" className="px-6 py-3">وحدة التعامل</th>
                            <th scope="col" className="px-6 py-3">مدة التوصيل ( ايام )</th>
                            <th scope="col" className="px-6 py-3">ضريبة قيمة مضافة</th>
                            <th scope="col" className="px-6 py-3">ض.ق.م %</th>
                            <th scope="col" className="px-6 py-3">السعر الاساسي</th>
                            <th scope="col" className="px-6 py-3">خصم كمية</th>
                            <th scope="col" className="px-6 py-3">خصم سداد مبكر</th>
                            <th scope="col" className="px-6 py-3">سعر التكلفة</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*:not(.ant-switch)]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                        {myData?.ProductVendors?.map((ele , index) =>
                            <tr key={index}>
                                {/* index */}
                                <td className="text-center">
                                    <button onClick={()=> dispatch(remove_row_tables_product({tableName: "ProductVendors", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                                </td>
                                <td>
                                    <Select
                                        showSearch
                                        className="w-full"
                                        placeholder="ابحث بكود المورد"
                                        filterOption={(input, option) =>
                                            (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        value={ele.VendorId}
                                        onChange={(value, object)=>{
                                            dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "VendorId", value: object.VendorID, fakeID: ele.fakeID}))
                                            dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "VendorName", value: object.VendorName, fakeID: ele.fakeID}))
                                        }}
                                        options={myData?.dataSelects?.suppliers?.map(supplier =>{ return {...supplier, value: supplier.VendorID.toString(), label: supplier.VendorName}})}
                                    />
                                </td>
                                <td>
                                    <Select
                                        showSearch
                                        className="w-full"
                                        placeholder="ابحث باسم المورد"
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        value={ele.VendorName}
                                        onChange={(value, object)=>{
                                            dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "VendorName", value, fakeID: ele.fakeID}))
                                            dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "VendorId", value: object.VendorID, fakeID: ele.fakeID}))
                                        }}
                                        options={myData?.dataSelects?.suppliers?.map(supplier =>{ return {...supplier, value: supplier.VendorName, label: supplier.VendorName}})}
                                    />
                                </td>
                                <td className="text-center">
                                    <Switch id="MainVendor" value={ele.MainVendor} onChange={(value)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "MainVendor", value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td className="text-center">
                                    <Switch id="PrefferdVendor" value={ele.PrefferdVendor} onChange={(value)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "PrefferdVendor", value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Select 
                                        className="w-full" 
                                        id={`${index}-CurrId`} 
                                        value={ele?.CurrId} 
                                        onChange={(value)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "CurrId", value, fakeID: ele.fakeID}))}
                                    >
                                        <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                        {myData?.dataSelects?.currencies?.map(currency => 
                                            <Select.Option value={currency.CurrID}>{currency.CurrName}</Select.Option>    
                                        )}
                                    </Select>
                                </td>
                                <td>
                                    <Select 
                                        className="w-full" 
                                        id={`${index}-UnitId`} 
                                        value={ele?.UnitId} 
                                        onChange={(value)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "UnitId", value, fakeID: ele.fakeID}))}
                                    >
                                        <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                        {myData?.dataSelects?.units?.map(unit => 
                                            <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>    
                                        )}
                                    </Select>

                                </td>
                                <td>
                                    <Input id="DelivaryDays" value={ele.DelivaryDays} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "DelivaryDays", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="TaxValue" value={ele.TaxValue} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "TaxValue", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="TaxPercent" value={ele.TaxPercent} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "TaxPercent", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="MainPrice" value={ele.MainPrice} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "MainPrice", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="QtyDesc" value={ele.QtyDesc} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "QtyDesc", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="EarlyDesc" value={ele.EarlyDesc} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "EarlyDesc", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                                <td>
                                    <Input id="TotalCost" value={ele.TotalCost} onChange={(event)=>dispatch(edit_row_tables_product({tableName: "ProductVendors", prop: "TotalCost", value: event.target.value, fakeID: ele.fakeID}))}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )  
}

export default Comp3;