import { Button, Tabs } from "antd";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { SaveOutlined } from "@ant-design/icons";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

const AddEditProducts = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة صنف</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <Tabs
                className="w-full"
                    type="card"
                    items={[
                        {label: "بيانات اساسية", key: "1", children: <Comp1 />},
                        {label: "شرائح اضافية ووحدات الصنف", key: "2", children: <Comp2 />},
                        {label: "موردي الصنف", key: "3", children: <Comp3 />},
                        {label: "مراقبة المخزون و التحكم في حركات الصنف", key: "4", children: <Comp4 />},
                        {label: "وصف الصنف", key: "5", children: <Comp5 />},
                        {label: "الباركود", key: "6", children: <Comp6 />},
                        {label: "البيانات الاخرى", key: "7", children: <Comp7 />},
                        {label: "صور الصنف", key: "8", children: <Comp8 />},
                    ]}
                />
            </div>
        </>
    )
}

export default AddEditProducts;