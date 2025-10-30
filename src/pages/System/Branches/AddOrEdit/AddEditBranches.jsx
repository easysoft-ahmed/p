import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_branch, init_branch } from "./stateBranches";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditBranch = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.branch.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_branch({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_branch({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sys/Branches?BranchId=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_branch({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await getDataEditPage()
    }

    
    
    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Sys/Branches", myData);
            navigate("/system/branches/add", { replace: true });
            status?.ResponseObject && dispatch(init_branch())
            status?.ResponseObject && setMsg(true);
        }else{
            let status = await postDataAsync("Sys/Branches", myData);
            status?.ResponseObject && dispatch(init_branch());
            status?.ResponseObject && setMsg(true)
        }
        
    }
    
    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_branch())
        }

    }, [id])


    return(
        <>
            <MessageRequest data={msg}/>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">{id ? "تعديل" : "إضافة"} فرع</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>
                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="BranchID">كود الفرع</label>
                        <Input type="text" id="BranchID" disabled onChange={event => changeValue(event)} value={myData?.BranchID || ""}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="BranchName">أسم الفرع</label>
                        <input type="text" id="BranchName" onChange={event => changeValue(event)} value={myData?.BranchName || ""}/>
                    </div>
                </div>
            </div>
        </>
    )  
}

export default AddEditBranch;