import { SearchOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Radio, Select } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
// import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";
import { getAllCategories } from "../../../services/CategoriesApi";
import { getManyDataForSelectInput } from "../../../api";
import useGet from "../../../hooks/useGet";
import { SelectCategories } from "../../../components/SelectDataApi/SelectCategories";
import { SelectCostCenters } from "../../../components/SelectDataApi/SelectCostCenters";
import { SelectStores } from "../../../components/SelectDataApi/SelectStores";
import { SelectProducts } from "../../../components/SelectDataApi/SelectProducts";
import { SelectReportFiles } from "../../../components/SelectDataApi/SelectReportFiles";
import PrintMainReport from "../../../components/PrintMainReport";
import FilterDateReport from "../../../components/FilterDateReport";

const DailyStock = ()=>{
    let [isFilter, setIsFilter] = useState({
        FromDate: dayjs().format("YYYY/MM/DD"), ToDate:  dayjs().format("YYYY/MM/DD")
    });    
    
    
    return (
        <>
            <div className="flex flex-wrap justify-between items-start w-full">
                <div className="flex flex-wrap items-end w-full [&>*]:px-2">
                    <FilterDateReport isFilter={isFilter} setIsFilter={setIsFilter} />

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">نوع الحركة</label>
                        <Select
                        defaultValue={0}
                            className="w-full"
                            options={[
                                { value: 0, label: 'بدون تحديد' },
                            ]}
                        />
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
                        <label htmlFor="">مركز التكلفة</label>
                        <SelectCostCenters currentValue={isFilter?.CostID} methodSelect={(option)=> setIsFilter(state => {return {...state, CostID: option?.CostID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">المخزن</label>
                        <SelectStores currentValue={isFilter?.StoreID} methodSelect={(option)=> setIsFilter(state => {return {...state, StoreID: option?.StoreID}})} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">التقارير</label>
                        <SelectReportFiles currentValue={isFilter?.ReportName} methodSelect={(value)=> setIsFilter(state => {return {...state, ReportName: value}})} WindowName={"StockReport"} />
                    </div>
                    <div className="input_label_basic w-4/12">
                        <PrintMainReport WindowName={"StockReport"} Filters={isFilter} />
                    </div>
                </div>
                {/* <div className="w-6/12 h-[64vh] my-2 border rounded-lg overflow-auto">
                    <iframe src={pdfName} className="w-full h-full"  />
                </div> */}
            </div>
        </>
    )
}

export default DailyStock;