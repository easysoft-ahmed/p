import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import FilterDateReport from "../../../components/FilterDateReport";



const PurchExpenses = ()=>{
    let [isFilter, setIsFilter] = useState({
        FromDate: dayjs().format("YYYY/MM/DD"), ToDate:  dayjs().format("YYYY/MM/DD")
    });    
    
    
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <FilterDateReport isFilter={isFilter} setIsFilter={setIsFilter} />
                    <div className="input_label_basic w-1/5">
                        <label htmlFor="">الجهة</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-1/5">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"PurchesExpReport "} />
                    </div>
                    <div className="input_label_basic w-1/5">
                        <PrintMainReport WindowName={"PurchesExpReport "} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchExpenses;