import { SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
function genUniqueId() {
  return Math.random().toString(9).substring(2, 7);
}

const Comp1 = ()=>{
    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة تحويل من مخزن</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className=" flex flex-wrap w-full lg:w-6/12">
                        <div className="input_label_basic pe-4 w-6/12">
                            <label htmlFor="">رقم المستند</label>
                            <input type="text"/>
                        </div>
                        <div className="input_label_basic pe-4 w-6/12">
                            <label htmlFor="">تاريخ المستند</label>
                            <DatePicker value={dayjs()}/>
                        </div>

                        <div className="input_label_basic pe-4 w-full lg:w-6/12">
                            <label htmlFor="">من مخزن</label>
                            <Select className="w-full" defaultValue={1} disabled>
                                <Select.Option value={1}>مخزن رئيسي</Select.Option>
                            </Select>
                        </div>
                        <div className="input_label_basic pe-4 w-full lg:w-6/12">
                            <label htmlFor="">الى مخزن</label>
                            <Select className="w-full" placeholder="اختر مخزن">
                                <Select.Option value={1}>مخزن اول</Select.Option>
                                <Select.Option value={2}>مخزن ثاني</Select.Option>
                                <Select.Option value={3}>مخزن ثالث</Select.Option>
                            </Select>
                        </div>
                    </div>
                    
                    <div className="input_label_basic w-full lg:w-6/12">
                        <label htmlFor="">ملاحظات</label>
                        <TextArea className="!m-0 !mb-2" rows={5}/>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Comp1;