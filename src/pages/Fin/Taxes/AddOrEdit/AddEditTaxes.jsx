import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AddEditTaxes = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة ضريبة</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود الضريبة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم الضريبة</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">نسبة الضريبة</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditTaxes;