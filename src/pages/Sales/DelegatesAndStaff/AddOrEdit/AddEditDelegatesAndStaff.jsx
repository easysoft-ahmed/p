import { SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddEditDelegatesAndStaff = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مندوب</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-5/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود المندوب</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم المندوب</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">العنوان</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">الهاتف</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">الموبيل</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="">الرقم القومي</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">الجنس</label>
                        <Select className="w-full">
                            <Select.Option value="1">ذكر</Select.Option>
                            <Select.Option value="2">انثى</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">الديانة</label>
                        <Select className="w-full">
                            <Select.Option value="1">مسلم</Select.Option>
                            <Select.Option value="2">مسيحي</Select.Option>
                            <Select.Option value="3">يهودي</Select.Option>
                            <Select.Option value="4">أخرى</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">الراتب الشهري</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">أجر اليوم</label>
                        <input type="text" />
                    </div>
                    <div className="w-full flex flex-wrap justify-between [&_button]:w-auto border-y my-4 py-4">

                        <div className="input_label_basic">
                            <label htmlFor="delegate_sales">مبيعات</label>
                            <Switch id="delegate_sales" />
                        </div>
                        
                        <div className="input_label_basic">
                            <label htmlFor="delegate_purchases">مشتريات</label>
                            <Switch id="delegate_purchases" />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_collect">تحصيل</label>
                            <Switch id="delegate_collect" />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_support">دعم فني</label>
                            <Switch id="delegate_support" />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_telesales">تيلي سيلز</label>
                            <Switch id="delegate_telesales" />
                        </div>
                    </div>

                    <div className="input_label_basic w-full">
                        <label htmlFor="">ملاحظات</label>
                        <TextArea />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditDelegatesAndStaff;