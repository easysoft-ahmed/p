import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_unit, initial_state_units, update_unit } from "./stateUnit";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MessageRequest from "../../../../components/MessageRequest";
import { getNextCodeUnit, getUnit, postNewUnit, putUnit } from "../../../../services/UnitsApi";

const AddEditUnits = ()=>{
    let {id} = useParams();
    let [msg, setMsg] = useState("");
    let [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    
    let myData = useSelector(state => state.unit.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_unit({[id]: value}))
    }
    
    let getDataEditPage = async ()=>{
        try {
            let data = await getUnit(id);
            if(data.length){
                dispatch(update_unit(data[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }


    let getNextCode = async()=>{
        const nextCode = await getNextCodeUnit();
        dispatch(update_unit({UnitID: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(initial_state_units());
        document.getElementById("UnitName").focus();
        nextCode && await getNextCode()
    }

    let handleSubmit = async()=>{
        setMsg(false);
        setIsLoading(true)
        try {
            if(id){
                let status = await putUnit(myData)
                navigate("/stock/units/add", { replace: true });
                status && setMsg(true);
            }else{
                let status = await postNewUnit(myData);
                if(status === true){
                    handleAddPage()
                    setMsg(true);
                }
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            handleAddPage()
        }
    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">{id ? "تعديل" : "إضافة"} وحدة القياس</h3>
                    <div className="flex gap-4">
                        <Button disabled={!myData?.UnitName || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
                    </div>
                </div>
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="UnitID">كود وحدة القياس</label>
                        <Input type="text" id="UnitID" disabled onChange={event => changeValue(event)} value={myData?.UnitID || ""}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="UnitName" className="label_required">أسم وحدة القياس</label>
                        <input type="text" id="UnitName" onChange={event => changeValue(event)} value={myData?.UnitName || ""}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditUnits;