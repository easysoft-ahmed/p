import { SaveOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { edit_size, initial_state_size, update_size } from "./stateSize";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditSizes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();

    let myData = useSelector(state => state.size.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        let {id, value} = eventOrValue.target;
        dispatch(edit_size(prop ? {[prop]: eventOrValue} : {[id]: value}))
    }
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Meagures?MeagureID=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_size(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Stock/Meagures", myData);
            navigate("/stock/sizes/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            status?.ResponseObject && dispatch(initial_state_size())
        }else{
            let status = await postDataAsync("Stock/Meagures", myData);
            status?.ResponseObject && dispatch(initial_state_size());
            status?.ResponseObject && setMsg(true)
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(update_size({}))
        }
    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مقاس</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="MeagureID">كود المقاس</label>
                        <Input type="text" disabled id="MeagureID" value={myData?.MeagureID || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="MeagureName">أسم المقاس</label>
                        <input type="text" id="MeagureName" value={myData?.MeagureName || ""} onChange={event => changeValue(event)} />
                    </div>
                    {/* <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">المجموعة</label>
                        <Select
                            className="w-full"
                            showSearch
                            allowClear id="" value={myData} onChange={value => changeValue(value , "")}
                            defaultValue={0}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default AddEditSizes;