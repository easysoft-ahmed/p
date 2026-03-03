import { SaveOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

const AddEditRankCashFlow = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة تصنيف</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود البند</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-4 w-8/12">
                        <label htmlFor="">أسم البند</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">النوع</label>
                        <Select
                            showSearch
                            placeholder="-- غير محدد --"
                            allowClear
                            onChange={(val)=>console.log(val)}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[{ value: 1, label: 'بند قبض' },{ value: 2, label: 'بند دفع' }]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditRankCashFlow;