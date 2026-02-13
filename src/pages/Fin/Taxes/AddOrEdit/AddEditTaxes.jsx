import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
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
import { getNextCodeTax } from "../../../../services/TaxsApi";

const AddEditTaxes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false)

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

    let getNextCode = async()=>{
        const nextCode = await getNextCodeTax();
        dispatch(edit_tax({TaxId: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_tax())
        nextCode && await getNextCode();
    }

    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Fin/Taxs", myData);
                navigate("/financial/taxes/add", { replace: true });
                status?.ResponseObject && setMsg(true);
                handleAddPage()
            }else{
                let status = await postDataAsync("Fin/Taxs", myData);
                status?.ResponseObject && setMsg(true)
                handleAddPage()
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
        }
    }


    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await getDataEditPage()
    }


    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            handleAddPage()
        }
    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة ضريبة</h3>
                    <Button type="primary" disabled={!myData?.TaxName || isLoading} onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
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