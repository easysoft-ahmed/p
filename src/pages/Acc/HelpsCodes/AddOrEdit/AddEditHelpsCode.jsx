import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const AddEditHelpsCode = ()=>{
    return(
        <div className="[&>*]:w-full [&>*]:flex">
                <div className="flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة كود يوميات مساعدة</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>
                <div >
                    <Form.Item className="w-8/12 md:w-6/12 lg:w-4/12" required layout="vertical" name="Code" label="كود اليومية">
                        <Input />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item className="w-8/12 md:w-6/12 lg:w-4/12" required layout="vertical" name="Name" label="أسم اليومية">
                        <Input />
                    </Form.Item>
                </div>

        </div>
    )  
}

export default AddEditHelpsCode;