import { useEffect, useState } from "react"
import { getAllCurrncies } from "../../services/CurrnciesApi"
import { Select } from "antd"

export const SelectCurrncies = ({currentValue, methodSelect})=>{
    let [data, setData] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    let callApi = async()=>{
        setIsLoading(true)
        try {
            let response = await getAllCurrncies();
            setData(response || []);
        } finally {
            setIsLoading(false)
        }
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
                notFoundContent={isLoading && !data ? "جاري البحث ..." : " لم يتم العثور على بيانات"}
                options={data} fieldNames={{value: "CurrID", label: "CurrName"}}
            />
        </>
    )
}
