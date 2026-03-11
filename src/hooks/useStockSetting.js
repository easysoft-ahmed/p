import { useEffect, useState } from "react";
import { getStockSetting } from "../services/StoresApi";

const useStockSetting = ()=>{
    let [data, setData] = useState({})
    let handleGetSetting = async()=>{
        let response = await getStockSetting();
        response && setData(response);
    }
    useEffect(()=>{
        handleGetSetting()
    }, [])
    return {settingData: data}
}

export default useStockSetting;