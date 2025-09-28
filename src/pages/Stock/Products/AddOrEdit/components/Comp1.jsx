import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, Switch } from "antd";

const Comp1 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود الصنف</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">الرقم المرجعي</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic pe-2 w-6/12">
                        <label htmlFor="">اسم الصنف</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">Product Name</label>
                        <input type="text" />
                    </div>




                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">نوع الصنف</label>
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
                        <label htmlFor="">بلد المنشأ</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear
                            defaultValue={0}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div>

                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">سعر الشراء</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">سعر البيع</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="have_barcode">له باركود</label>
                        <Switch id="have_barcode" className="!w-auto"/>
                    </div>
                </div>
            </div>

    )
}

export default Comp1;