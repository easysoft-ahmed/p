import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_acc_help, init_acc_help } from "./stateHelpsCode";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditHelpsCode = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.acc_help.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_acc_help({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_acc_help({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Acc/AccDailys?DailyId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_acc_help({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await getDataEditPage()
    }

    
    
    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Acc/AccDailys", myData);
            navigate("/accounts/helps_codes/add", { replace: true });
            status?.ResponseObject && dispatch(init_acc_help())
            status?.ResponseObject && setMsg(true);
        }else{
            let status = await postDataAsync("Acc/AccDailys", myData);
            status?.ResponseObject && dispatch(init_acc_help());
            status?.ResponseObject && setMsg(true)
        }
        
    }
    
    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_acc_help())
        }

    }, [id])


    return(
        <>
            <MessageRequest data={msg}/>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">{id ? "تعديل" : "إضافة"} وحدة كود يوميات مساعدة</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="AccDailyId">كود اليومية</label>
                        <Input type="text" id="AccDailyId" disabled onChange={event => changeValue(event)} value={myData?.AccDailyId || ""}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="AccDailyName">أسم اليومية</label>
                        <input type="text" id="AccDailyName" onChange={event => changeValue(event)} value={myData?.AccDailyName || ""}/>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default AddEditHelpsCode;