import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";

const Comp1 = ()=>{
    return(
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة رد شيك وارد</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-full lg:w-4/12">
                        <label htmlFor="">رقم المستند</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-4 w-full lg:w-4/12">
                        <label htmlFor="">تاريخ المستند</label>
                        <DatePicker />
                    </div>
                </div>
            </div>

    )
}

export default Comp1;