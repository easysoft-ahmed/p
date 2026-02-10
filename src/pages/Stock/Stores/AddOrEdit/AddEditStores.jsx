import { SaveOutlined } from "@ant-design/icons";
import { Button, message, Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_stock, initial_state_stores, update_stock } from "./stateStock";
import useGet from "../../../../hooks/useGet";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getManyDataForSelectInput } from "../../../../api";
import MessageRequest from "../../../../components/MessageRequest";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import ButtonPrintReportPage from "../../../../components/PrintReport";
import { getAllStores, postNewStore, putStore } from "../../../../services/StoresApi";

const AddEditStores = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    const [messageApi, statusRequestMessage] = message.useMessage();


    const navigate = useNavigate();

    let [isAllStores, setIsAllStores] = useState([])
    let myData = useSelector(state => state.stock.value);
    let dispatch = useDispatch();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_stock({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_stock({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        let allStores = await getAllStores();
        setIsAllStores(allStores)
        if(allStores){
            let searchInStoresById = allStores.filter(store => store?.StoreID === id)[0];
            dispatch(update_stock(searchInStoresById))            
        }else{
            console.log("خطاء في جلب المخزن");

        }
    }

    let handleAddPage = async()=>{
        let allStores = await getAllStores();
        setIsAllStores(allStores)
        dispatch(initial_state_stores())
    }


    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["cost_centers","acc_codes","staff"], getDataAsync)
            dispatch(edit_stock({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    let handleSubmit = async()=>{        
        if(id){
            let checkNameStoreFirst = isAllStores.filter(store => store?.StoreName === myData?.StoreName && store?.StoreID !== id);
            if(checkNameStoreFirst.length){
                messageApi.error("هذا الاسم مسجل مسبقا !")
            }else{
                let status = await putStore(myData);
                if(status === true){
                    navigate("/stock/stores/add", { replace: true });
                    messageApi.success("تم تعديل المخزن بنجاح !")
                    dispatch(initial_state_stores());
                }
            }

        }else{
            let checkNameStoreFirst = isAllStores.filter(store => store?.StoreName === myData?.StoreName);            
            if(checkNameStoreFirst.length){
                messageApi.error("هذا الاسم مسجل مسبقا !")
            }else{
                let status = await postNewStore(myData);
                if(status === true){
                    // dispatch(initial_state_stores());
                    await handleAddPage()
                    messageApi.success("تم اضافة المخزن بنجاح !")
                }
            }
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            handleAddPage()
        }
        callGetManyDataForSelectInput()

    }, [id])

    return(
        <>
            {/* <MessageRequest data={msg} errorMsg={isErrMsg}/> */}
            {statusRequestMessage}
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مخزن</h3>
                    <div className="flex gap-4">
                        <Button type="primary" disabled={!myData?.StoreName || !myData?.SellerID} onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                    </div>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="StoreID">كود المخزن</label>
                        <input type="text" id="StoreID" disabled value={myData?.StoreID || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="StoreName" className="label_required">أسم المخزن</label>
                        <input type="text" id="StoreName" value={myData?.StoreName || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="IsStoped">وقف التعامل</label>
                        <Switch className="!w-auto" id="IsStoped" value={myData?.IsStoped || ""} onChange={value => changeValue(value, "IsStoped")}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="IsRealStock">Real Stock</label>
                        <Switch className="!w-auto" id="IsRealStock" value={myData?.IsRealStock || ""} onChange={value => changeValue(value, "IsRealStock")}/>
                    </div>
                    
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="Address">العنوان</label>
                        <input type="text" id="Address" value={myData?.Address || ""} onChange={event => changeValue(event)}/>
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="SellerID" className="label_required">مسؤول المخزن</label>
                        <Select
                            className="w-full"
                            allowClear value={myData?.SellerID || ""} onChange={value => changeValue(value, "SellerID")}
                            id="SellerID"
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.staff?.map(staf =>{ return {value: staf.SellerID, label: staf.SellerName, ...staf}})}
                        />
                    </div>

                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Phone">تليفون</label>
                        <input type="text" id="Phone" value={myData?.Phone || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-6/12">
                        <label htmlFor="Mobile">موبايل</label>
                        <input type="text" id="Mobile" value={myData?.Mobile || ""} onChange={event => changeValue(event)}/>
                    </div>

                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="AccId">التوجية المحاسبي</label>
                        <Select 
                            className="w-full" 
                            id="AccId" 
                            value={myData?.AccId || ""}
                            onChange={value => changeValue(value, "AccId")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.acc_codes?.map(acc =>{ return {value: acc.AccID, label: acc.AccName, ...acc}})}
                        />
                    </div>
                    
                    <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">مركز التكلفة</label>
                        <Select 
                            className="w-full" 
                            id="CostId" 
                            value={myData?.CostId} 
                            onChange={value => changeValue(value, "CostId")}
                            showSearch filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={myData?.dataSelects?.cost_centers?.map(center =>{ return {value: center.CostID, label: center.CostName, ...center}})}
                        />

                        {/* <Select
                            className="w-full"
                            showSearch
                            allowClear
                            defaultValue={0} id=""
                        >
                            <Select.Option value={0}>-- غير محدد --</Select.Option>    
                        </Select> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEditStores;