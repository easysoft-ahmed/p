import { useEffect, useState } from "react"
import { Select } from "antd"
import { getFilesReport } from "../../services/PrintReportApi"

export const SelectReportFiles = ({currentValue, methodSelect, WindowName})=>{    
    let [data, setData] = useState(null)
    let [isLoading, setIsLoading] = useState(false)

    let callApi = async()=>{
        setIsLoading(true)
        try {
            let response = await getFilesReport(WindowName);
            setData(response.data || []);
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
                notFoundContent={isLoading && !data ? "جاري البحث ..." : " لم يتم العثور على بيانات"}
                onSelect={(value) => methodSelect(value)}>
                    {data?.map(fileName => 
                            <Select.Option key={fileName} value={fileName}>{fileName}</Select.Option>
                        )
                    }
            </Select>
        </>
    )
}
