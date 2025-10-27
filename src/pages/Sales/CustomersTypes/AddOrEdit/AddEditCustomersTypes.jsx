import { SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MessageRequest from "../../../../components/MessageRequest";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_customer_type, init_customer_type } from "./stateCustomersTypes";

const AddEditCustomersTypes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.customer_type.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_customer_type({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_customer_type({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sales/CustomerTypes?CustTypeID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_customer_type(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }
    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["customers_types"], getDataAsync)
            
            dispatch(edit_customer_type({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Sales/CustomerTypes", myData);
            navigate("/sales/customers_types/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(init_customer_type())
        }else{
            let status = await postDataAsync("Sales/CustomerTypes", myData);
            status?.ResponseObject && dispatch(init_customer_type());
            status?.ResponseObject && setMsg(true)
        }

    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }


    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_customer_type())
            callGetManyDataForSelectInput()
        }

    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة نوع العميل</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-6/12">
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="CustTypeID">كود نوع العميل</label>
                        <input type="text" id="CustTypeID" disabled value={myData?.CustTypeID || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="CustTypeName">أسم نوع العميل</label>
                        <input type="text" id="CustTypeName" value={myData?.CustTypeName || ""} onChange={event => changeValue(event)}/>
                    </div>


                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">نوع العميل الرئيسي</label>
                        <Select 
                            className="w-full" 
                            value={myData?.UpCustTypeID?.toString() || ""} 
                            onChange={value => changeValue(value, "UpCustTypeID")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.customers_types?.filter(ele => ele.CustTypeID !== myData?.CustTypeID)?.map(cust =>{ return {value: cust.CustTypeID?.toString(), label: cust.CustTypeName, ...cust}}).concat({value: "0", label: "نوع جذر"})}
                        />
                    </div>



                </div>
            </div>
        </>
    )
}

export default AddEditCustomersTypes;