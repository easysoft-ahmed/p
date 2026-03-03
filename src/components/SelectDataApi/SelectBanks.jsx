import { useEffect, useState } from "react"
import { Select } from "antd"
import { getAllBanks } from "../../services/BanksApi"

export const SelectBanks = ({currentValue, methodSelect})=>{
    let [data, setData] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    let callApi = async()=>{
        setIsLoading(true)
        try {
            let response = await getAllBanks();
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
                onSelect={(_ , option) =>{ methodSelect(option)}} // تحديث الحالة عند التغيير
                className="w-full" 
                notFoundContent={isLoading && !data ? "جاري البحث ..." : " لم يتم العثور على بيانات"}
                options={data} fieldNames={{value: "BankID", label: "BankName"}}
            />
        </>
    )
}
