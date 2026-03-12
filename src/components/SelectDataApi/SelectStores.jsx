import { useEffect, useState } from "react"
import { getAllStores } from "../../services/StoresApi"
import { Modal, Select, Table } from "antd"
import { isF3Pressed } from "../../utlis/PressF3"



const TableStores = ({dataSource, selectMethod, closeModal})=>{
    let columns = [
        {
            title: "كود المخزن",
            dataIndex: "StoreID"
        },
        {
            title: "اسم المخزن",
            dataIndex: "StoreName"
        },
    ]
    return(
        <Table className="mt-5" columns={columns} dataSource={dataSource} 
            onRow={(record, rowIndex) => {
                return {
                    onClick: (event) => {
                        selectMethod(record);
                        closeModal()
                    },
                };
            }}
        />
    )
}

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
            <Modal open={isOpenModal} title="جدول المخازن" footer={false}>
                <TableStores dataSource={data} selectMethod={methodSelect} closeModal={() => setIsOpenModal(false)} />
            </Modal>
            <Select
                value={currentValue} // هذا السطر هو الذي يجعله "يختار" فعلياً ويظهر النص
                onSelect={(_ , option) => methodSelect(option)} // تحديث الحالة عند التغيير
                className="w-full" 
                disabled={disabled}
                showSearch
                allowClear
                onKeyDown={(event) =>{ isF3Pressed(event) && setIsOpenModal(true)}}
                notFoundContent={isLoading && !data ? "جاري البحث ..." : " لم يتم العثور على بيانات"}
                options={data} fieldNames={{value: "StoreID", label: "StoreName"}}
            />
        </>
    )
}
