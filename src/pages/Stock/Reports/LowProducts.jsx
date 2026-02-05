import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import PrintMainReport from "../../../components/PrintMainReport";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import { SelectStores } from "../../../components/SelectDataApi/SelectStores";
import { SelectCostCenters } from "../../../components/SelectDataApi/SelectCostCenters";
import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";

const LowProducts = ()=>{
    let [isFilter, setIsFilter] = useState({});    

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
                        <SelectCategories currentValue={isFilter?.CategoryID} methodSelect={(option)=> setIsFilter(state => {return {...state, CategoryID: option?.CategoryID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">مركز التكلفة</label>
                        <SelectCostCenters currentValue={isFilter?.CostID} methodSelect={(option)=> setIsFilter(state => {return {...state, CostID: option?.CostID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المخزن</label>
                        <SelectStores currentValue={isFilter?.StoreID} methodSelect={(option)=> setIsFilter(state => {return {...state, StoreID: option?.StoreID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"ProductLastUseReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"ProductLastUseReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default LowProducts;