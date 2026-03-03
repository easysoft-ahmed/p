import { CloseOutlined, LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useDispatch, useSelector } from "react-redux";
import { edit_box, init_box } from "./stateBox";
import { getManyDataForSelectInput } from "../../../../api";
import dayjs from "dayjs";
import MessageRequest from "../../../../components/MessageRequest";
import { getNextCodeBox } from "../../../../services/BoxsApi";

const AddEditBoxs = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false)

    let myData = useSelector(state => state.box.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_box({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_box({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Fin/Boxs?BoxID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_box(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }
    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["currencies", "acc_codes"], getDataAsync)
            
            dispatch(edit_box({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    
    let getNextCode = async()=>{
        const nextCode = await getNextCodeBox();
        dispatch(edit_box({BoxId: nextCode}));
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_box())
        nextCode && await getNextCode();
        await callGetManyDataForSelectInput()

    }

    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Fin/boxs", myData);
                navigate("/financial/boxs/add", { replace: true });
                status?.ResponseObject && setMsg(true);
                handleAddPage()
            }else{
                let status = await postDataAsync("Fin/boxs", myData);
                status?.ResponseObject && setMsg(true)
                handleAddPage()
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
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
            handleAddPage()
        }

    }, [id])
    return(
        <>

            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة خزينة</h3>
                    <Button type="primary" disabled={!myData?.BoxName || isLoading} onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-full">
                        <label htmlFor="">كود الخزينة</label>
                        <input type="text" disabled value={myData?.BoxId || ""} onChange={e => changeValue(e.target.value, "BoxId")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">أسم الخزينة</label>
                        <input type="text" value={myData?.BoxName || ""} onChange={e => changeValue(e.target.value, "BoxName")} />
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="">التوجية المحاسبي</label>
                        <Select 
                            className="w-full" 
                            id="AccId" 
                            value={myData?.AccId || ""}
                            onChange={value => changeValue(value, "AccId")}
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                                {myData?.dataSelects?.acc_codes?.map(acc => 
                                    <Select.Option value={acc.AccID}>{acc.AccName}</Select.Option>    
                                )}
                        </Select>

                    </div>
                    <div className="input_label_basic w-6/12 pe-2">
                        <label htmlFor="">اسم العملة</label>
                        <Select
                            showSearch
                            placeholder="-- غير محدد --"
                            allowClear
                            value={myData?.CurrID || ""}
                            onChange={(value, opt) =>{
                                dispatch(edit_box({CurrID: opt.CurrID, CurrRate: opt.CurrRate}))
                            }}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.currencies?.map(curr =>{ return {...curr, label: curr.CurrName, value: curr.CurrID}})}
                        />
                    </div>

                    <div className="input_label_basic w-6/12 ps-2">
                        <label htmlFor="">معامل العملة</label>
                        <Input disabled value={myData?.CurrRate || ""} />
                    </div>

                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">تاريخ اول المده</label>
                        <DatePicker value={dayjs(myData?.FirstBalDate)} onChange={(date, dateStr) => changeValue(dateStr, "FirstBalDate")} />
                    </div>

                    <div className="input_label_basic w-4/12 px-2">
                        <label htmlFor="">رصيد اول المده</label>
                        <input type="text" value={myData?.FirstBal || ""} onChange={e => changeValue(e.target.value, "FirstBal")} />
                    </div>

                    <div className="input_label_basic w-4/12 flex self-end">
                        <Radio.Group
                            block
                            options={[{label: "مدين", value: 0},{label: "دائن", value: 1}]}
                            value={myData?.IsDebit ? 0 : 1}
                            optionType="button"
                            onChange={(e)=>dispatch(edit_box({IsDebit: e.target.value === 0 ? true:false, IsCredit:  e.target.value === 1 ? true:false}))}
                            buttonStyle="solid"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditBoxs;