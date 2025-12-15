import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const LowProducts = ()=>{
    let [pdfName, setPdfName] = useState();
    let [openReport, setOpenReport] = useState(false)
    const handleGetPdf = ()=>{
        setPdfName("/test_pdf.pdf")
        setOpenReport(true)
    }
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
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">معدل الدوران</label>
                        <Input defaultValue={30} type="number" />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع الصنف</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">مركز التكلفة</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المخزن</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
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
                        <Button danger type="primary" onClick={handleGetPdf} icon={<SearchOutlined />}>عرض التقرير</Button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LowProducts;