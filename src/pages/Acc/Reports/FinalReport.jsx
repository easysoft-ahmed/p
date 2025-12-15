import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select, Switch } from "antd";
import dayjs from "dayjs";
import { useState } from "react";


const FinalReport = ()=>{
    let [pdfName, setPdfName] = useState();
    const options = [
        {value: 0, label: "اليوم"},
        {value: 1, label: "امس"},
        {value: 2, label: "اول امس"},
        {value: 3, label: "الاسبوع الحالي"},
        {value: 4, label: "الاسبوع الماضي"},
        {value: 5, label: "الشهر الحالي"},
        {value: 6, label: "الشهر الماضي"},
        {value: 7, label: "العام الحالي"},
        {value: 8, label: "خلال فترة"},
    ]
    const optionsTypeReports = [
        {value: 0, label: "قائمة الدخل"},
        {value: 1, label: "الميزانية"},
        {value: 2, label: "ميزان المراجعة"},
    ]
    const handleGetPdf = ()=>{
        setPdfName("")
        setTimeout(()=>{
            setPdfName("/test_pdf.pdf")
        }, 3000)
    }
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="w-full">
                    <Radio.Group block buttonStyle="solid" optionType="button" options={options} defaultValue={0} />
                </div>
                <div className="w-full border-b mt-5"></div>
                <div className="flex flex-wrap items-end w-5/12 [&>*]:px-2">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-8/12">
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
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">الى تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()}  />
                    </div>
                    <div className="input_label_basic w-8/12">
                        <label htmlFor="">نوع التقرير</label>
                        <Radio.Group block buttonStyle="solid" optionType="button" options={optionsTypeReports} />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المستوى</label>
                        <Input />
                    </div>

                    <div className="input_label_basic w-8/12">
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



export default FinalReport;