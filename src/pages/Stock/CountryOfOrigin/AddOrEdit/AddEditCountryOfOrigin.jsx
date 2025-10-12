import { SaveOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { useDispatch, useSelector } from "react-redux";
import { edit_country_of_origin, initial_state_country_of_origin, update_country_of_origin } from "./stateCountryOfOrigin";
import { useEffect, useState } from "react";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditCountryOfOrigin = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.country_of_origin.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_country_of_origin({[id]: value}))
    }
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sys/Countries?CountryId=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_country_of_origin(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }
    
    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Sys/Countries", myData);
            navigate("/stock/country_of_origin/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(initial_state_country_of_origin())
        }else{
            let status = await postDataAsync("Sys/Countries", myData);
            status?.ResponseObject && dispatch(initial_state_country_of_origin());
            status?.ResponseObject && setMsg(true)
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(update_country_of_origin({}))
        }
    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة بلد منشأ</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود بلد المنشأ</label>
                        <Input disabled type="text" value={myData?.CountryID || ""} onChange={event => changeValue(event)} id="CountryID"/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم بلد المنشأ</label>
                        <input type="text" value={myData?.CountryName || ""} onChange={event => changeValue(event)} id="CountryName" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditCountryOfOrigin;