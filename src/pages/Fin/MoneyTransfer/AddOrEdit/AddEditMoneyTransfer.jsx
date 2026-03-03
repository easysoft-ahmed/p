import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddEditMoneyTransfer = ()=>{
    return(
        <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة تحويل مالي</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">رقم المستند</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">تاريخ المستند</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">اسم العملة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">معامل العملة</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-4/12 pe-2">
                        <label htmlFor="">القيمة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-8/12 ps-2">
                        <label htmlFor="">التفقيط</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">التحويل من</label>
                        <Select>
                            <Select.Option value="0">خزينة</Select.Option>
                            <Select.Option value="1">بنك</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">اختر خزينة</label>
                        <Select>
                            <Select.Option value="0">الخزينة الرئيسية</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">التحويل إلى</label>
                        <Select>
                            <Select.Option value="0">خزينة</Select.Option>
                            <Select.Option value="1">بنك</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">اختر خزينة</label>
                        <Select>
                            <Select.Option value="0">الخزينة الرئيسية</Select.Option>
                        </Select>
                    </div>

                    
                    <div className="input_label_basic w-full">
                        <label htmlFor="">ملاحظات</label>
                        <TextArea rows={4} />
                    </div>

            
                </div>

        </div>
    )  
}

export default AddEditMoneyTransfer;