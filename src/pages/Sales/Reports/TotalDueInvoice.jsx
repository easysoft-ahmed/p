import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Radio, Select } from "antd";
import dayjs from "dayjs";
import PrintMainReport from "../../../components/PrintMainReport";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import { SelectStaff } from "../../../components/SelectDataApi/SelectStaff";
import { SelectCountries } from "../../../components/SelectDataApi/SelectCountries";
import { SelectCustomers } from "../../../components/SelectDataApi/SelectCustomers";
import { SelectCustomersTypes } from "../../../components/SelectDataApi/SelectCustomersType";
import { useState } from "react";

const TotalDueInvoice = ()=>{
    let [isFilter, setIsFilter] = useState({});    

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
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="w-full">
                    <Radio.Group block buttonStyle="solid" optionType="button" options={options} defaultValue="Apple" />
                </div>
                <div className="w-full border-b mt-5"></div>
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">من تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()} />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">الى تاريخ</label>
                        <DatePicker disabled defaultValue={dayjs()}  />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">نوع العميل</label>
                        <SelectCustomersTypes currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">عميل</label>
                        <SelectCustomers currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">المنطقة</label>
                        <SelectCountries currentValue={isFilter?.CountryID} methodSelect={(option)=> setIsFilter(state => {return {...state, CountryID: option?.CountryID}})}  />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">المندوب</label>
                        <SelectStaff currentValue={isFilter?.SellerID} methodSelect={(option)=> setIsFilter(state => {return {...state, SellerID: option?.SellerID}})}  />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"CustomersCardReport"} />
                    </div>
                    <div className="input_label_basic w-3/12">
                        <PrintMainReport WindowName={"CustomersCardReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalDueInvoice;