import { SaveOutlined } from "@ant-design/icons";
import { Button,  Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_advanced_search } from "../stateAdvancedSearch";

const Comp1 = ()=>{
    let myData = useSelector(state => state.advanced_search.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        console.log(eventOrValue);
        
        if(prop){
            dispatch(edit_advanced_search({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_advanced_search({[id]: value}))
        }
    }

    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">بحث متقدم للاصناف</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className=" flex flex-wrap w-full lg:w-8/12">
                        <div className="input_label_basic pe-4 w-full lg:w-4/12">
                            <label htmlFor="">نوع الصنف</label>
                            <Select 
                                className="w-full" 
                                id="category" 
                                value={myData?.CategoryId || ""}
                                onChange={value => changeValue(value, "CategoryId")}
                            >
                                <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                    {myData?.dataSelects?.categories?.map(cate => 
                                        <Select.Option value={cate.CategoryID}>{cate.CategoryName}</Select.Option>    
                                    )}
                            </Select>
                        </div>
                        <div className="input_label_basic pe-4 w-8/12">
                            <label htmlFor="">اسم الصنف</label>
                            <input type="text"/>
                        </div>
                        
                        <div className="w-full border-t me-4"></div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply1" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply1">من السعر</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply2" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply2">من البيع</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply3" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply3">من التكلفة</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply4" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply4">من الجملة</label>
                        </div>
                        <div className="w-full border-t me-4"></div>


                        <div className="flex w-full [&_*]:text-nowrap items-end">
                            <div className="pe-4 w-3/12">
                                <input type="radio" id="all_product" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                                <label htmlFor="all_product">كل الاصناف</label>
                            </div>
                            <div className="pe-4 w-3/12">
                                <input type="radio" id="product_Price_zero" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                                <label htmlFor="product_Price_zero">الاصناف المصفرة</label>
                            </div>
                            <div className="pe-4 w-3/12">
                                <input type="radio" id="product_has_balance" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                                <label htmlFor="product_has_balance"> الاصناف ذات الارصدة</label>
                            </div>
                            <Button type="primary" className="mt-4 grow me-4" >تطبيق </Button>
                        </div>


                    </div>
                    <div className="flex justify-between gap-4 self-start mt-6 w-4/12 ">
                        <div className="flex flex-wrap content-start p-4 border relative">
                            <h5 className="font-bold top-[-15px] absolute bg-white">تعديل الاسعار</h5>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر الشراء %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر البيع %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر الجملة %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر خاص 1 %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر وكلاء %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-4/12">
                                    <label htmlFor="">سعر خاص 2 %</label>
                                    <input type="text"/>
                                </div>

                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Comp1;