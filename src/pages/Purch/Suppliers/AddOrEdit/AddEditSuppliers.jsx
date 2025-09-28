import { Button, Tabs } from "antd";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { SaveOutlined } from "@ant-design/icons";
import Comp3 from "./Components/Comp3";

const AddEditSuppliers = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مورد</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <Tabs
                className="w-full"
                    type="card"
                    items={[
                        {label: "بيانات اساسية", key: "1", children: <Comp1 />},
                        {label: "جهات الاتصال", key: "2", children: <Comp2 />},
                        {label: "بيانات رسمية", key: "3", children: <Comp3 />},
                    ]}
                />
            </div>
        </>
    )
}

export default AddEditSuppliers;