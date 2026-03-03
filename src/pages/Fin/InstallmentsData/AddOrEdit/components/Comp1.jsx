import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select } from "antd";
import { useEffect, useState } from "react";
import useGet from "../../../../../hooks/useGet";

const Comp1 = ()=>{
    let [currencies, setCurrencies] = useState([]);
    let {getDataAsync} = useGet();
     useEffect(()=>{
        let fetchApiForInitial = async()=>{
            try { setCurrencies((await getDataAsync("Fin/Currs")).ResponseObject); }
            catch {setCurrencies([])}
        }
        fetchApiForInitial()
     }, [])

    return(
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة بيانات قسط</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className="input_label_basic w-full lg:w-3/12">
                        <label htmlFor="">رقم الحركة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic px-4 w-full lg:w-3/12">
                        <label htmlFor="">تاريخ الحركة</label>
                        <DatePicker />
                    </div>
                    <div className="input_label_basic pe-4 w-full lg:w-3/12">
                        <label htmlFor="">نوع المستدين</label>
                        <Select className="w-full">
                            <Select.Option value="1">عميل</Select.Option>
                            <Select.Option value="2">مورد</Select.Option>
                            <Select.Option value="3">مندوب</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic w-full lg:w-3/12">
                        <label htmlFor="">المستدين</label>
                        <Select className="w-full">
                            <Select.Option value="3">مندوب 1</Select.Option>
                        </Select>
                    </div>

                    <div className="input_label_basic w-2/12 pe-2">
                        <label htmlFor="">اسم العملة</label>
                        <Select
                            showSearch
                            placeholder="-- غير محدد --"
                            allowClear
                            onChange={(val, opt)=>console.log(opt)}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={currencies?.map(curr =>{ return {...curr, label: curr.CurrName, value: curr.CurrID}})}
                        />
                    </div>

                    <div className="input_label_basic w-full lg:w-1/12">
                        <label htmlFor="">المعامل</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic ps-4 w-full lg:w-9/12">
                        <label htmlFor="">ملاحظات</label>
                        <input type="text" />
                    </div>

                </div>
            </div>

    )
}

export default Comp1;