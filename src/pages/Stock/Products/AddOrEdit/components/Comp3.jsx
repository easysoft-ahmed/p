import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";

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
                                <button><PlusOutlined /></button>
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
                        {console.log(myData?.ProductVendors)
                        }
                        {myData?.ProductVendors?.map((ele , index) =>
                            <tr>
                                {/* index */}
                                <td className="text-center">1</td>
                                <td>
                                    <Input id="VendorId" value={ele.VendorId}/>
                                </td>
                                <td>
                                    <Input id="VendorName" value={ele.VendorName} />
                                </td>
                                <td className="text-center">
                                    <Switch id="MainVendor" value={ele.MainVendor} />
                                </td>
                                <td className="text-center">
                                    <Switch id="PrefferdVendor" value={ele.PrefferdVendor} />
                                </td>
                                <td>
                                    <Select 
                                        className="w-full" 
                                        id={`${index}-CurrId`} 
                                        value={ele?.CountryID} 
                                        onChange={value => changeValue(value, "CurrId")}
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
                                        onChange={value => changeValue(value, "UnitId")}
                                    >
                                        <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                        {myData?.dataSelects?.units?.map(unit => 
                                            <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>    
                                        )}
                                    </Select>

                                </td>
                                <td>
                                    <Input id="DelivaryDays" value={ele.DelivaryDays} />
                                </td>
                                <td>
                                    <Input id="TaxValue" value={ele.TaxValue} />
                                </td>
                                <td>
                                    <Input id="TaxPercent" value={ele.TaxPercent} />
                                </td>
                                <td>
                                    <Input id="MainPrice" value={ele.MainPrice} />
                                </td>
                                <td>
                                    <Input id="QtyDesc" value={ele.QtyDesc} />
                                </td>
                                <td>
                                    <Input id="EarlyDesc" value={ele.EarlyDesc} />
                                </td>
                                <td>
                                    <Input id="TotalCost" value={ele.TotalCost} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )  
}

export default Comp3;