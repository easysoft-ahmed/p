import { useEffect, useState } from "react";
import { unique } from "../helpers"
import useGet from "../hooks/useGet"
import { Table } from "antd";

const TablesPopup = {
    banks: {
        end_point: "Fin/Banks", title: "البنوك", cols: [
            {key: unique(), title: "كود البنك", dataIndex: "BankID"},
            {key: unique(), title: "اسم البنك", dataIndex: "BankName"},
        ]
    },
    boxs: {
        end_point: "Fin/Boxs", title: "الخزن", cols: [
            {key: unique(), title: "كود الخزينة", dataIndex: "BoxID"},
            {key: unique(), title: "اسم الخزينة", dataIndex: "BoxName"},
        ]

    }
}





const PopupTable = ({what_api, action_row, what_case, fakeID})=>{
    let {getDataAsync} = useGet();
    let [dataTable, setDataTable] = useState();
    let callApiData = async()=>{
        let getRecord = await getDataAsync(TablesPopup[what_api]?.end_point);
        
        setDataTable(getRecord?.ResponseObject?.length ? getRecord?.ResponseObject : [])
    }
    useEffect(()=>{
        callApiData()  
    }, [what_api])
    return(
        <Table 
            dataSource={dataTable}
            columns={TablesPopup[what_api]?.cols}
            onRow={(record => {
                return {
                    onDoubleClick: ()=>action_row(record, fakeID)
                    
                }
            })}
        />
    )
}


export default PopupTable