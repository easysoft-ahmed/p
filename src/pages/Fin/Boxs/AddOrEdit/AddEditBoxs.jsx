import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";

const AddEditBoxs = ()=>{
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
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة خزينة</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود الخزينة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم الخزينة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">التوجية المحاسبي</label>
                            <Select
                                showSearch
                                placeholder="-- غير محدد --"
                                allowClear
                                onChange={(val)=>console.log(val)}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[{ value: 'lucy', label: 'Lucy' }]}
                            />

                    </div>
                    <div className="input_label_basic w-6/12 pe-2">
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

                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">معامل العملة</label>
                        <Input disabled />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">تاريخ اول المده</label>
                        <DatePicker />
                    </div>

                    <div className="input_label_basic w-4/12 px-2">
                        <label htmlFor="">رصيد اول المده</label>
                        <input type="text" />
                    </div>

                    <div className="input_label_basic w-4/12 flex self-end">
                        <Radio.Group block options={[{label: "دائن", value: 0}, {label: "مدين", value: 1}]} defaultValue={0} optionType="button" buttonStyle="solid" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditBoxs;