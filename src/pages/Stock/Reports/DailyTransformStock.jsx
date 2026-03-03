import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import PrintMainReport from "../../../components/PrintMainReport";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import { SelectCostCenters } from "../../../components/SelectDataApi/SelectCostCenters";
import { SelectStores } from "../../../components/SelectDataApi/SelectStores";
import { SelectProducts } from "../../../components/SelectDataApi/SelectProducts";
import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";
import FilterDateReport from "../../../components/FilterDateReport";

const DailyTransformStock = ()=>{
    let [isFilter, setIsFilter] = useState({
        FromDate: dayjs().format("YYYY/MM/DD"), ToDate:  dayjs().format("YYYY/MM/DD")
    });    
    
    
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <FilterDateReport isFilter={isFilter} setIsFilter={setIsFilter} />
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
                        <label htmlFor="">مورد / عميل</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                                { value: 1, label: 'عميل' },
                                { value: 2, label: 'مورد' },
                            ]}
                        />
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
                        <label htmlFor="">من مخزن</label>
                        <SelectStores currentValue={isFilter?.FromStoreID} methodSelect={(option)=> setIsFilter(state => {return {...state, FromStoreID: option?.StoreID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">الى مخزن</label>
                        <SelectStores currentValue={isFilter?.ToStoreID} methodSelect={(option)=> setIsFilter(state => {return {...state, ToStoreID: option?.StoreID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">مركز التكلفة</label>
                        <SelectCostCenters currentValue={isFilter?.CostID} methodSelect={(option)=> setIsFilter(state => {return {...state, CostID: option?.CostID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"TransFormReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"TransFormReport"} Filters={isFilter} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DailyTransformStock;