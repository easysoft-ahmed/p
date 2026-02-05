import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/ProductsApi"
import { Select } from "antd"

export const SelectProducts = ({currentValue, methodSelect})=>{
    let [data, setData] = useState([])

    let callApi = async()=>{
        let response = await getAllProducts();
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
                options={data} fieldNames={{value: "ProductID", label: "Productname"}}
            />
        </>
    )
}
