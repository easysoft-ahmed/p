import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";

const Comp1 = ()=>{
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
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="ProductID">كود الصنف</label>
                        <input type="text" id="ProductID" value={myData?.ProductID || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">الرقم المرجعي</label>
                        <input type="text" id="" value={myData} onChange={event => changeValue(event)} />
                    </div>

                    <div className="input_label_basic pe-2 w-6/12">
                        <label htmlFor="Productname">اسم الصنف</label>
                        <input type="text" id="Productname" value={myData?.Productname || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="ProdEngName">Product Name</label>
                        <input type="text" id="ProdEngName" value={myData?.ProdEngName || ""} onChange={event => changeValue(event)} />
                    </div>




                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="CategoryId">نوع الصنف</label>
                        <Select
                            className="w-full"
                            showSearch
                            id="CategoryId" value={myData?.CategoryId} onChange={value => changeValue(value, "CategoryId")}
                            defaultValue={0}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.categories?.map(category => 
                                    <Select.Option value={category.CategoryID}>{category.CategoryName}</Select.Option>    
                                )}
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="CountryID">بلد المنشأ</label>
                        <Select 
                            className="w-full" 
                            id="CountryID" 
                            value={myData?.CountryID} 
                            onChange={value => changeValue(value, "CountryID")}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.countries?.map(country => 
                                    <Select.Option value={country.CountryID}>{country.CountryName}</Select.Option>    
                                )}
                        </Select>
                    </div>

                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="PurchPrice">سعر الشراء</label>
                        <input type="text" id="PurchPrice" value={myData?.PurchPrice || ""} onChange={event => changeValue(event)} />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">سعر البيع</label>
                        <input type="text" id="" value={myData} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="have_barcode">له باركود</label>
                        <Switch id="have_barcode" className="!w-auto"/>
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="Marka">الماركة</label>
                        <input type="text" id="Marka" value={myData?.Marka || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="Modale">الموديل</label>
                        <input type="text" id="Modale" value={myData?.Modale || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="Notes">ملاحظات</label>
                        <input type="text" id="Notes" value={myData?.Notes || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="AccId">الحساب المرتبط</label>
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
                </div>
            </div>

    )
}

export default Comp1;