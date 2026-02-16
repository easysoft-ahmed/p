import { useLocation, useParams } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_store_movement, init_state_store_movement, update_store_movement } from "./stateStoreMovement";
import { getManyDataForSelectInput } from "../../../../api";
import useGet from "../../../../hooks/useGet";
import { unique } from "../../../../helpers";
import { Button } from "antd";
import ButtonPrintReportPage from "../../../../components/PrintReport";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import usePut from "../../../../hooks/usePut";
import usePost from "../../../../hooks/usePost";
import { getNextCodeStockTrans } from "../../../../services/StockTrans";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditStoreMovement = ()=>{
    let {id} = useParams();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let {getDataAsync} = useGet();
    let [isLoading, setIsLoading] = useState(false)
    let myData = useSelector(state => state.store_movement.value);
    let [msg, setMsg] = useState("");

    // let checkPageType = useLocation().pathname.indexOf("add") ? true:false;
    // let pageType = {add: checkPageType , edit: !checkPageType};
    let dispatch = useDispatch();
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Trans?TransDoc=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_store_movement({...data.ResponseObject[0], StockItems: data.ResponseObject[0].StockItems?.map(item =>{ return {...item, fakeID: unique()}})}))
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units", "acc_codes" ], getDataAsync);
            console.log(data);
            
            dispatch(edit_store_movement({dataSelects: data}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    let getNextCode = async()=>{
        const nextCode = await getNextCodeStockTrans();
        dispatch(update_store_movement({DocNo: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_store_movement());
        nextCode && await getNextCode()
        await callGetManyDataForSelectInput()
    }
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Stock/Trans", myData);
                navigate("/stock/stores_movement/add", { replace: true });
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Stock/Trans", myData);
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
                <h3 className="text-lg font-bold">إضافة حركة مخزن</h3>
                <div className="flex gap-4">
                    <Button disabled={!myData?.StockItems?.length || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined/> : <SaveOutlined />}>حفظ</Button>
                    {id &&
                        <ButtonPrintReportPage WindowName={"StockInvoice"} DocId={id} />
                    }
                </div>
            </div>
        
            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditStoreMovement;