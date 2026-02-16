import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { SelectSuppliersType } from "../../../components/SelectDataApi/SelectSuppliersType";
import { SelectCustomersSuppliers } from "../../../components/SelectDataApi/SelectCustomersSuppliers";
import { SelectCountries } from "../../../components/SelectDataApi/SelectCountries";
import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";
import { SelectProducts } from "../../../components/SelectDataApi/SelectProducts";
import { SelectStaff } from "../../../components/SelectDataApi/SelectStaff";
import { SelectCostCenters } from "../../../components/SelectDataApi/SelectCostCenters";
import { SelectStores } from "../../../components/SelectDataApi/SelectStores";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import FilterDateReport from "../../../components/FilterDateReport";

const TotalCommandPurch = ()=>{
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
                        <label htmlFor="">مورد / عميل</label>
                        <SelectCustomersSuppliers currentValue={isFilter?.CustomerID} methodSelect={(option)=> setIsFilter(state => {return {...state, CustomerID: option?.CustomerID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">مسلسل الحركة</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المنطقة</label>
                        <SelectCountries currentValue={isFilter?.CountryID} methodSelect={(option)=> setIsFilter(state => {return {...state, CountryID: option?.CountryID}})}  />
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
                        <label htmlFor="">المندوب</label>
                        <SelectStaff currentValue={isFilter?.SellerID} methodSelect={(option)=> setIsFilter(state => {return {...state, SellerID: option?.SellerID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">مركز التكلفة</label>
                        <SelectCostCenters currentValue={isFilter?.CostID} methodSelect={(option)=> setIsFilter(state => {return {...state, CostID: option?.CostID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المخزن</label>
                        <SelectStores currentValue={isFilter?.StoreID} methodSelect={(option)=> setIsFilter(state => {return {...state, StoreID: option?.StoreID}})}  />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"PurchesOrderReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"PurchesOrderReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalCommandPurch;