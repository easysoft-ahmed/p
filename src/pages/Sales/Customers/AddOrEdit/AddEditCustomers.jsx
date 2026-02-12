import { Button, Tabs } from "antd";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import Comp3 from "./Components/Comp3";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../../hooks/useGet";
import MessageRequest from "../../../../components/MessageRequest";
import { edit_customer, init_state_customer, update_customer } from "./stateCustomer";
import { getManyDataForSelectInput } from "../../../../api";
import { getNextCodeCustomer } from "../../../../services/CustomersApi";

const AddEditCustomers = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    let [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    let myData = useSelector(state => state.customer.value);
    let dispatch = useDispatch();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sales/Customers?CustomerID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_customer({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "customers_types", "countries", "staff", "cost_centers", "acc_codes", "currencies" ], getDataAsync);            
            dispatch(edit_customer({dataSelects: data , CurrID: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrID, CurrRate: data?.currencies?.filter(e => e.IsDefualte)[0]?.CurrRate}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    let getNextCode = async()=>{
        const nextCode = await getNextCodeCustomer();
        dispatch(update_customer({CustomerID: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_customer());
        nextCode && await getNextCode();
        await callGetManyDataForSelectInput()
        document.getElementById("CustomerName")?.focus();
    }

    
    let handleSubmit = async()=>{
        setMsg(false);
        setIsLoading(true);
        try {
            if(id){
                let status = await putDataAsync("Sales/Customers", myData);
                navigate("/sales/customers/add", { replace: true });
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Sales/Customers", myData);
                status?.ResponseObject && setMsg(true);
                handleAddPage();
            }
            setIsLoading(false);
        } finally {
            setIsLoading(false);
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
                    <h3 className="text-lg font-bold">إضافة عميل</h3>
                    <Button disabled={!myData?.CustomerName || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
                </div>

                <Tabs
                className="w-full"
                    type="card"
                    items={[
                        {label: "بيانات اساسية", key: "1", children: <Comp1 />},
                        {label: "جهات الاتصال", key: "2", children: <Comp2 />},
                        {label: "بيانات رسمية", key: "3", children: <Comp3 />},
                    ]}
                />
            </div>
        </>
    )
}

export default AddEditCustomers;