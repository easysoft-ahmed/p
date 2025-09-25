import { CloseOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";

const AddEditPaymentReceipt = ()=>{
    let [currencies, setCurrencies] = useState([]);
    let {getDataAsync} = useGet();
     useEffect(()=>{
        let fetchApiForInitial = async()=>{
            try { setCurrencies((await getDataAsync("Fin/Currs")).ResponseObject); }
            catch {setCurrencies([])}
        }
        fetchApiForInitial()
     }, [])
    return(
        <>
            <Comp1 />
            <Comp2 />

            <div className="mt-5">
                <Comp4 />
            </div>
            <div className="mt-5">
                <Comp3 />
            </div>
        </>
    )
}

export default AddEditPaymentReceipt;