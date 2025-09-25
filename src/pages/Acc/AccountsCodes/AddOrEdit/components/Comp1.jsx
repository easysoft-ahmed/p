import { Input, Select } from "antd";

const Comp1 = ()=>{
    return(
        <div className="flex flex-wrap justify-center gap-2 w-full">
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">كود الحساب</label>
                <input type="text" />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">الرتبة</label>
                <Input disabled />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">أسم الحساب بالعربي</label>
                <input type="text" />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">أسم الحساب بالانجليزية</label>
                <input type="text" />
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">الحساب الاعلى</label>
                <Select className="w-full">
                    <Select.Option value="1">الاصول</Select.Option>
                    <Select.Option value="2">الخصوم</Select.Option>
                    <Select.Option value="3">المصروفات</Select.Option>
                </Select>
            </div>
            <div className="input_label_basic lg:w-3/12">
                <label htmlFor="">التوجية المحاسبي</label>
                <Select className="w-full">
                    <Select.Option value="1">عملاء</Select.Option>
                    <Select.Option value="2">موردين</Select.Option>
                    <Select.Option value="3">جهات</Select.Option>
                </Select>
            </div>
        </div>

    )
}

export default Comp1;