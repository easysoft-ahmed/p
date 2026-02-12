import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MessageRequest from "../../../../components/MessageRequest";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { edit_supplier_type, init_supplier_type, update_supplier_type } from "./stateSupplierType";
import { getManyDataForSelectInput } from "../../../../api";

const AddEditSuppliersTypes = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    let [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    let myData = useSelector(state => state.supplier_type.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_supplier_type({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_supplier_type({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Purch/VendorTypes?VendorTypeID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_supplier_type(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    // let getNextCode = async()=>{
    //     const nextCode = await getNextCodeUnit();
    //     dispatch(update_unit({UnitID: nextCode}));
    // }

    
    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["suppliers_types"], getDataAsync)
            
            dispatch(edit_supplier_type({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_supplier_type());
        callGetManyDataForSelectInput()
        document.getElementById("VendorTypeName").focus();
        // nextCode && await getNextCode()
    }
    
    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Purch/VendorTypes", myData);
                navigate("/purch/suppliers_types/add", { replace: true });
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Purch/VendorTypes", myData);
                handleAddPage()
                status?.ResponseObject && setMsg(true)
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
            // dispatch(init_supplier_type())
            // callGetManyDataForSelectInput()
        }

    }, [id])

    return(
        <>
            <MessageRequest data={msg}/>

            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة نوع مورد</h3>
                    <Button type="primary" disabled={!myData?.VendorTypeName || isLoading} onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-6/12">
                    <div className="input_label_basic w-3/12">
                        <label htmlFor="VendorTypeID">كود نوع المورد</label>
                        <input type="text" id="VendorTypeID" disabled value={myData?.VendorTypeID || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="VendorTypeName">أسم نوع المورد</label>
                        <input type="text" id="VendorTypeName" value={myData?.VendorTypeName || ""} onChange={event => changeValue(event)}/>
                    </div>


                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="">نوع المورد الرئيسي</label>
                        <Select 
                            className="w-full" value={myData?.UpVendorTypeID || ""}
                            onChange={value => changeValue(value, "UpVendorTypeID")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            // options={[{label: "س", value: 0}].concat(myData?.dataSelects?.suppliers_types?.filter(ele => ele.VendorTypeID !== myData?.VendorTypeID)?.map(vend =>{ return {value: vend.VendorTypeID?.toString(), label: vend.VendorTypeName, ...vend}}))}
                        >
                            <Select.Option value={"0"}>جذر</Select.Option>
                            {myData?.dataSelects?.suppliers_types?.map(ele =>
                                ele?.VendorTypeID !== myData?.VendorTypeID &&
                                <Select.Option value={ele?.VendorTypeID}>{ele?.VendorTypeName}</Select.Option>
                            )}
                        </Select>
                    </div>



                </div>
            </div>
        </>
    )
}

export default AddEditSuppliersTypes;