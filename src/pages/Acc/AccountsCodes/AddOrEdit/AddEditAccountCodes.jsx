import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

const AddEditAccountCodes = ()=>{
    return(
        <>
            <div className="flex justify-between border-b pb-4 mb-4">
                <h3 className="text-lg font-bold">إضافة كود حساب</h3>
                <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
            </div>

            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditAccountCodes;