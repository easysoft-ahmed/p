import { ClusterOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";
import TreeProduct from "../../../../../components/TreeProduct";
import { useState } from "react";
import { SelectCountries } from "../../../../../components/SelectDataApi/SelectCountries";
import { SelectCategories } from "../../../../../components/SelectDataApi/SelectCategories";

const Comp1 = ()=>{
    let myData = useSelector(state => state.product.value);
    let dispatch = useDispatch();
    let [showTree, setShowTree] = useState(false)
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_product({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_product({[id]: value}))
        }
    }

    return(
            <div className="w-full flex flex-wrap justify-center">
                <Modal
                    open={showTree}
                    footer={false}
                    onCancel={()=>setShowTree(false)}
                >
                    <TreeProduct updateSelectCategories={true} edit_product_type_2={edit_product} onlyCategories={true}  />
                </Modal>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-8/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="ProductID">كود الصنف</label>
                        <input type="text" id="ProductID" disabled value={myData?.ProductID || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">الرقم المرجعي</label>
                        <input type="text" id="ProductNo" value={myData?.ProductNo || ""} onChange={event => changeValue(event)} />
                    </div>

                    <div className="input_label_basic pe-2 w-6/12">
                        <label htmlFor="Productname">اسم الصنف</label>
                        <input type="text" id="Productname" value={myData?.Productname || ""} onChange={event => changeValue(event)} />
                    </div>

                    <div className="flex items-end w-1/12 mb-1">
                        <Button onClick={()=>setShowTree(true)} type="primary" shape="" icon={<ClusterOutlined style={{fontSize: "1.5rem"}} />} />

                    </div>

                    <div className="input_label_basic w-5/12">
                        <label htmlFor="ProdEngName">Product Name</label>
                        <input type="text" id="ProdEngName" value={myData?.ProdEngName || ""} onChange={event => changeValue(event)} />
                    </div>



                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="CategoryId">نوع الصنف</label>
                        <SelectCategories currentValue={myData?.CategoryID} methodSelect={option => changeValue(option?.CategoryID, "CategoryID")} />

                        {/* <Select
                            className="w-full"
                            showSearch
                            id="CategoryId" value={myData?.CategoryId} onChange={value => changeValue(value, "CategoryId")}
                            defaultValue={0}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.categories?.map(category => 
                                    <Select.Option value={category?.CategoryID?.toString()}>{category.CategoryName}</Select.Option>    
                                )}
                        </Select> */}
                    </div>
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="CountryID">بلد المنشأ</label>
                        <SelectCountries currentValue={myData?.CountryID} methodSelect={option => changeValue(option?.CountryID, "CountryID")} />
                        {/* <Select 
                            className="w-full" 
                            id="CountryID" 
                            value={myData?.CountryID} 
                            onChange={value => changeValue(value, "CountryID")}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.countries?.map(country => 
                                    <Select.Option value={country.CountryID}>{country.CountryName}</Select.Option>    
                                )}
                        </Select> */}
                    </div>

                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="PurchPrice">سعر الشراء</label>
                        <input type="text" id="PurchPrice" value={myData?.PurchPrice || ""} onChange={event => changeValue(event)} />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">سعر البيع</label>
                        <input type="text" id="MainUnitPrice" value={myData?.MainUnitPrice || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="IsPrintBarcode">له باركود</label>
                        <Switch id="IsPrintBarcode" value={myData?.IsPrintBarcode} onChange={value => changeValue(value, "IsPrintBarcode")} className="!w-auto"/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Marka">الماركة</label>
                        <input type="text" id="Marka" value={myData?.Marka || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Modale">الموديل</label>
                        <input type="text" id="Modale" value={myData?.Modale || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="Notes">ملاحظات</label>
                        <input type="text" id="Notes" value={myData?.Notes || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="AccId">الحساب المرتبط</label>
                        <Select 
                            className="w-full" 
                            id="AccId" 
                            value={myData?.AccId} 
                            onChange={value => changeValue(value, "AccId")}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.acc_codes?.map(acc => 
                                    <Select.Option value={acc?.AccID?.toString()}>{acc.AccName}</Select.Option>    
                                )}
                        </Select>
                    </div>
                </div>
            </div>

    )
}

export default Comp1;