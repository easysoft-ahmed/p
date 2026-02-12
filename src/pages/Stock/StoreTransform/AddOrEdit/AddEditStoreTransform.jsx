import { useLocation, useParams } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_store_transform, init_state_store_transform, update_store_transform } from "./stateStoreTransform";
import { useEffect, useState } from "react";
import { unique } from "../../../../helpers";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { Button } from "antd";
import ButtonPrintReportPage from "../../../../components/PrintReport";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { getNextCodeStockTransform } from "../../../../services/StockTransform";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditStoreTransform = ()=>{
    let {id} = useParams();
    let [msg, setMsg] = useState("");
    let dispatch = useDispatch();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let {getDataAsync} = useGet();
    let [isLoading, setIsLoading] = useState(false)
    let myData = useSelector(state => state.store_transform.value);

    
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/TransForm?TransDoc=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_store_transform({...data.ResponseObject[0], TransFormItems: data.ResponseObject[0].TransFormItems?.map(item =>{ return {...item, fakeID: unique()}})}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units" ], getDataAsync);
            console.log(data?.stores?.filter(store => store.IsRealStock)[0]);
            
            dispatch(edit_store_transform({dataSelects: data, StoreId: data?.stores?.filter(store => store.IsRealStock)[0]?.StoreID || ""}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    let getNextCode = async()=>{
        const nextCode = await getNextCodeStockTransform();
        dispatch(update_store_transform({DocNo: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_store_transform());
        nextCode && await getNextCode()
        await callGetManyDataForSelectInput()
    }
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Stock/TransForm", myData);
                navigate("/stock/store_transform/add", { replace: true });
                status?.ResponseObject && dispatch(init_state_store_transform())
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Stock/TransForm", myData);
                handleAddPage()
                status?.ResponseObject && setMsg(true)
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
        
            <div className="w-full flex justify-between border-b pb-4 mb-4">
                <h3 className="text-lg font-bold">إضافة تحويل من مخزن</h3>
                <div className="flex gap-4">
                    <Button disabled={!myData?.StockItems?.length || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined/> : <SaveOutlined />}>حفظ</Button>
                    {id &&
                        <ButtonPrintReportPage WindowName={"TransFormInvoice"} DocId={id} />
                    }
                </div>
            </div>

            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditStoreTransform;