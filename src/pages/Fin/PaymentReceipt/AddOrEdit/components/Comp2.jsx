import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Select } from "antd";
import useF3 from "../../../../../hooks/useF3";
import { useDispatch, useSelector } from "react-redux";
import {modified_tables_cash_out} from "../stateCashOut"
import { unique } from "../../../../../helpers";
import { SelectCustomers } from "../../../../../components/SelectDataApi/SelectCustomers";
import { SelectSuppliers } from "../../../../../components/SelectDataApi/SelectSuppliers";
import { SelectBoxs } from "../../../../../components/SelectDataApi/SelectBoxs";
import { SelectBanks } from "../../../../../components/SelectDataApi/SelectBanks";
import { SelectCurrncies } from "../../../../../components/SelectDataApi/SelectCurrncies";
import { SelectStaff } from "../../../../../components/SelectDataApi/SelectStaff";
const Comp2 = ()=>{
    const {F3} = useF3();
    let myData = useSelector(state => state.cash_out.value);
    let dispatch = useDispatch();

    let defaultRowFinCashDets = { 
        fakeID: unique(), "SideType":0 , SideId: null , "Value": 0, "CurrId": null,
        "CurrRate":0, "SafeType":0, SafeId:null , "SellerId":null, "CostID":"", "ReserveId":1, "PayType":1, "Notes":""
    }
    let handleEditRow = (tableName, actionType, fakeID, propsAndValue, closePopup)=>{
        dispatch(modified_tables_cash_out({tableName, actionType, fakeID, propsAndValue}))
        if(closePopup === "close"){
            dispatch(edit_global({popupF3: false, popupF3Compoent: null}))
        }
    }


    return(
        <>


            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button onClick={()=> dispatch(modified_tables_cash_out({tableName: "FinCashDets", data: defaultRowFinCashDets, actionType: "add"}))}><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">جهة التعامل</th>
                            <th scope="col" class="px-6 py-3">الجهة</th>

                            <th scope="col" class="px-6 py-3">القيمة</th>
                            <th scope="col" class="px-6 py-3">نوع جهة الايداع</th>
                            <th scope="col" class="px-6 py-3">جهة الايداع</th>
                            <th scope="col" class="px-6 py-3">اسم العملة</th>
                            <th scope="col" class="px-6 py-3">المعامل</th>
                            <th scope="col" class="px-6 py-3">اسم المندوب</th>
                            <th scope="col" class="px-6 py-3">ملاحظات</th>
                            {/* <th scope="col" class="px-6 py-3">رصيد الجهة</th>
                            <th scope="col" class="px-6 py-3">التفقيط</th> */}
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                        
                    {myData?.FinCashDets?.map(ele =>
                        <tr key={ele.fakeID}>
                            <td className="text-center">
                                <button onClick={()=> dispatch(modified_tables_cash_out({tableName: "FinCashDets", actionType: "remove", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                            </td>
                            <td>
                                <Select
                                    value={ele?.SideType}
                                    onChange={(value, record) =>{
                                        handleEditRow("FinCashDets", "edit", ele.fakeID,{
                                            SideType: value, SideId: null
                                        });
                                    }}

                                    className="w-full">
                                    <Select.Option value={0}>عميل</Select.Option>
                                    <Select.Option value={1}>مورد</Select.Option>
                                </Select>
                            </td>
                            <td>
                                {ele?.SideType === 0 ?
                                    <SelectCustomers currentValue={ele?.SideId} 
                                        methodSelect={ (option)=>
                                            handleEditRow("FinCashDets", "edit", ele.fakeID, { SideId: option?.CustomerID })
                                        }
                                    />
                                    :
                                    <SelectSuppliers currentValue={ele?.SideId} 
                                        methodSelect={ (option)=>
                                            handleEditRow("FinCashDets", "edit", ele.fakeID, { SideId: option?.VendorID })
                                        }
                                    />
                                }
                            </td>
                            <td>
                                <InputNumber value={ele?.Value} onChange={(value) => handleEditRow("FinCashDets", "edit", ele.fakeID, { Value: value })} />
                            </td>
                            <td>
                                <Select
                                    value={ele?.SafeType}
                                    onChange={(value, record) =>{
                                        handleEditRow("FinCashDets", "edit", ele.fakeID,{
                                            SafeType: value, SafeId: null
                                        });
                                    }}

                                    className="w-full">
                                    <Select.Option value={0}>خزينة</Select.Option>
                                    <Select.Option value={1}>بنك</Select.Option>
                                    {/* <Select.Option value={2}>أخرى</Select.Option>
                                    <Select.Option value={3}>حساب</Select.Option> */}
                                </Select>
                            </td>
                            <td>
                                {ele?.SafeType === 0 ?
                                    <SelectBoxs currentValue={ele?.SafeId} 
                                        methodSelect={ (option)=>
                                            handleEditRow("FinCashDets", "edit", ele.fakeID, { SafeId: option?.BoxID })
                                        }
                                    />
                                    :
                                    <SelectBanks currentValue={ele?.SafeId} 
                                        methodSelect={ (option)=>
                                            handleEditRow("FinCashDets", "edit", ele.fakeID, { SafeId: option?.BankID })
                                        }
                                    />
                                }
                            </td>
                            <td>
                                <SelectCurrncies currentValue={ele?.CurrId} 
                                    methodSelect={ (option)=>
                                        handleEditRow("FinCashDets", "edit", ele.fakeID, { 
                                            CurrId: option?.CurrID, CurrRate: option?.CurrRate
                                        })
                                    }
                                />
                            </td>
                            <td>
                                <InputNumber value={ele?.CurrRate} onChange={(value) => handleEditRow("FinCashDets", "edit", ele.fakeID, { CurrRate: value })} />
                            </td>

                            <td>
                                <SelectStaff currentValue={ele?.SellerId} 
                                    methodSelect={ (option)=>
                                        handleEditRow("FinCashDets", "edit", ele.fakeID, {  SellerId: option?.SellerID })
                                    }
                                />
                            </td>

                            <td>
                                <Input value={ele?.Notes} onChange={(event) => handleEditRow("FinCashDets", "edit", ele.fakeID, { Notes: event?.target?.value })} />
                            </td>

                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Comp2;