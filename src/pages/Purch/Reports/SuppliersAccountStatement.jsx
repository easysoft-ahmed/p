import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectSuppliersType } from "../../../components/SelectDataApi/SelectSuppliersType";
import { SelectSuppliers } from "../../../components/SelectDataApi/SelectSuppliers";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import FilterDateReport from "../../../components/FilterDateReport";



const SuppliersAccountStatement = ()=>{
    let [isFilter, setIsFilter] = useState({
        FromDate: dayjs().format("YYYY/MM/DD"), ToDate:  dayjs().format("YYYY/MM/DD")
    });    
    
    
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <FilterDateReport isFilter={isFilter} setIsFilter={setIsFilter} />
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع المورد</label>
                        <SelectSuppliersType currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المورد</label>
                        <SelectSuppliers currentValue={isFilter?.VendorID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorID: option?.VendorID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"VendorsCardReport "} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"VendorsCardReport "} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuppliersAccountStatement