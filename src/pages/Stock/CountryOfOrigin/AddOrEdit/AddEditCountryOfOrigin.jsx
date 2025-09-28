import { SaveOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";

const AddEditCountryOfOrigin = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة بلد منشأ</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود بلد المنشأ</label>
                        <input type="text" />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم بلد المنشأ</label>
                        <input type="text" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditCountryOfOrigin;