import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { edit_ret_sales_invoice, init_state_ret_sales_invoice, update_ret_sales_invoice } from "./stateRetSalesInvoice";
import { getManyDataForSelectInput } from "../../../../api";
import MessageRequest from "../../../../components/MessageRequest";
import { Button } from "antd";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { unique } from "../../../../helpers";
import ButtonPrintReportPage from "../../../../components/PrintReport";
import { getNextCodeRetSalesInvoice } from "../../../../services/RetSalesInvoice";

const AddEditSalesInvoice = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false)

    let myData = useSelector(state => state.ret_sales_invoice.value);
    let dispatch = useDispatch();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sales?DocNumver=${id}`);
            if(data?.ResponseObject?.length){
                let updateSalesCashes = data?.ResponseObject[0]?.SalesCashes?.map(ele => {
                    return {...ele, fakeID: unique()}
                }) || [];
                let updateSalesInstallment = data?.ResponseObject[0]?.updateSalesInstallment?.map(ele => {
                    return {...ele, fakeID: unique()}
                }) || [];
                dispatch(edit_ret_sales_invoice({...data.ResponseObject[0],
                    SalesCashes: updateSalesCashes, SalesInstallment: updateSalesInstallment
                }))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "customers", "suppliers", "staff", "currencies", "cost_centers", "acc_codes", "products", "stores", "taxes" ], getDataAsync);            
            dispatch(edit_ret_sales_invoice({dataSelects: data , CurrID: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrID, CurrRate: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrRate}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    let getNextCode = async()=>{
        const nextCode = await getNextCodeRetSalesInvoice();
        dispatch(update_ret_sales_invoice({DocNo: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_ret_sales_invoice());
        nextCode && await getNextCode()
        await callGetManyDataForSelectInput()
    }


    
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Sales", myData);
                navigate("/sales/ret_sales_invoice/add", { replace: true });
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Sales/RetSales", myData);
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
                    <h3 className="text-lg font-bold">إضافة فاتورة مرتد مبيعات</h3>
                    <div className="flex gap-4">
                    <Button disabled={!myData?.SalesItems?.length || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined/> : <SaveOutlined />}>حفظ</Button>
                        {id &&
                            <ButtonPrintReportPage WindowName={"SalesInvoice"} DocId={id} />
                        }
                    </div>
                </div>
                <Comp1 />
                <Comp2 />
            </div>

        </>
    )
}

export default AddEditSalesInvoice;