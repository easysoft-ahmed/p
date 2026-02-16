import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select, Switch } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectCustomersTypes } from "../../../components/SelectDataApi/SelectCustomersType";
import { SelectCustomers } from "../../../components/SelectDataApi/SelectCustomers";
import { SelectCountries } from "../../../components/SelectDataApi/SelectCountries";
import { SelectStaff } from "../../../components/SelectDataApi/SelectStaff";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import FilterDateReport from "../../../components/FilterDateReport";



const CustomersAccountStatement = ()=>{
    let [isFilter, setIsFilter] = useState({
        FromDate: dayjs().format("YYYY/MM/DD"), ToDate:  dayjs().format("YYYY/MM/DD")
    });    
    
    
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <FilterDateReport isFilter={isFilter} setIsFilter={setIsFilter} />
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع العميل</label>
                        <SelectCustomersTypes currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">العميل</label>
                        <SelectCustomers currentValue={isFilter?.VendorTypeID} methodSelect={(option)=> setIsFilter(state => {return {...state, VendorTypeID: option?.VendorTypeID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المنطقة</label>
                        <SelectCountries currentValue={isFilter?.CountryID} methodSelect={(option)=> setIsFilter(state => {return {...state, CountryID: option?.CountryID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المندوب</label>
                        <SelectStaff currentValue={isFilter?.SellerID} methodSelect={(option)=> setIsFilter(state => {return {...state, SellerID: option?.SellerID}})}  />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"CustomersCardReport"} />
                    </div>
                    <div className="input_label_basic text-center w-4/12">
                        <label htmlFor="" className="">عرض رصيد ماسبق</label>
                        <Switch className="!w-auto" />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"CustomersCardReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersAccountStatement