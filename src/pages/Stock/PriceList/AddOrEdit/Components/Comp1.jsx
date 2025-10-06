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
                    <h3 className="text-lg font-bold">إضافة قائمة اسعار</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full">
                    <div className=" flex flex-wrap w-full lg:w-6/12">
                        <div className="input_label_basic pe-4 w-6/12">
                            <label htmlFor="">رقم القائمة</label>
                            <input type="text"/>
                        </div>
                        <div className="input_label_basic pe-4 w-full lg:w-6/12">
                            <label htmlFor="">استدعاء الاصناف</label>
                            <Select className="w-full" placeholder="اختر مخزن">
                                <Select.Option value={1}>-- بمعرف المستخدم --</Select.Option>
                                <Select.Option value={2}>كل الاصناف</Select.Option>
                                <Select.Option value={3}>مورد رئيسي</Select.Option>
                                <Select.Option value={3}>بلد المنشأ</Select.Option>
                                <Select.Option value={3}>تصنيف</Select.Option>
                            </Select>
                        </div>
                        <div className="input_label_basic pe-4 w-full">
                            <label htmlFor="">وصف القائمة</label>
                            <input type="text"/>
                        </div>
                        
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply1" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply1">من السعر</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply2" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply2">من البيع</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply3" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply3">من التكلفة</label>
                        </div>
                        <div className="pe-4 w-3/12">
                            <input type="radio" id="apply4" name="isMain" class="mx-4 w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label htmlFor="apply4">من الجملة</label>
                        </div>
                        <Button type="primary" className="mt-4 w-4/12" >تطبيق </Button>

                    </div>
                    <div className="flex justify-between gap-4 self-start mt-6 w-6/12 ">
                        <div className="flex flex-wrap content-start p-4 border relative">
                            <h5 className="font-bold top-[-15px] absolute bg-white">تعديل الاسعار</h5>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر الشراء %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر البيع %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر الجملة %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر خاص 1 %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر وكلاء %</label>
                                    <input type="text"/>
                                </div>
                                <div className="input_label_basic pe-4 w-6/12">
                                    <label htmlFor="">سعر خاص 2 %</label>
                                    <input type="text"/>
                                </div>

                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Comp1;