import { DatePicker, Radio } from "antd"
import dayjs from "dayjs"
import { useState } from "react"

const FilterDateReport = ({isFilter, setIsFilter})=>{
    let [isDisabledDate, setIsDisabledDate] = useState(true)

    const options = [
        {value: dayjs().format("YYYY/MM/DD"), label: "اليوم"},
        {value: dayjs().subtract(1, 'day').format("YYYY/MM/DD"), label: "امس"},
        {value: dayjs().subtract(2, 'day').format("YYYY/MM/DD"), label: "اول امس"},
        {value: dayjs().subtract(7, 'day').format("YYYY/MM/DD"), label: "الاسبوع الحالي"},
        {value: dayjs().subtract(14, 'day').format("YYYY/MM/DD"), label: "الاسبوع الماضي"},
        {value: dayjs().subtract(30, 'day').format("YYYY/MM/DD"), label: "الشهر الحالي"},
        {value: dayjs().subtract(60, 'day').format("YYYY/MM/DD"), label: "الشهر الماضي"},
        {value: dayjs().subtract(360, 'day').format("YYYY/MM/DD"), label: "العام الحالي"},
        {value: 8, label: "خلال فترة"},
    ]

    return(
        <>
            <div className="w-full">
                <Radio.Group block buttonStyle="solid" defaultValue={dayjs().format("YYYY/MM/DD")} onChange={(event)=>{
                    if(event?.target?.value !== 8){
                        setIsDisabledDate(true)
                        setIsFilter(state => { return {...state , FromDate: event?.target?.value, ToDate: dayjs()}})
                    }else{
                        setIsDisabledDate(false)
                        setIsFilter(state => { return {...state , FromDate: dayjs(), ToDate: dayjs()}})
                    }

                }
                } optionType="button" options={options}  />
            </div>


                <div className="w-full border-b mt-5"></div>

            <div className="input_label_basic w-4/12">
                <label htmlFor="">من تاريخ</label>
                <DatePicker disabled={isDisabledDate} onChange={(value, dateStr)=>{ setIsFilter(state => { return {...state, FromDate: dateStr}})}} value={dayjs(isFilter?.FromDate)} />
            </div>
            <div className="input_label_basic w-4/12">
                <label htmlFor="">الى تاريخ</label>
                <DatePicker disabled={isDisabledDate} onChange={(value, dateStr)=>{ setIsFilter(state => { return {...state, ToDate: dateStr}})}} value={dayjs(isFilter?.ToDate)} />
            </div>

        </>
    )
}


export default FilterDateReport;