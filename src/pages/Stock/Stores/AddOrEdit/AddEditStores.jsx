import { SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";

const AddEditStores = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مخزن</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود المخزن</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم المخزن</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="stop_dealing">وقف التعامل</label>
                        <Switch className="!w-auto" id="stop_dealing"/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="real_stock">Real Stock</label>
                        <Switch className="!w-auto" id="real_stock"/>
                    </div>
                    
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">العنوان</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">مسؤول المخزن</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear
                            defaultValue={0}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>

                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="">تليفون</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="">موبايل</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">التوجية المحاسبي</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear
                            defaultValue={0}
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
                            defaultValue={0}
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