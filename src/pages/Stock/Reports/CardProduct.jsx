import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import { SelectStores } from "../../../components/SelectDataApi/SelectStores";
import { SelectCostCenters } from "../../../components/SelectDataApi/SelectCostCenters";
import { SelectProducts } from "../../../components/SelectDataApi/SelectProducts";
import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";

const CardProduct = ()=>{
    let [isFilter, setIsFilter] = useState({});    

    // let [pdfName, setPdfName] = useState();
    // let [openReport, setOpenReport] = useState(false)
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
    // const handleGetPdf = ()=>{
    //     setPdfName("/test_pdf.pdf")
    //     setOpenReport(true)
    // }
    return (
        <>
            {/* <Modal
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
            </Modal> */}
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="w-full">
                    <Radio.Group block buttonStyle="solid" optionType="button" options={options} defaultValue="Apple" />
                </div>
                <div className="w-full border-b mt-5"></div>
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">الى تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع الصنف</label>
                        <SelectCategories currentValue={isFilter?.CategoryID} methodSelect={(option)=> setIsFilter(state => {return {...state, CategoryID: option?.CategoryID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">الصنف</label>
                        <SelectProducts currentValue={isFilter?.ProductID} methodSelect={(option)=> setIsFilter(state => {return {...state, ProductID: option?.ProductID}})}  />
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
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"ProductCardReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"ProductCardReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduct;