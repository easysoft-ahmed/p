import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";

const Comp1 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة تسوية مالية</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-full lg:w-2/12">
                        <label htmlFor="">رقم المستند</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-4 w-full lg:w-2/12">
                        <label htmlFor="">تاريخ المستند</label>
                        <DatePicker />
                    </div>
                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">العملة</label>
                        <Select className="w-full">
                            <Select.Option value="1">الجنية المصري</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-full pe-4 lg:w-1/12">
                        <label htmlFor="">قيمة العملة</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">سيريال الحركة</label>
                        <Select className="w-full">
                            <Select.Option value="1">التسويات المالية</Select.Option>
                            <Select.Option value="2">تسوية مالية 1</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-full lg:w-3/12">
                        <label htmlFor="">ملاحظات</label>
                        <input type="text" />
                    </div>


                </div>
            </div>

    )
}

export default Comp1;