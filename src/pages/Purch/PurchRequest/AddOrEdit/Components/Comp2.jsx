import { CloseCircleOutlined, DownOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Select } from "antd";
import { edit_purch_request, modified_tables_purch_request, updateTotalValueAndTax } from "../statePurchRequest";
import { edit_global } from "../../../../../redux/stateGlobal";
import { unique } from "../../../../../helpers";
import useF3 from "../../../../../hooks/useF3";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PopupTable from "../../../../../components/PopupTables";
import dayjs from "dayjs";
import { treeData } from "../../../../../fakeData";
import TreeProduct from "../../../../../components/TreeProduct";

const Comp2 = ()=>{
    const {F3} = useF3();
    let myData = useSelector(state => state.purch_request.value);
    let dispatch = useDispatch();
    
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_purch_request({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_purch_request({[id]: value}))
        }
    }
    let handleEditRow = (tableName, actionType, fakeID, propsAndValue, closePopup)=>{
        dispatch(modified_tables_purch_request({tableName, actionType, fakeID, propsAndValue}))
        if(closePopup === "close"){
            dispatch(edit_global({popupF3: false, popupF3Compoent: null}))
        }
    }

    let handleDBclickRowCashes = (record, fakeID)=>{
        dispatch(modified_tables_purch_request({
            tableName: "PurchCashes",
            fakeID,
            actionType: "edit",
            propsAndValue: {SafeId: record?.BankID || record?.BoxID || "", SafeName: record?.BankName || record?.BoxName || "" }
        }))
        dispatch(edit_global({popupF3: false, popupF3Compoent: null}))

    }

    let defaultRowPurchItems = { 
        fakeID: unique() , RowNo: 1, ProductID: "", UnitID: "", ColorID: 0, MeagureID: 0, Qty: 1, QtyDesc: 0.0, Price: 0,
        RowDiscountV: 0.0, RowDiscountP: 0.0, RowDiscountV2: 0.0, RowDiscountP2: 0.0, RowDiscountV3: 0.0, RowDiscountP3: 0.0,
        RowTaxV: 0.0, RowTaxP: 0.0, RowDiscTaxV: 0.0, RowDiscTaxP: 0.0, Total: 0.0, PartNo: "", LotNo: "",
        ProductionDate: "1900-02-01T00:00:00", ExpireDate: "1900-02-01T00:00:00", SerialNo: "", Notes: "", StoreId: "",
        CostId: "", EdafaDocID: 0
    }

    let defaultRowPurchCashes = {
        fakeID: unique() , SafeType: "", SafeId: "", SafeName: "", Value: ""
    }
    let defaultRowPurchChecks = {
        fakeID: unique() , CheckNo: "", BankName: "", DueDate: dayjs().format(), Value: "", Notes: ""
    }
    useEffect(()=>{
        dispatch(updateTotalValueAndTax())        
    }, [myData?.PurchItems, myData?.TaxRate, myData?.TaxTSP, myData?.DiscountP, myData?.DiscountValue])

    
    return(
        <>
            <div class="w-full relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchItems", data: defaultRowPurchItems, actionType: "add"}))}><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="w-40 px-6 py-3">كود الصنف</th>
                            <th scope="col" class="w-80 px-6 py-3">اسم الصنف</th>
                            <th scope="col" class="px-6 py-3">اسم الوحدة</th>
                            <th scope="col" class="px-6 py-3">الكمية</th>
                            <th scope="col" class="px-6 py-3">السعر</th>
                            <th scope="col" class="px-6 py-3">الاجمالي</th>
                            <th scope="col" class="px-6 py-3">ملاحظات</th>
                            <th scope="col" class="px-6 py-3">اسم المخزن</th>
                            <th scope="col" class="px-6 py-3">مركز التكلفة</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                    {myData?.PurchItems?.map(ele =>
                        <tr key={ele.fakeID}>
                            {/* index */}
                            <td className="text-center">
                                <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchItems", actionType: "remove", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                            </td>
                            <td>
                                <Input value={ele.ProductID} />
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele.ProductName}
                                    // value={ele.ProductName || ele.ProductID ? myData?.dataSelects?.products?.filter(product => product.ProductID == ele.ProductID)[0]?.Productname || "الصنف غير متوفر ربما تم حذفة" : ele.ProductID}                                    
                                    onChange={(value, record) =>{
                                        let unitsGroup = [{value: record?.MainUnitId, label: record?.MainUnitName}];
                                        record?.SubUnitId &&  unitsGroup.push({value: record?.SubUnitId, label: record?.SubUnitName, })
                                        record?.UseUnitID && unitsGroup.push({value: record?.UseUnitID, label: record?.UseUnitName})


                                        handleEditRow("PurchItems", "edit", ele.fakeID,{
                                            ProductName: value, ProductID: record?.value, UnitID: record?.MainUnitId, StoreId: record?.StoreId,
                                            unitsGroup, Qty: 1, Price: record?.MainUnitPrice, Total: record?.MainUnitPrice * 1,
                                            record: {...record}
                                        });
                                    }}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    onKeyDown={
                                        (e)=>F3(e,<TreeProduct handleEditRow={handleEditRow} tableName={"PurchItems"} ele={ele}/>)
                                    }

                                    options={myData?.dataSelects?.products?.map(product =>{ return {value: product.ProductID, label: product.Productname, ...product}})}
                                />
                                {/* <Select
                                    className="w-full"  
                                    value={ele.ProductName || ele.ProductID ? myData?.dataSelects?.products?.filter(product => product.ProductID == ele.ProductID)[0]?.Productname || "الصنف غير متوفر ربما تم حذفة" : ele.ProductID}                                    
                                    onChange={(value, record) =>{
                                        let unitsGroup = [{value: record?.MainUnitId, label: record?.MainUnitName}];
                                        record?.SubUnitId &&  unitsGroup.push({value: record?.SubUnitId, label: record?.SubUnitName, })
                                        record?.UseUnitID && unitsGroup.push({value: record?.UseUnitID, label: record?.UseUnitName})


                                        handleEditRow("PurchItems", "edit", ele.fakeID,{
                                            ProductName: value, ProductID: record?.value, UnitID: record?.MainUnitId, StoreId: record?.StoreId,
                                            unitsGroup, Qty: 1, Price: record?.MainUnitPrice, Total: record?.MainUnitPrice * 1,
                                            record: {...record}
                                        });
                                    }}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={myData?.dataSelects?.products?.map(product =>{ return {value: product.ProductID, label: product.Productname, ...product}})}
                                /> */}
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele?.UnitID || ""}                                    
                                    onChange={(value) => handleEditRow("PurchItems", "edit", ele.fakeID, {UnitID: value})}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={ele?.unitsGroup || []}

                                />
                            </td>
                            <td>
                                <Input
                                    value={ele.Qty}
                                    onChange={(e) => handleEditRow("PurchItems", "edit", ele.fakeID, {Qty: e.target.value , Total: e.target.value * ele.Price})}
                                />
                            </td>
                            <td>
                                <Input
                                    value={ele.Price}
                                    onKeyDown={
                                        (e)=>F3(e,
                                            <>
                                                <h3 className="font-bold mb-4"> اسعار الصنف </h3>
                                                <div className="flex flex-wrap justify-between [&>*]:w-5/12 gap-2">
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: ele?.record?.MainUnitPrice}, "close")}> <span>سعر البيع</span> <span>{ele?.record?.MainUnitPrice}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: ele?.record?.PurchPrice}, "close")}> <span>سعر الشراء</span> <span>{ele?.record?.PurchPrice}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: ele?.record?.GomlaPrice}, "close")}> <span>سعر الجملة</span> <span>{ele?.record?.GomlaPrice}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: ele?.record?.PartPrice}, "close")}> <span>سعر القطاعي</span> <span>{ele?.record?.PartPrice}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: 0}, "close")}> <span>سعر المستهلك</span> <span>{0}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: ele?.record?.AgentPrice}, "close")}> <span>سعر وكلاء</span> <span>{ele?.record?.AgentPrice}</span> </Button>
                                                    <Button onClick={()=>handleEditRow("PurchItems", "edit", ele.fakeID, {Price: 0}, "close")}> <span>سعر تكلفة</span> <span>{0}</span> </Button>
                                                </div>
                                            </>
                                        )
                                    }
                                    onChange={(e) => handleEditRow("PurchItems", "edit", ele.fakeID, {Price: e.target.value , Total: e.target.value * ele.Qty})}
                                />
                            </td>
                            <td>
                                <Input
                                    value={ele.Total}
                                />
                            </td>
                            <td>
                                <Input
                                    value={ele.Notes}
                                    onChange={(e) => handleEditRow("PurchItems", "edit", ele.fakeID, {Notes: e.target.value})}
                                />
                            </td>
                            <td>
                                <Select
                                    className="w-full" placeholder="-- غير محدد --"
                                    value={ele.StoreId ? myData?.dataSelects?.stores?.filter(store => store.StoreID == ele.StoreId)[0]?.StoreName || ele.StoreId : ""}
                                    onChange={(value) => handleEditRow("PurchItems", "edit", ele.fakeID, {StoreId: value})}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}

                                />
                            </td>
                            <td>
                                <Select 
                                    className="w-full" 
                                    id="CostId" 
                                    value={ele?.CostId} 
                                    onChange={value => handleEditRow("PurchItems", "edit", ele.fakeID, {CostId: value})}
                                    showSearch filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={myData?.dataSelects?.cost_centers?.map(center =>{ return {value: center.CostID, label: center.CostName, ...center}})}
                                />
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-start gap-4 self-start mt-6 ">
                {/* <div className="flex flex-wrap content-start w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">طرق السداد</h5>
                    <div className="flex flex-wrap justify-between input_label_basic px-4 w-6/12">
                        <label htmlFor="" className="w-full">طريقة السداد</label>
                        <Select className="!w-8/12" value={myData?.PayType || 0}
                            onChange={value => {
                                dispatch(edit_purch_request({PayType: value, PurchCashes: [], PurchChecks: []}))
                                if (value === 0) {
                                    dispatch(modified_tables_purch_request({tableName: "PurchCashes", data: {...defaultRowPurchCashes, Value: myData?.NetTotal}, actionType: "add"}))
                                }
                                if (value === 3) {
                                    dispatch(modified_tables_purch_request({tableName: "PurchChecks", data: defaultRowPurchChecks, actionType: "add"}))
                                }
                        }}>
                            <Select.Option value={0}>نقدي</Select.Option>
                            <Select.Option value={1}>آجل</Select.Option>
                            <Select.Option value={2}>سداد جزء</Select.Option>
                            <Select.Option value={3}>شيك</Select.Option>
                            <Select.Option value={4}>تقسيط</Select.Option>
                            <Select.Option value={5}>فيزا + نقدي</Select.Option>
                            <Select.Option value={6}>فيزا</Select.Option>
                        </Select>
                    </div>
                {[0, 1, 2].includes(myData?.PayType) && <TablePurchCashes />}
                {[3].includes(myData?.PayType) && <TablePurchChecks />}

                </div> */}
                <div className="flex flex-wrap w-6/12 p-4 border relative">
                    <h5 className="font-bold top-[-15px] absolute bg-white">الخصومات و الضرائب</h5>
                    <div className="flex flex-wrap justify-between input_label_basic px-4 w-6/12">
                        <label htmlFor="" className="w-full">الضريبة</label>
                        <Select
                            className="!w-8/12" placeholder="-- غير محدد --"
                            value={myData.TaxID ? myData?.dataSelects?.taxes?.filter(tax => tax.TaxID == myData.TaxID)[0]["TaxName"] || myData.TaxID : null}
                            onChange={(value, opt) => dispatch(edit_purch_request({TaxID: value, TaxRate: opt.TaxRate}))}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.taxes?.map(tax =>{ return {value: tax.TaxID, label: tax.TaxName, ...tax}})}

                        />
                        <Input type="text" disabled value={myData?.TaxRate}  className="!w-3/12"/>
                    </div>
                        
                    <div className="input_label_basic px-4 w-6/12">
                        <label htmlFor="">الاجمالي</label>
                        <input type="text" value={myData?.SumTotal} disabled/>
                    </div>

                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">ض.أ.ت.ص</label>
                        <input type="text" value={myData?.TaxTSP} onChange={e => changeValue(e.target.value, "TaxTSP")} />
                    </div>

                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">الصافي</label>
                        <Input type="text" value={myData?.NetTotal} disabled />
                    </div>
                    <div className=" flex self-end input_label_basic px-4 w-6/12">
                        <Input type="text" value={myData?.NetTotalTafqit || ""} disabled />
                    </div>
                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">نسبة الخصم</label>
                        <input type="text" value={myData?.DiscountP} onChange={e => changeValue(e.target.value, "DiscountP")} />
                    </div>
                    <div className="input_label_basic px-4 w-3/12">
                        <label htmlFor="">قيمة الخصم</label>
                        <input type="text" value={myData?.DiscountValue} onChange={e => changeValue(e.target.value, "DiscountValue")} />
                    </div>




                </div>

            </div>
        </>
    )  
}

