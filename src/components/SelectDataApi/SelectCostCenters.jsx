import { useEffect, useState } from "react"
import { getAllCostCenters } from "../../services/CostCentersApi"
import { Select } from "antd"

export const SelectCostCenters = ({currentValue, methodSelect})=>{
    let [data, setData] = useState([])

    let callApi = async()=>{
        let response = await getAllCostCenters();
        setData(response || []);            
    }
    
    useEffect(()=>{
        callApi()
    }, []);


    return(
        <>
            <Select
                value={currentValue} // هذا السطر هو الذي يجعله "يختار" فعلياً ويظهر النص
                onSelect={(_ , option) => methodSelect(option)} // تحديث الحالة عند التغيير
                className="w-full" 
                options={data} fieldNames={{value: "CostID", label: "CostName"}}
            />
        </>
    )
}
