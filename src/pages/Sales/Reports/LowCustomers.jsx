import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectCustomersTypes } from "../../../components/SelectDataApi/SelectCustomersType";
import { SelectCustomers } from "../../../components/SelectDataApi/SelectCustomers";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";

const LowCustomers = ()=>{
    let [isFilter, setIsFilter] = useState({});    
    return (
        <>

            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
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
                        <SelectCustomersTypes currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">العميل</label>
                        <SelectCustomers currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-6/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"CustomersLastUseReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"CustomersLastUseReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default LowCustomers;