const TablePurchCashes = ()=>{
    const {F3} = useF3();
    let myData = useSelector(state => state.purch_request.value);
    let dispatch = useDispatch();
    
    let handleEditRow = (tableName, actionType, fakeID, propsAndValue, closePopup)=>{
        dispatch(modified_tables_purch_request({tableName, actionType, fakeID, propsAndValue}))
        if(closePopup === "close"){
            dispatch(edit_global({popupF3: false, popupF3Compoent: null}))
        }
    }

    let handleDBclickRowCashes = (record, fakeID)=>{
        dispatch(modified_tables_purch_request({
            tableName: "PurchCashes",
            fakeID,
            actionType: "edit",
            propsAndValue: {SafeId: record?.BankID || record?.BoxID || "", SafeName: record?.BankName || record?.BoxName || "" }
        }))
        dispatch(edit_global({popupF3: false, popupF3Compoent: null}))

    }

    let defaultRowPurchCashes = {
        fakeID: unique() , SafeType: "", SafeId: "", SafeName: "", Value: ""
    }

    return(
        <div class="w-full relative overflow-x-auto mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="[&>*]:text-nowrap">
                        <th scope="col" class="px-2">
                            <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchCashes", data: defaultRowPurchCashes, actionType: "add"}))}><PlusOutlined /></button>
                        </th>
                        <th scope="col" class="px-6 py-3">نوع الجهة</th>
                        <th scope="col" class="px-6 py-3">اسم الجهة</th>
                        <th scope="col" class="px-6 py-3">القيمة</th>
                    </tr>
                </thead>

                <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                {myData?.PurchCashes?.map((ele) =>
                    <tr>
                        <td className="text-center">
                            <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchCashes", actionType: "remove", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                        </td>
                        <td>
                            <Select className="w-full" value={ele?.SafeType || 0} onChange={(value)=>handleEditRow("PurchCashes", "edit", ele.fakeID, {SafeType: value, SafeId: "", SafeName: ""})}>
                                <Select.Option value={0}>خزينة</Select.Option>
                                <Select.Option value={1}>بنك</Select.Option>
                            </Select>
                        </td>
                        <td>
                            <Input readOnly value={ele?.SafeName} onKeyDown={(e => F3(e, <PopupTable what_api={ele?.SafeType === 1 ? "banks" : "boxs"} action_row={handleDBclickRowCashes} fakeID={ele.fakeID} />))} />
                        </td>
                        <td>
                            <Input value={ele.Value} onChange={(e)=>handleEditRow("PurchCashes", "edit", ele.fakeID, {Value: e.target.value})}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}


const TablePurchChecks = ()=>{
    let myData = useSelector(state => state.purch_request.value);
    let dispatch = useDispatch();
    
    let handleEditRow = (tableName, actionType, fakeID, propsAndValue)=>{
        dispatch(modified_tables_purch_request({tableName, actionType, fakeID, propsAndValue}))
    }

    let defaultRowPurchChecks = {
        fakeID: unique() , CheckNo: "", BankName: "", DueDate: dayjs().format(), Value: "", Notes: ""
    }

    return(
        <div class="w-full relative overflow-x-auto mt-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="[&>*]:text-nowrap">
                        <th scope="col" class="px-2">
                            <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchChecks", data: defaultRowPurchChecks, actionType: "add"}))}><PlusOutlined /></button>
                        </th>
                        <th scope="col" class="px-6 py-3">رقم الشيك</th>
                        <th scope="col" class="px-6 py-3">اسم البنك</th>
                        <th scope="col" class="px-6 py-3">تاريخ الاستحقاق</th>
                        <th scope="col" class="px-6 py-3">القيمة</th>
                        <th scope="col" class="px-6 py-3">ملاحظات</th>
                    </tr>
                </thead>

                <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                {myData?.PurchChecks?.map((ele) =>
                    <tr>
                        <td className="text-center">
                            <button onClick={()=> dispatch(modified_tables_purch_request({tableName: "PurchChecks", actionType: "remove", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                        </td>
                        <td>
                            <Input value={ele.CheckNo} onChange={(e)=>handleEditRow("PurchChecks", "edit", ele.fakeID, {CheckNo: e.target.value})}/>
                        </td>
                        <td>
                            <Input value={ele.BankName} onChange={(e)=>handleEditRow("PurchChecks", "edit", ele.fakeID, {BankName: e.target.value})}/>
                        </td>
                        <td>
                            <DatePicker value={dayjs(ele.DueDate)} onChange={(date, dateStr)=>handleEditRow("PurchChecks", "edit", ele.fakeID, {DueDate: dateStr})} allowClear={false} />
                        </td>
                        <td>
                            <Input value={ele.Value} onChange={(e)=>handleEditRow("PurchChecks", "edit", ele.fakeID, {Value: e.target.value})}/>
                        </td>
                        <td>
                            <Input value={ele.Notes} onChange={(e)=>handleEditRow("PurchChecks", "edit", ele.fakeID, {Notes: e.target.value})}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

    )
}

export default Comp2;