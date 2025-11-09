import { Button, Tabs } from "antd";
import Comp1 from "./Components/Comp1";
import { SaveOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_user, init_state_user } from "./stateUser";
import { useEffect, useState } from "react";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditUser = ()=>{
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    
    let myData = useSelector(state => state.user.value);

    let {id} = useParams();
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Identity/Users?UserId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_user({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "stores" , "boxes", "staff", "customers" ], getDataAsync);
            
            dispatch(edit_user({dataSelects: data}))
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
        console.log(myData);
        
        if(id){
            let status = await putDataAsync("Identity/Users", myData);
            navigate("/system/users/add", { replace: true });
            status?.ResponseObject && dispatch(init_state_user())
            status?.ResponseObject && setMsg(true);
        }else{
            let status = await postDataAsync("Identity/Users", myData);
            status?.ResponseObject && dispatch(init_state_user());
            status?.ResponseObject && setMsg(true)
        }

    }



    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_state_user())
            callGetManyDataForSelectInput()
        }

    }, [id])


    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مستخدم</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <Tabs
                    className="w-full"
                    type="card"
                    items={[
                        {label: "بيانات اساسية", key: "1", children: <Comp1 />},
                        // {label: "صلاحيات اضافية", key: "2", children: <Comp2 />},
                    ]}
                />
            </div>
        </>
    )
}

export default AddEditUser;