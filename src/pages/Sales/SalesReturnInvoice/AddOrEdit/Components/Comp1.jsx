import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";

const Comp1 = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة فاتورة مرتد مبيعات</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">رقم الفاتورة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">الرقم الدفتري</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">تاريخ الفاتورة</label>
                        <DatePicker />
                    </div>
                    <div className="input_label_basic pe-4 w-2/12">
                        <label htmlFor="">تاريخ الاستحقاق</label>
                        <DatePicker />
                    </div>
                    <div className="input_label_basic pe-4 w-full lg:w-3/12">
                        <label htmlFor="">العملة</label>
                        <Select className="w-full">
                            <Select.Option value="1">الجنية المصري</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-full lg:w-1/12">
                        <label htmlFor="">قيمة العملة</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">نوع الجهة</label>
                        <Select className="w-full">
                            <Select.Option value="1">عميل</Select.Option>
                            <Select.Option value="2">مورد</Select.Option>
                            <Select.Option value="3">مندوب</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">اسم الجهة</label>
                        <Select className="w-full">
                            <Select.Option value="1">عميل نقدي</Select.Option>
                            <Select.Option value="2">مجد العجلة</Select.Option>
                            <Select.Option value="3">عبد الكريم عطرة</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic pe-4 w-full lg:w-2/12">
                        <label htmlFor="">مندوب البيع</label>
                        <Select className="w-full">
                            <Select.Option value="1">مندوب 1</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-full pe-4 lg:w-2/12">
                        <label htmlFor="">اسم الحساب</label>
                        <Select className="w-full">
                            <Select.Option value="1">الاصول</Select.Option>
                            <Select.Option value="2">الخصوم</Select.Option>
                            <Select.Option value="3">الايرادات</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic w-full lg:w-2/12">
                        <label htmlFor="">المخزن</label>
                        <Select className="w-full">
                            <Select.Option value="1">المعادي</Select.Option>
                            <Select.Option value="2">اكتوبر</Select.Option>
                            <Select.Option value="3">الشيخ زايد</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-4 w-2/12">
                        <label htmlFor="">فاتورة المبيعات</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-full">
                        <label htmlFor="">ملاحظات</label>
                        <input type="text" />
                    </div>





                </div>
            </div>

        </>
    )
}

export default Comp1;