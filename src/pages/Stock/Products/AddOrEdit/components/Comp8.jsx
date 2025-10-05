import { InboxOutlined, LoadingOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Radio, Upload } from "antd"
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_product } from "../stateProduct";

const Comp8 = ()=>{
    let myData = useSelector(state => state.product.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_product({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_product({[id]: value}))
        }
    }

    let [files, setFiles] = useState({
        file1: "", file2: "", file3: "", file4: "",
    })
    let handleChangeImage = (file_type, file)=>{
        let img = URL.createObjectURL(document.getElementById(file.id).files[0])
        setFiles(fs =>{return {...fs, [file_type]: img}})
    }
    return(
        <>
        <div className="flex flex-wrap">
            <div className="w-full sm:w-6/12 lg:w-3/12 p-2">
                <div className="flex flex-wrap border rounded-md gap-2 h-[250px] content-between p-3">
                    <img src={files.file1 ? files.file1 : myData.ImagePath1} className="w-full rounded-md" alt="" srcset="" />
                    <label htmlFor="upload1" className="grow border rounded-md p-1 text-center cursor-pointer [&:hover]:border-blue-400 [&:hover]:text-blue-600"> <UploadOutlined /> Upload</label>
                    <input type="file" className="hidden" id="upload1" onChange={(e)=>handleChangeImage("file1", e.target)}/>
                    <input type="radio" onChange={(e)=>changeValue(1, "PrimeImage")} checked={myData?.PrimeImage === 1 ? true:false} value="4" name="isMain" class="w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                </div>
            </div>
            <div className="w-full sm:w-6/12 lg:w-3/12 p-2">
                <div className="flex flex-wrap  border rounded-md gap-2 h-[250px] content-between p-3">
                    <img src={files.file2 ? files.file2 : myData.ImagePath2} className="w-full rounded-md" alt="" srcset="" />
                    <label htmlFor="upload2" className="grow border rounded-md p-1 text-center cursor-pointer [&:hover]:border-blue-400 [&:hover]:text-blue-600"> <UploadOutlined /> Upload</label>
                    <input type="file" className="hidden" id="upload2" onChange={(e)=>handleChangeImage("file2", e.target)}/>
                    <input type="radio" onChange={(e)=>changeValue(2, "PrimeImage")} checked={myData?.PrimeImage === 2 ? true:false} value="4" name="isMain" class="w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                </div>
            </div>
            <div className="w-full sm:w-6/12 lg:w-3/12 p-2">
                <div className="flex flex-wrap border rounded-md gap-2 h-[250px] content-between p-3">
                    <img src={files.file3 ? files.file3 : myData.ImagePath3} className="w-full rounded-md" alt="" srcset="" />
                    <label htmlFor="upload3" className="grow border rounded-md p-1 text-center cursor-pointer [&:hover]:border-blue-400 [&:hover]:text-blue-600"> <UploadOutlined /> Upload</label>
                    <input type="file" className="hidden" id="upload3" onChange={(e)=>handleChangeImage("file3", e.target)}/>
                    <input type="radio" onChange={(e)=>changeValue(3, "PrimeImage")} checked={myData?.PrimeImage === 3 ? true:false} value="4" name="isMain" class="w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                </div>
            </div>
            <div className="w-full sm:w-6/12 lg:w-3/12 p-2">
                <div className="flex flex-wrap border rounded-md gap-2 h-[250px] content-between p-3">
                    <img src={files.file4 ? files.file4 : myData.ImagePath4} className="w-full rounded-md" alt="" srcset="" />
                    <label htmlFor="upload4" className="grow border rounded-md p-1 text-center cursor-pointer [&:hover]:border-blue-400 [&:hover]:text-blue-600"> <UploadOutlined /> Upload</label>
                    <input type="file" className="hidden" id="upload4" onChange={(e)=>handleChangeImage("file4", e.target)}/>
                    <input type="radio" onChange={(e)=>changeValue(4, "PrimeImage")} checked={myData?.PrimeImage === 4 ? true:false} name="isMain" class="w-4 text-blue-600 bg-gray-100 border-gray-300 " />
                </div>
            </div>
        </div>

        </>
    )
}

export default Comp8;