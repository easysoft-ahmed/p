import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_acc_code, init_acc_code } from "./stateAccountCode";
import { getManyDataForSelectInput } from "../../../../api";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditAccountCodes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.customer.value);
    let dispatch = useDispatch();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Acc/Accs?AccId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_acc_code({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "acc_codes"], getDataAsync);            
            dispatch(edit_acc_code({dataSelects: data}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    
    
    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Acc/Accs", myData);
            navigate("/accounts/accounts_codes/add", { replace: true });
            status?.ResponseObject && dispatch(init_acc_code())
            status?.ResponseObject && setMsg(true);
        }else{
            let status = await postDataAsync("Acc/Accs", myData);
            status?.ResponseObject && dispatch(init_acc_code());
            status?.ResponseObject && setMsg(true)
        }
        
    }
    
    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_acc_code())
            callGetManyDataForSelectInput()
        }

    }, [id])


    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex justify-between border-b pb-4 mb-4">
                <h3 className="text-lg font-bold">إضافة كود حساب</h3>
                <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
            </div>

            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditAccountCodes;