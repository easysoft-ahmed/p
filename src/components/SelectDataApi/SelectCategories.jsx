import { useEffect, useState } from "react"
import { getAllCategories } from "../../services/CategoriesApi"
import { Select } from "antd"

export const SelectCategories = ({currentValue, methodSelect})=>{
    let [data, setData] = useState([])

    let callApi = async()=>{
        let response = await getAllCategories();
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
                options={data} fieldNames={{value: "CategoryID", label: "CategoryName"}}
            />
        </>
    )
}
