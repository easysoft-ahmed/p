import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";

const Comp1 = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة عرض خاص</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">رقم العرض</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-2 w-3/12">
                        <label htmlFor="">تاريخ العرض</label>
                        <DatePicker />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">نوع العرض</label>
                        <Select className="w-full">
                            <Select.Option value="1">انواع العملاء</Select.Option>
                            <Select.Option value="2">عملاء محلي</Select.Option>
                            <Select.Option value="3">عملاء محافظات</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">مدة سريان العرض ( يوم )</label>
                        <input type="text" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Comp1;