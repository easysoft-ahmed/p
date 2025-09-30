import { SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_stock } from "./stateStock";

const AddEditStores = ()=>{
    let myData = useSelector(state => state.stock.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_stock({[id]: value}))
    }
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مخزن</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="StoreID">كود المخزن</label>
                        <input type="text" id="StoreID" value={myData?.StoreID} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="StoreName">أسم المخزن</label>
                        <input type="text" id="StoreName" value={myData?.StoreName} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="IsStoped">وقف التعامل</label>
                        <Switch className="!w-auto" id="IsStoped" value={myData?.IsStoped} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="IsRealStock">Real Stock</label>
                        <Switch className="!w-auto" id="IsRealStock" value={myData?.IsRealStock} onChange={event => changeValue(event)}/>
                    </div>
                    
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="Address">العنوان</label>
                        <input type="text" id="Address" value={myData?.Address} onChange={event => changeValue(event)}/>
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="SellerID">مسؤول المخزن</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear value={myData?.SellerID} onChange={event => changeValue(event)}
                            defaultValue={0} id="SellerID"
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>

                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Phone">تليفون</label>
                        <input type="text" id="Phone" value={myData?.Phone} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Mobile">موبايل</label>
                        <input type="text" id="Mobile" value={myData?.Mobile} onChange={event => changeValue(event)}/>
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="AccId">التوجية المحاسبي</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear value={myData?.AccId} onChange={event => changeValue(event)}
                            defaultValue={0} id="AccId"
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>
                    
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">مركز التكلفة</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear
                            defaultValue={0} id=""
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditStores;