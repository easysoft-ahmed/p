import { CloseCircleOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add_new_row_tables_product, edit_product, edit_row_tables_product, remove_row_tables_product } from "../stateProduct";


const Comp7 = ()=>{
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
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-5/12">
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">اللون</label>
                            <Select className="w-full" value={myData?.ColorID}  onChange={value => changeValue(value, "ColorID")}>
                                <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.colors?.map(color => 
                                    <Select.Option value={color.ColorID}>{color.ColorName}</Select.Option>    
                                )}
                            </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="">المقاس</label>
                        <Select className="w-full" value={myData?.MeagureID}  onChange={value => changeValue(value, "MeagureID")}>
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                            {myData?.dataSelects?.meagures?.map(meagure => 
                                <Select.Option value={meagure.MeagureID}>{meagure.MeagureName}</Select.Option>    
                            )}
                        </Select>
                    </div>

                    <div className="flex flex-wrap p-4 border my-3 relative w-full">
                        <h5 className="font-bold top-[-15px] absolute bg-white">بدائل الاصناف</h5>
                        <div class="relative overflow-x-auto mt-4 w-full">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="[&>*]:text-nowrap">
                                        <th scope="col" class="px-2">
                                            <button onClick={()=> dispatch(add_new_row_tables_product("ProductReplaces"))}><PlusOutlined /></button>
                                        </th>
                                        <th scope="col" class="px-6 py-3">كود الصنف البديل</th>
                                        <th scope="col" class="px-6 py-3">اسم الصنف البديل</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_*]:!rounded-none [&>*]:bg-white [&>*]:border-b [&>*]:border-gray-200">
                                    {myData?.ProductReplaces?.map((ele , index) =>
                                        <tr key={index}>
                                            {/* index */}
                                            <td className="text-center">
                                                <button onClick={()=> dispatch(remove_row_tables_product({tableName: "ProductReplaces", fakeID: ele.fakeID}))}><CloseCircleOutlined /></button>
                                            </td>
                                            <td>
                                                <Select
                                                    showSearch className="w-full" placeholder="ابحث بكود المورد"
                                                    filterOption={(input, option) => (option?.value ?? '').toLowerCase().includes(input.toLowerCase()) }
                                                    value={ele.ReplaceID} onChange={(value, object)=>{
                                                        dispatch(edit_row_tables_product({tableName: "ProductReplaces", prop: "ReplaceID", value: Number(object.ProductID), fakeID: ele.fakeID}))
                                                        dispatch(edit_row_tables_product({tableName: "ProductReplaces", prop: "ReplaceName", value: object.Productname, fakeID: ele.fakeID}))
                                                    }}
                                                    options={myData?.dataSelects?.products?.map(product =>{ return {...product, value: product?.ProductID?.toString(), label: product.Productname}})}
                                                />
                                            </td>
                                            <td>
                                                <Select
                                                    showSearch className="w-full" placeholder="ابحث باسم المورد"
                                                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase()) }
                                                    value={ele.ReplaceName} onChange={(value, object)=>{
                                                        dispatch(edit_row_tables_product({tableName: "ProductReplaces", prop: "ReplaceID", value, fakeID: ele.fakeID}))
                                                        dispatch(edit_row_tables_product({tableName: "ProductReplaces", prop: "ReplaceName", value: object.VendorID, fakeID: ele.fakeID}))
                                                    }}
                                                    options={myData?.dataSelects?.products?.map(product =>{ return {...product, value: product.Productname, label: product.Productname}})}
                                                />
                                            </td>

                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    
                    <div className="w-full flex flex-wrap justify-self-center [&_*]:text-center">

                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف ذات تواريخ صلاحية</label>
                            <Switch id="have_barcode" value={myData?.IsValidDates} onChange={(value)=>changeValue(value, "IsValidDates")} className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف لة رقم قطعة</label>
                            <Switch id="have_barcode" value={myData?.IsHasPartNo} onChange={(value)=>changeValue(value, "IsHasPartNo")} className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف ارشيف</label>
                            <Switch id="have_barcode" value={myData?.IsArchif} onChange={(value)=>changeValue(value, "IsArchif")} className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">سيريال نمبر</label>
                            <Switch id="have_barcode" value={myData?.IsSerial} onChange={(value)=>changeValue(value, "IsSerial")} className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف خدمة</label>
                            <Switch id="have_barcode" value={myData?.IsService} onChange={(value)=>changeValue(value, "IsService")} className="!w-auto"/>
                        </div>
                        <div className="input_label_basic w-4/12">
                            <label htmlFor="">صنف مجمع</label>
                            <Switch id="have_barcode" value={myData?.IsAssemb} onChange={(value)=>changeValue(value, "IsAssemb")} className="!w-auto"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Comp7;