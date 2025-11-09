import { CloseCircleOutlined, DownOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch, Tree } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { modified_tables_store_movement } from "../stateStoreMovement";
import { unique } from "../../../../../helpers";
import { treeData } from "../../../../../fakeData";
import { edit_global } from "../../../../../redux/stateGlobal";
import useF3 from "../../../../../hooks/useF3";

const Comp2 = ()=>{
    let myData = useSelector(state => state.store_movement.value);
    let dispatch = useDispatch();
    const {F3} = useF3();

    // let changeValue = (eventOrValue, prop)=>{
        
    //     if(prop){
    //         dispatch(edit_store_movement({[prop]: eventOrValue}))
    //     }else{
    //         let {id, value} = eventOrValue.target;
    //         dispatch(edit_store_movement({[id]: value}))
    //     }
    // }

    let handleEditRow = (tableName, actionType, fakeID, propsAndValue)=>{
        dispatch(modified_tables_store_movement({tableName, actionType, fakeID, propsAndValue}))
    }

    let defaultRow = {fakeID: unique(),ProductName: "", ProductID: "", UnitID: "", Qty: "", Price: "", Total: "", StoreId: "", Notes: ""}
    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button onClick={()=>dispatch(modified_tables_store_movement({tableName: "StockItems", data: defaultRow, actionType: "add"}))}><PlusOutlined /></button>
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
                        {myData?.StockItems?.map(ele=>
                            <tr>
                                {/* index */}
                                <td className="text-center">
                                    <button onClick={()=> dispatch(modified_tables_store_movement({tableName: "StockItems", actionType: "remove", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
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


                                            handleEditRow("StockItems", "edit", ele.fakeID,{
                                                ProductName: value, ProductID: record?.value, UnitID: record?.MainUnitId, StoreId: record?.StoreId,
                                                unitsGroup, Qty: 1, Price: record?.MainUnitPrice, Total: record?.MainUnitPrice * 1,
                                                record: {...record}
                                            });
                                        }}
                                        showSearch filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        onKeyDown={
                                            (e)=>F3(e,
                                                <>
                                                    <h3 className="font-bold mb-4"> انواع الاصناف </h3>
                                                    <div dir="ltr" className="flex flex-wrap justify-between [&>*]:w-5/12 gap-2">
                                                        <Tree
                                                            showLine
                                                            switcherIcon={<DownOutlined />}
                                                            defaultExpandedKeys={['0-0-0']}
                                                            onSelect={(keys, info)=>{
                                                                !info.node.children && handleEditRow("StockItems", "edit", ele.fakeID, {ProductName: info.node.title, ProductID: info.node.key});
                                                                !info.node.children && dispatch(edit_global({popupF3: false, popupF3Component: null}))}
                                                            }
                                                            treeData={treeData}
                                                        />
                                                    </div>
                                                </>
                                            )
                                        }

                                        options={myData?.dataSelects?.products?.map(product =>{ return {value: product.ProductID, label: product.Productname, ...product}})}
                                    />

                                    {/* <Select
                                        className="w-full"
                                        value={ele.ProductName || ele.ProductID ? myData?.dataSelects?.products?.filter(product => product.ProductID == ele.ProductID)[0]?.Productname || "الصنف غير متوفر ربما تم حذفة" : ele.ProductID}                                    
                                        onChange={(value, record) =>{
                                            console.log(record);
                                            
                                            handleEditRow("StockItems", "edit", ele.fakeID,{ProductName: value, ProductID: record?.value, Qty: 1, Price: record?.PurchPrice, Total: record?.PurchPrice * 1, StoreId: record?.StoreId});
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
                                        value={ele.UnitID ? myData?.dataSelects?.units?.filter(unit => unit.UnitID == ele.UnitID)[0]["UnitName"] || ele.UnitID : ""}                                    
                                        onChange={(value) => handleEditRow("StockItems", "edit", ele.fakeID, {UnitID: value})}
                                        showSearch filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={myData?.dataSelects?.units?.map(unit =>{ return {value: unit.UnitID, label: unit.UnitName, ...unit}})}

                                    />
                                </td>
                                <td>
                                    <Input
                                        value={ele.Qty}
                                        onChange={(e) => handleEditRow("StockItems", "edit", ele.fakeID, {Qty: e.target.value, Total: e.target.value * ele.Price})}/>
                                </td>
                                <td>
                                    <Input
                                        value={ele.Price}
                                        onChange={(e) => handleEditRow("StockItems", "edit", ele.fakeID, {Price: e.target.value, Total: e.target.value * ele.Qty})}
                                    />
                                </td>
                                <td>
                                    <Input value={ele.Total} readOnly />
                                </td>
                                <td>
                                    <Select
                                        className="w-full" placeholder="-- غير محدد --"
                                        value={ele.StoreId ? myData?.dataSelects?.stores?.filter(store => store.StoreID == ele.StoreId)[0]["StoreName"] || ele.StoreId : null}
                                        onChange={(value) => handleEditRow("StockItems", "edit", ele.fakeID, {StoreId: value})}
                                        showSearch filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}

                                    />
                                </td>
                                <td>
                                    <Input defaultValue={ele.Qty} readOnly />
                                </td>
                            </tr>
                        )}
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
                            <Input disabled className="w-4/12" type="text" value={myData.Total || 0}/>
                            <Input disabled type="text" className="w-8/12" />
                        </div>
                    </div>





                </div>

            </div>
        </>
    )  
}

export default Comp2;