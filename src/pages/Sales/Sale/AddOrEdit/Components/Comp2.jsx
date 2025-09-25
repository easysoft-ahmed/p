import { Select } from "antd";

const SaleType1 = ()=>{
    return(
        <div className=" flex justify-center gap-4 mt-6 ">
            <div className="flex flex-wrap w-5/12 p-4 border relative">
                <h5 className="font-bold top-[-15px] absolute bg-white">شروط العرض</h5>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">صنف العرض</label>
                    <Select className="w-full">
                        <Select.Option value="1">صنف 1</Select.Option>
                        <Select.Option value="2">صنف 2</Select.Option>
                        <Select.Option value="3">صنف 3</Select.Option>
                    </Select>
                </div>
                <div className="input_label_basic ps-4  w-6/12">
                    <label htmlFor="">الكمية من</label>
                    <input type="text" />
                </div>
                <div className="input_label_basic px-4 w-6/12">
                    <label htmlFor="">الكمية الى</label>
                    <input type="text" />
                </div>
            </div>
            
            <div className="flex flex-wrap p-4 border relative">
                <h5 className="font-bold top-[-15px] absolute bg-white">صنف البونص</h5>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">صنف البونص</label>
                    <Select className="w-full">
                        <Select.Option value="1">صنف 1</Select.Option>
                        <Select.Option value="2">صنف 2</Select.Option>
                        <Select.Option value="3">صنف 3</Select.Option>
                    </Select>
                </div>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">كمية البونص</label>
                    <input type="text" />
                </div>
            </div>

        </div>
    )
}

const SaleType2 = ()=>{
    return(
        <div className=" flex justify-center gap-4 mt-6 ">
            <div className="flex flex-wrap w-5/12 p-4 border relative">
                <h5 className="font-bold top-[-15px] absolute bg-white">شروط العرض</h5>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">صنف العرض</label>
                    <Select className="w-full">
                        <Select.Option value="1">صنف 1</Select.Option>
                        <Select.Option value="2">صنف 2</Select.Option>
                        <Select.Option value="3">صنف 3</Select.Option>
                    </Select>
                </div>
                <div className="input_label_basic ps-4  w-6/12">
                    <label htmlFor="">نوع الخصم</label>
                    <Select className="w-full">
                        <Select.Option value="1">قيمة</Select.Option>
                        <Select.Option value="2">نسبة</Select.Option>
                    </Select>
                </div>
                <div className="input_label_basic px-4 w-6/12">
                    <label htmlFor="">الخصم</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

const SaleType3 = ()=>{
    return(
        <div className=" flex justify-center gap-4 mt-6 ">
            <div className="flex flex-wrap w-5/12 p-4 border relative">
                <h5 className="font-bold top-[-15px] absolute bg-white">شروط العرض</h5>
                <div className="input_label_basic py-2 mb-2 w-full text-center border-b font-bold">
                    <h6>مبلغ المبيعات ( صافي الفاتورة )</h6>
                </div>
                <div className="input_label_basic ps-4  w-6/12">
                    <label htmlFor="">القيمة من</label>
                    <input type="text" />
                </div>
                <div className="input_label_basic px-4 w-6/12">
                    <label htmlFor="">القيمة الى</label>
                    <input type="text" />
                </div>
            </div>
            
            <div className="flex flex-wrap p-4 border relative">
                <h5 className="font-bold top-[-15px] absolute bg-white">صنف البونص</h5>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">صنف البونص</label>
                    <Select className="w-full">
                        <Select.Option value="1">صنف 1</Select.Option>
                        <Select.Option value="2">صنف 2</Select.Option>
                        <Select.Option value="3">صنف 3</Select.Option>
                    </Select>
                </div>
                <div className="input_label_basic ps-4 w-full">
                    <label htmlFor="">كمية البونص</label>
                    <input type="text" />
                </div>
            </div>

        </div>
    )
}


const Comp2 = ({type})=>{
    return(
        <>
            {/* <SaleType1 /> */}
            {/* <SaleType2 /> */}
            <SaleType3 />
        </>
    )
}

export default Comp2;