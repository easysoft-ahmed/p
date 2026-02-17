import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { getNextCodeCashIn } from "../../../../services/CashInApi";
import { edit_cash_in, init_cash_in, update_cash_in } from "./stateCashIn";
import { useDispatch, useSelector } from "react-redux";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";

const AddEditCashReceipt = ()=>{
    let {id} = useParams();
    let [isLoading, setIsLoading] = useState(false)
    let [msg, setMsg] = useState("");
    let myData = useSelector(state => state.cash_in.value);
    let dispatch = useDispatch();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let {getDataAsync} = useGet();
    const navigate = useNavigate();


    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Fin/CashIn?DocNo=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_cash_in(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }


    let getNextCode = async()=>{
        const nextCode = await getNextCodeCashIn();
        dispatch(update_cash_in({DocNo: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_cash_in());
        nextCode && await getNextCode()
    }

    
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Fin/CashIn", myData);
                navigate("/financial/cash_receipt/add", { replace: true });
                status?.ResponseObject && setMsg(true);
                handleAddPage()
            }else{
                let status = await postDataAsync("Fin/CashIn", myData);
                status?.ResponseObject && setMsg(true)
                handleAddPage()
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
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-between border-b pb-4 mb-4">
                <h3 className="text-lg font-bold">إضافة ايصال قبض</h3>
                <Button type="primary" disabled={!myData?.FinCashDets?.length || isLoading} onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
            </div>
            <div className="w-full">
                <Comp1 />
                <Comp2 />
            </div>

        </div>
    )
}

export default AddEditCashReceipt;