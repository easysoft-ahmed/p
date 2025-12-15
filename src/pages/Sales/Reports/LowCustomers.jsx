import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const LowCustomers = ()=>{
    let [pdfName, setPdfName] = useState();

    const handleGetPdf = ()=>{
        setPdfName("")
        setTimeout(()=>{
            setPdfName("/test_pdf.pdf")
        }, 3000)
    }
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-5/12 [&>*]:px-2">
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">معدل الدوران</label>
                        <Input defaultValue={30} type="number" />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">نوع العميل</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">العميل</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">التقارير</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'تقرير 1' },
                                { value: 1, label: 'تقرير 2' },
                                { value: 2, label: 'تقرير 3' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <Button danger type="primary" onClick={handleGetPdf} icon={<SearchOutlined />}>عرض التقرير</Button>
                    </div>
                </div>
                <div className="w-6/12 h-[64vh] my-2 border rounded-lg overflow-auto">
                    <iframe src={pdfName} className="w-full h-full"  />
                </div>
            </div>
        </>
    )
}


export default LowCustomers;