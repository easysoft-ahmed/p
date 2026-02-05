import { useEffect, useState } from "react"
import { Select } from "antd"
import { getFilesReport } from "../../services/PrintReportApi"

export const SelectReportFiles = ({currentValue, methodSelect, WindowName})=>{
    let [data, setData] = useState([])

    let callApi = async()=>{
        let response = await getFilesReport(WindowName);
        setData(response.data || []);            
    }
    
    useEffect(()=>{
        callApi()
    }, []);


    return(
        <>
            <Select onSelect={(value) => methodSelect(value)}>
                {data?.map(fileName => 
                    <Select.Option key={fileName} value={fileName}>{fileName}</Select.Option>
                )}
            </Select>
        </>
    )
}
