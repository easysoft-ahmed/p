import { PercentageOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";

const Comp2 = ()=>{
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
                <div className="flex flex-wrap w-full sm:w-10/12 md:w-10/12 lg:w-8/12 xl:w-full">

                    <div className="flex flex-wrap xl:flex-nowrap">
                        <div className="flex p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الرئيسية</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch value={myData?.MainUnitId}  onChange={value => changeValue(value, "MainUnitId")} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                    {myData?.dataSelects?.units?.map(unit => 
                                        <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>    
                                    )}
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" value={1} disabled/>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text" value={myData?.MainUnitPrice}/>
                            </div>
                        </div>

                        <div className="flex p-4 border my-3 xl:mx-2 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الفرعية</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch value={myData?.SubUnitId}  onChange={value => changeValue(value, "SubUnitId")} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                    {myData?.dataSelects?.units?.map(unit => 
                                        <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>    
                                    )}
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" value={myData?.SubUnitQty} />
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text" value={myData?.SubUnitPrice}/>
                            </div>
                        </div>

                        <div className="flex p-4 border my-3 relative w-full xl:w-4/12">
                            <h5 className="font-bold top-[-15px] absolute bg-white">الإستخدام</h5>
                            <div className="input_label_basic w-4/12">
                                <label htmlFor="">الوحدة</label>
                                <Select className="w-full" showSearch value={myData?.UseUnitID}  onChange={value => changeValue(value, "UseUnitID")} >
                                    <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                    {myData?.dataSelects?.units?.map(unit => 
                                        <Select.Option value={unit.UnitID}>{unit.UnitName}</Select.Option>    
                                    )}
                                </Select>
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">كمية</label>
                                <Input type="text" value={myData?.UseUnitPrice} />
                            </div>
                            <div className="input_label_basic ps-4 w-4/12">
                                <label htmlFor="">سعر البيع للجمهور</label>
                                <Input type="text" value={myData?.UseUnitQty}/>
                            </div>
                        </div>
                    </div>



                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر الجملة</label>
                        <input type="text" value={myData?.GomlaPrice} />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر وكلاء</label>
                        <input type="text" value={myData?.AgentPrice} />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر خاص 1</label>
                        <input type="text" value={myData?.PartPrice} />
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">سعر خاص 2</label>
                        <input type="text" value={myData?.UserPrice} />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اقل سعر بيع</label>
                        <input type="text" value={myData?.MinPrice} />
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اعلى سعر بيع</label>
                        <input type="text" value={myData?.MaxPrice} />
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة قيمة مضافة</label>
                        <Input type="text" addonAfter={<PercentageOutlined />} value={myData?.TaxPercent}/>
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">خصم اساسي</label>
                        <input type="text"  value={myData?.MainDesc}/>
                    </div>


                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة خصم 1</label>
                        <Input type="text" addonAfter={<PercentageOutlined />} value={myData?.TaxDiscP1}/>
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">ضريبة خصم 2</label>
                        <Input type="text" addonAfter={<PercentageOutlined />} value={myData?.TaxDiscP2}/>
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">اقصى نسبة خصم</label>
                        <Input type="text" addonAfter={<PercentageOutlined />} value={myData?.MaxDiscP}/>
                    </div>
                

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">مخزن افتراضي</label>
                        <Select className="w-full" showSearch value={myData?.StoreId} >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.stores?.map(unit => 
                                    <Select.Option value={unit.StoreID}>{unit.StoreName}</Select.Option>    
                                )}
                        </Select>
                    </div>

                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">قيمة العمولة</label>
                        <input type="text" value={myData}/>
                    </div>
                    <div className="input_label_basic px-1 w-3/12  xl:w-2/12">
                        <label htmlFor="">نسبة العمولة</label>
                        <Input type="text" addonAfter={<PercentageOutlined />} value={myData}/>
                    </div>

                </div>
            </div>
    )  
}

export default Comp2;