import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../hooks/useGet";
import { useEffect, useState } from "react";
import { edit_company_data, init_company_data } from "./stateCompanyData";
import MessageRequest from "../../../components/MessageRequest";
import usePut from "../../../hooks/usePut";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Select, Switch } from "antd";
import { SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { getManyDataForSelectInput } from "../../../api";
import dayjs from "dayjs";
import usePost from "../../../hooks/usePost";

const CompanyData = ()=>{
    let myData = useSelector(state => state.company_data.value);
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let [msg, setMsg] = useState("");
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_company_data({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_company_data({[id]: value}))
        }
    }


    let handleGetData = async()=>{
        let data = await getDataAsync("Sys/Company");
        dispatch(edit_company_data(data.ResponseObject ? data.ResponseObject[0] : {}));
    }


    let [files, setFiles] = useState({
        file1: "",
    })
    let handleChangeImage = (file_type, file)=>{
        let img = URL.createObjectURL(document.getElementById(file.id).files[0])
        setFiles(fs =>{return {...fs, [file_type]: img}})
    }

    let handleSubmit = async()=>{
        setMsg(false)
        let status = await postDataAsync("Sys/Company", myData);
        status?.ResponseObject && setMsg(true)
    }

    useEffect(()=>{
        handleGetData();
    }, [])
    return(
        <>
            <MessageRequest data={msg}/>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">بيانات الشركة</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>
                
                <Form className="flex flex-wrap justify-center gap-2 [&>*]:px-2">
                    <div className="w-full flex flex-wrap justify-around border-b pb-4 mb-4">
                        <div className="flex w-full justify-center mb-5">
                            <div className="min-w-80 flex flex-wrap justify-center items-center border rounded-md gap-2 h-[300px] max-h-[350px] content-between p-3">
                                <img src={files.file1 ? files.file1 : myData.ImagePath1} className="w-full rounded-md max-h-[200px] max-w-[200px]" alt="" srcset="" />
                                <label htmlFor="upload1" className="grow border w-full rounded-md p-1 text-center cursor-pointer [&:hover]:border-blue-400 [&:hover]:text-blue-600"> <UploadOutlined /> اختر شعار الشركة</label>
                                <input type="file" className="!hidden" id="upload1" onChange={(e)=>handleChangeImage("file1", e.target)}/>
                            </div>
                        </div>
                        
                        <div className="w-4/12 px-2">
                            <label htmlFor="CompName" className=" w-full">اسم الشركة</label>
                            <Input className="w-full my-2" value={myData?.CompName} onChange={(event) => changeValue(event.target.value, "CompName")} />
                        </div>
                        <div className="w-4/12 px-2">
                            <label htmlFor="Addrss" className=" w-full">العنوان</label>
                            <Input className="w-full my-2" value={myData?.Addrss} onChange={(event) => changeValue(event.target.value, "Addrss")} />
                        </div>
                        <div className="w-4/12 px-2">
                            <label htmlFor="Email" className=" w-full">البريد الالكتروني</label>
                            <Input className="w-full my-2" value={myData?.Email} onChange={(event) => changeValue(event.target.value, "Email")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="RegNumber" className=" w-full">السجل التجاري</label>
                            <Input className="w-full my-2" value={myData?.RegNumber} onChange={(event) => changeValue(event.target.value, "RegNumber")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="TaxCard" className=" w-full">البطاقة الضريبية</label>
                            <Input className="w-full my-2" value={myData?.TaxCard} onChange={(event) => changeValue(event.target.value, "TaxCard")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="RegTax" className=" w-full">السجل الضريبي</label>
                            <Input className="w-full my-2" value={myData?.RegTax} onChange={(event) => changeValue(event.target.value, "RegTax")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="Fax" className=" w-full">الفاكس</label>
                            <Input className="w-full my-2" value={myData?.Fax} onChange={(event) => changeValue(event.target.value, "Fax")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="Phone" className=" w-full">التليفون</label>
                            <Input className="w-full my-2" value={myData?.Phone} onChange={(event) => changeValue(event.target.value, "Phone")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="Mobile" className=" w-full">الموبايل</label>
                            <Input className="w-full my-2" value={myData?.Mobile} onChange={(event) => changeValue(event.target.value, "Mobile")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="FirstDate" className=" w-full">بداية الفترة</label>
                            <DatePicker className="w-full my-2" value={dayjs(myData?.FirstDate)} onChange={(date, dateStr) => changeValue(dateStr, "FirstDate")} />
                        </div>
                        <div className="w-3/12 px-2">
                            <label htmlFor="LastDate" className=" w-full">نهاية الفترة</label>
                            <DatePicker className="w-full my-2" value={dayjs(myData?.LastDate)} onChange={(date, dateStr) => changeValue(dateStr, "LastDate")} />
                        </div>
                    </div>

                </Form>
            </div>
        </>
    )
}


export default CompanyData;