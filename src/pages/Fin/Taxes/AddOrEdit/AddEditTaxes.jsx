import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_tax, init_tax } from "./stateTax";
import { getManyDataForSelectInput } from "../../../../api";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditTaxes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.tax.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_tax({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_tax({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Fin/Taxs?TaxId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_tax(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Fin/Taxs", myData);
            navigate("/financial/taxes/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(init_tax())
        }else{
            let status = await postDataAsync("Fin/Taxs", myData);
            status?.ResponseObject && dispatch(init_tax());
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
            dispatch(init_tax())
        }

    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة ضريبة</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود الضريبة</label>
                        <input type="text" disabled value={myData?.TaxId || ""} onChange={e => changeValue(e.target.value, "TaxId")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم الضريبة</label>
                        <input type="text" value={myData?.TaxName || ""} onChange={e => changeValue(e.target.value, "TaxName")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">نسبة الضريبة</label>
                        <input type="text" value={myData?.TaxRate || ""} onChange={e => changeValue(e.target.value, "TaxRate")} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditTaxes;