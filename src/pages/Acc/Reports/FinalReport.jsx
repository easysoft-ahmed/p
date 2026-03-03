import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Modal, Radio, Select, Switch } from "antd";
import dayjs from "dayjs";
import { useState } from "react";


const FinalReport = ()=>{
    let [pdfName, setPdfName] = useState();
    let [openReport, setOpenReport] = useState(false)
    
    const handleGetPdf = ()=>{
        setPdfName("/test_pdf.pdf")
        setOpenReport(true)
    }
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
    return (
        <>
            <Modal
                open={openReport}
                onCancel={()=>setOpenReport(false)}
                className="[&_.ant-modal-content]:h-screen [&_.ant-modal-body]:h-full [&_.ant-modal-body]:pt-5  top-0 p-0"
                footer={false}
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '60%',
                }}
            >
                <iframe src={pdfName} className="w-full h-full"  />
            </Modal>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="w-full">
                    <Radio.Group block buttonStyle="solid" optionType="button" options={options} defaultValue={0} />
                </div>
                <div className="w-full border-b mt-5"></div>
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-4/12">
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
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع التقرير</label>
                        <Radio.Group block buttonStyle="solid" optionType="button" options={optionsTypeReports} />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المستوى</label>
                        <Input />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <Button danger type="primary" onClick={handleGetPdf} icon={<SearchOutlined />}>عرض التقرير</Button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default FinalReport;