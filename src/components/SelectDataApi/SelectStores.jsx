import { useEffect, useState } from "react"
import { getAllStores } from "../../services/StoresApi"
import { Modal, Select } from "antd"
import { isF3Pressed } from "../../utlis/PressF3"

export const SelectStores = ({currentValue, methodSelect , disabled = false})=>{
    let [data, setData] = useState(null)
    let [isLoading, setIsLoading] = useState(false)
    let [isOpenModal, setIsOpenModal] = useState(false)
    let callApi = async()=>{
        setIsLoading(true)
        try {
            let response = await getAllStores();
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
            <Modal open={isOpenModal}>
                Stores
            </Modal>
            <Select
                value={currentValue} // هذا السطر هو الذي يجعله "يختار" فعلياً ويظهر النص
                onSelect={(_ , option) => methodSelect(option)} // تحديث الحالة عند التغيير
                className="w-full" 
                disabled={disabled}
                showSearch
                onKeyDown={(event) =>{ isF3Pressed(event) && setIsOpenModal(true)}}
                notFoundContent={isLoading && !data ? "جاري البحث ..." : " لم يتم العثور على بيانات"}
                options={data} fieldNames={{value: "StoreID", label: "StoreName"}}
            />
        </>
    )
}
