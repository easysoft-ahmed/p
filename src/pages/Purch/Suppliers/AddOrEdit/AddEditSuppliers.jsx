import { Button, Tabs } from "antd";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { LoadingOutlined, SaveOutlined } from "@ant-design/icons";
import Comp3 from "./Components/Comp3";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_supplier, init_state_supplier } from "./stateSupplier";
import { useEffect, useState } from "react";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";

const AddEditSuppliers = ()=>{
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let [isLoading, setIsLoading] = useState(false)

    let myData = useSelector(state => state.supplier.value);

    let {id} = useParams();
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Purch/Vendors?VendorID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_supplier({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "currencies" , "staff", "acc_codes", "suppliers_types" ], getDataAsync);
            
            dispatch(edit_supplier({dataSelects: data}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    // let getNextCode = async()=>{
    //     const nextCode = await getNextCodeUnit();
    //     dispatch(update_unit({UnitID: nextCode}));
    // }

    let handleAddPage = async(nextCode = true)=>{
        dispatch(init_state_supplier());
        await callGetManyDataForSelectInput()
        document.getElementById("VendorName")?.focus();
        // nextCode && await getNextCode()
    }

    let handleSubmit = async()=>{
        setMsg(false)
        setIsLoading(true)
        try {
            if(id){
                let status = await putDataAsync("Purch/Vendors", myData);
                navigate("/purch/suppliers/add", { replace: true });
                status?.ResponseObject && setMsg(true);
            }else{
                let status = await postDataAsync("Purch/Vendors", myData);
                handleAddPage();
                status?.ResponseObject && setMsg(true)
            }
            setIsLoading(false)
        } finally {
            setIsLoading(false)
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
                    <h3 className="text-lg font-bold">إضافة مورد</h3>
                    <Button disabled={!myData?.VendorName || isLoading} type="primary" onClick={handleSubmit} icon={isLoading ? <LoadingOutlined /> : <SaveOutlined />}>حفظ</Button>
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

export default AddEditSuppliers;