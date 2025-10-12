import { SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_unit, initial_state_units, update_unit } from "./stateUnit";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { useEffect, useState } from "react";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditUnits = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.unit.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_unit({[id]: value}))
    }
    
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Units?UnitID=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_unit(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Stock/Units", myData);
            navigate("/stock/units/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(initial_state_units())
        }else{
            let status = await postDataAsync("Stock/Units", myData);
            status?.ResponseObject && dispatch(initial_state_units());
            status?.ResponseObject && setMsg(true)
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(initial_state_units())
        }
    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">{id ? "تعديل" : "إضافة"} وحدة القياس</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="UnitID">كود وحدة القياس</label>
                        <Input type="text" id="UnitID" disabled onChange={event => changeValue(event)} value={myData?.UnitID || ""}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="UnitName">أسم وحدة القياس</label>
                        <input type="text" id="UnitName" onChange={event => changeValue(event)} value={myData?.UnitName || ""}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditUnits;