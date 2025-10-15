import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, Switch } from "antd";
import MessageRequest from "../../../../components/MessageRequest";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { edit_currency, init_currency } from "./stateCurrency";

const AddEditCurrencies = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.currency.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_currency({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_currency({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Fin/Currs?CurrId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_currency(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Fin/Currs", myData);
            navigate("/financial/currencies/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(init_currency())
        }else{
            let status = await postDataAsync("Fin/Currs", myData);
            status?.ResponseObject && dispatch(init_currency());
            status?.ResponseObject && setMsg(true)
        }

    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await getDataEditPage()
    }


    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_currency())
        }

    }, [id])


    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة عملة</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود العملة</label>
                        <input type="text" disabled value={myData?.CurrId || ""} onChange={e => changeValue(e.target.value, "CurrId")} />
                    </div>

                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم العملة</label>
                        <input type="text" value={myData?.CurrName || ""} onChange={e => changeValue(e.target.value, "CurrName")} />
                    </div>
                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">اختصار اسم العملة</label>
                        <input type="text" value={myData?.CurrPart || ""} onChange={e => changeValue(e.target.value, "CurrPart")} />
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">معامل العملة</label>
                        <input type="text" value={myData?.CurrRate || ""} onChange={e => changeValue(e.target.value, "CurrRate")} />
                    </div>
                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">العملة الافتراضية</label>
                        <Switch className="!w-auto" value={myData?.IsDefualte} onChange={value => changeValue(value, "IsDefualte")} />
                    </div>

                </div>

            </div>
        </>
    )  
}

export default AddEditCurrencies;