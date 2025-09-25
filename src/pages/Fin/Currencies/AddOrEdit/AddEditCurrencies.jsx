import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";

const AddEditCurrencies = ()=>{
    return(
        <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة عملة</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود العملة</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم العملة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">اختصار اسم العملة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">معامل العملة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">العملة الافتراضية</label>
                        <Switch className="!w-auto" defaultChecked />
                    </div>

                </div>

        </div>
    )  
}

export default AddEditCurrencies;