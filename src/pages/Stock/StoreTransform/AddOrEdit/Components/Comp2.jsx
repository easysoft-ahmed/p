import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_store_transform, modified_tables_store_transform } from "../stateStoreTransform";
import { unique } from "../../../../../helpers";

const Comp2 = ()=>{
    let myData = useSelector(state => state.store_transform.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_store_transform({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_store_transform({[id]: value}))
        }
    }

    let handleEditRow = (tableName, actionType, fakeID, propsAndValue)=>{
        dispatch(modified_tables_store_transform({tableName, actionType, fakeID, propsAndValue}))
    }

    let defaultRow = {fakeID: unique(),ProductName: "", ProductID: "", UnitID: "", Qty: "", Price: "", ToStoreId: myData.ToStoreId, StoreId: myData.StoreId, Notes: ""}


    return(
        <>
            <div class="relative overflow-x-auto mt-4">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="[&>*]:text-nowrap">
                            <th scope="col" class="px-2">
                                <button onClick={()=>dispatch(modified_tables_store_transform({tableName: "TransFormItems", data: defaultRow, actionType: "add"}))}><PlusOutlined /></button>
                            </th>
                            <th scope="col" class="px-6 py-3">كود الصنف</th>
                            <th scope="col" class="px-6 py-3">اسم الصنف</th>
                            <th scope="col" class="px-6 py-3">اسم الوحدة</th>
                            <th scope="col" class="px-6 py-3">الكمية</th>
                            <th scope="col" class="px-6 py-3">من مخزن</th>
                            <th scope="col" class="px-6 py-3">الى مخزن</th>
                        </tr>
                    </thead>
                    <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                    {myData?.TransFormItems?.map(ele=>

                        <tr>
                            {/* index */}
                            <td className="text-center">1</td>
                            <td>
                                <Input value={ele.ProductID} />
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele.ProductName || ele.ProductID ? myData?.dataSelects?.products?.filter(product => product.ProductID == ele.ProductID)[0]["Productname"] || ele.ProductID : ""}                                    
                                    onChange={(value, record) =>{
                                        console.log(record);
                                        
                                        handleEditRow("TransFormItems", "edit", ele.fakeID,
                                            {ProductName: record?.label, ProductID: record?.value, Qty: 1, Price: record?.PurchPrice, StoreId: record?.StoreId || myData.StoreId});
                                        
                                    }}

                                    options={myData?.dataSelects?.products?.map(product =>{ return {value: product.ProductID, label: product.Productname, ...product}})}
                                />
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele.UnitID ? myData?.dataSelects?.units?.filter(unit => unit.UnitID == ele.UnitID)[0]["UnitName"] || ele.UnitID : ""}                                    
                                    onChange={(value) => handleEditRow("TransFormItems", "edit", ele.fakeID, {UnitID: value})}
                                >
                                    {/* <Select.Option>-- غير محدد --</Select.Option> */}
                                    {myData?.dataSelects?.units?.map(unit => 
                                        <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>

                                    )}
                                </Select>
                            </td>
                            <td>
                                <Input
                                    value={ele.Qty}
                                    onChange={(e) => handleEditRow("TransFormItems", "edit", ele.fakeID, {Qty: e.target.value })}/>
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele.StoreName || ele.StoreId ? myData?.dataSelects?.stores?.filter(store => store.StoreID == ele.StoreId)[0]["StoreName"] || ele.StoreId : ""}
                                    onChange={(value, record) =>{
                                        handleEditRow("TransFormItems", "edit", ele.fakeID , {StoreId: record?.StoreID, StoreName: record?.StoreName})
                                    }}

                                    options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}
                                />
                            </td>
                            <td>
                                <Select
                                    className="w-full"
                                    value={ele.ToStoreName || ele.ToStoreId ? ele?.dataSelects?.stores?.filter(store => store.StoreID == ele.ToStoreId)[0]["StoreName"] || ele.ToStoreId : ""}
                                    onChange={(value, record) =>{
                                        handleEditRow("TransFormItems", "edit", ele.fakeID , {ToStoreId: record?.StoreID, ToStoreName: record?.StoreName})
                                    }}

                                    options={myData?.dataSelects?.stores?.map(store =>{ return {value: store.StoreID, label: store.StoreName, ...store}})}
                                />
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="flex w-full mt-4">
                <div className="flex gap-1 items-center rounded-md bg-slate-200">
                    <b  className="bg-gray-300 px-2 py-1 rounded-md">إجمالي الكمية</b>
                    <span className="bg-gray-200 px-4 py-1 rounded-md">{myData.Total}</span>
                </div>
            </div>
        </>
    )  
}

export default Comp2;