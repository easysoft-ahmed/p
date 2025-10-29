import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../hooks/useGet";
import { useEffect, useState } from "react";
import { edit_purch_setting, init_purch_setting } from "./statePurchSetting";
import MessageRequest from "../../../components/MessageRequest";
import usePut from "../../../hooks/usePut";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select, Switch } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { getManyDataForSelectInput } from "../../../api";

const Settings = ()=>{
    let myData = useSelector(state => state.purch_setting.value);
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_purch_setting({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_purch_setting({[id]: value}))
        }
    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["suppliers"], getDataAsync)
            
            dispatch(edit_purch_setting({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }


    let handleGetData = async()=>{
        let data = await getDataAsync("Purch/Configuration");
        dispatch(edit_purch_setting(data.ResponseObject));
        await callGetManyDataForSelectInput()
    }

    let handleSubmit = async()=>{
        let status = await putDataAsync("Purch/Configuration", myData);
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
                    <h3 className="text-lg font-bold">التثبيت و الخصائص</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>
                
                {console.log(myData)
                }
                <Form initialValues={myData} className="flex flex-wrap justify-center gap-2 [&>*]:px-2">
                    <div className="w-full flex flex-wrap border-b pb-4 mb-4">
                        <label htmlFor="VendorId" className=" w-full">المورد الافتراضي</label>
                        <Select
                                id="VendorId"
                                showSearch
                                className="w-4/12 my-2"
                                placeholder="-- غير محدد --"
                                value={myData.VendorId}
                                onChange={(value, opt) => changeValue(value, "VendorId")}
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={myData?.dataSelects?.suppliers?.map(supp =>{ return {...supp, label: supp.VendorName, value: supp.VendorID}})}
                            />
                    </div>

                    <Form.Item className="w-3/12"  label="طباعة فاتورة المشتريات فوراً" layout="vertical" name={"IsPrintBillQ"}>
                        <Switch checked={myData?.IsPrintBillQ} onChange={(value) => changeValue(value, "IsPrintBillQ")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="ترصيد خصم على مستوى الصنف" layout="vertical" name={"IsDescInProd"}>
                        <Switch checked={myData?.IsDescInProd} onChange={(value) => changeValue(value, "IsDescInProd")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="تكرار الصنف في الحركة" layout="vertical" name={"IsRepeatProd"}>
                        <Switch checked={myData?.IsRepeatProd} onChange={(value) => changeValue(value, "IsRepeatProd")} />
                    </Form.Item>
                    <Form.Item className="w-3/12"  label="استخدام السعر صفر" layout="vertical" name={"IsUsePiceZero"}>
                        <Switch checked={myData?.IsUsePiceZero} onChange={(value) => changeValue(value, "IsUsePiceZero")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="استخدام اخر سعر للمورد كسعر صنف" layout="vertical" name={"IsUseLastVendorPrice"}>
                        <Switch checked={myData?.IsUseLastVendorPrice} onChange={(value) => changeValue(value, "IsUseLastVendorPrice")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="إقفال المسلسل في المشتريات" layout="vertical" name={"IsCloseSerial"}>
                        <Switch checked={myData?.IsCloseSerial} onChange={(value) => changeValue(value, "IsCloseSerial")} />
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}


export default Settings;