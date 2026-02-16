import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import PrintMainReport from "../../../components/PrintMainReport";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import { SelectStaff } from "../../../components/SelectDataApi/SelectStaff";
import { SelectCountries } from "../../../components/SelectDataApi/SelectCountries";
import { SelectCustomersSuppliers } from "../../../components/SelectDataApi/SelectCustomersSuppliers";
import { SelectCustomersTypes } from "../../../components/SelectDataApi/SelectCustomersType";
import FilterDateReport from "../../../components/FilterDateReport";

const TotalCustomersMovement = ()=>{
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
                        <label htmlFor="">مورد / عميل</label>
                        <SelectCustomersSuppliers currentValue={isFilter?.CustomerID} methodSelect={(option)=> setIsFilter(state => {return {...state, CustomerID: option?.CustomerID}})}  />
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
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"CustomersTransReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"CustomersTransReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCustomersMovement;