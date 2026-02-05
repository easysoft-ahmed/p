import { useEffect, useState } from "react"
import { getAllStores } from "../../services/StoresApi"
import { Select } from "antd"

export const SelectStores = ({currentValue, methodSelect})=>{
    let [data, setData] = useState([])

    let callApi = async()=>{
        let response = await getAllStores();
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
                options={data} fieldNames={{value: "StoreID", label: "StoreName"}}
            />
        </>
    )
}
