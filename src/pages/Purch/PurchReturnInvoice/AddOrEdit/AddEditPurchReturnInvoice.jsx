import { Button } from "antd";
import MessageRequest from "../../../../components/MessageRequest";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unique } from "../../../../helpers";
import { edit_return_purch_invoice, init_state_return_purch_invoice, update_return_purch_invoice } from "./stateReturnPurchInvoice";
import { getManyDataForSelectInput } from "../../../../api";
import { getNextCodeRetPurchInvoice } from "../../../../services/RetPurchInvoice";

const AddEditReturnPurchReturnInvoice = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false)

    let myData = useSelector(state => state.return_purch_invoice.value);
    let dispatch = useDispatch();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Purch/RetPurch?DocNumver=${id}`);
            if(data?.ResponseObject?.length){
                let updatePurchCashes = data?.ResponseObject[0]?.PurchCashes?.map(ele => {
                    return {...ele, fakeID: unique()}
                }) || [];
                dispatch(edit_return_purch_invoice({...data.ResponseObject[0],
                    PurchCashes: updatePurchCashes
                }))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "customers", "suppliers", "staff", "currencies", "cost_centers", "acc_codes", "products", "stores", "taxes" ], getDataAsync);            
            dispatch(edit_return_purch_invoice({dataSelects: data , CurrID: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrID, CurrRate: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrRate}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    let getNextCode = async()=>{
        const nextCode = await getNextCodeRetPurchInvoice();
        dispatch(update_return_purch_invoice({DocNo: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_return_purch_invoice());
        nextCode && await getNextCode()
        await callGetManyDataForSelectInput()
    }

    
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Purch/RetPurch", myData);
                navigate("/purch/purch_return_invoice/add", { replace: true });
                status?.ResponseObject && setMsg(true);
                handleAddPage()
            }else{
                let status = await postDataAsync("Purch/RetPurch", myData);
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
                    <h3 className="text-lg font-bold">إضافة فاتورة مرتد مشتريات</h3>
                    <Button disabled={!myData?.PurchItems?.length || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined/> : <SaveOutlined />}>حفظ</Button>
                </div>
                <Comp1 />
                <Comp2 />
            </div>
        </>
    )
}

export default AddEditReturnPurchReturnInvoice;