import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../hooks/useGet";
import { useEffect, useState } from "react";
import { edit_stock_setting, init_stock_setting } from "./stateStockSetting";
import MessageRequest from "../../../components/MessageRequest";
import usePut from "../../../hooks/usePut";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Select, Switch } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { getManyDataForSelectInput } from "../../../api";

const Settings = ()=>{
    let myData = useSelector(state => state.stock_setting.value);
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_stock_setting({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_stock_setting({[id]: value}))
        }
    }


    let handleGetData = async()=>{
        let data = await getDataAsync("Stock/Configuration");
        dispatch(edit_stock_setting(data.ResponseObject));
    }

    let handleSubmit = async()=>{
        setMsg(false)
        let status = await putDataAsync("Stock/Configuration", myData);
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
                
                <Form className="flex flex-wrap justify-center gap-2 [&>*]:px-2">
                    <div className="w-full flex flex-wrap justify-around border-b pb-4 mb-4">
                        <div className="w-4/12">
                            <label htmlFor="StoreCost" className=" w-full">تسعير المخزون</label>
                            <Select id="StoreCost" showSearch className="w-full my-2" value={myData?.StoreCost || ""}
                                onChange={(value, opt) => changeValue(value, "StoreCost")}
                            >
                                <Select.Option value={0}>المتوسط المرجح</Select.Option>
                                <Select.Option value={1}>أخر سعر شراء</Select.Option>
                                <Select.Option value={2}>الوارد اولا يصرف اولا</Select.Option>
                                <Select.Option value={3}>الوارد اولا يصرف اخيرا</Select.Option>
                            </Select>
                        </div>
                        <div className="w-4/12">
                            <label htmlFor="StoreTrans" className=" w-full">السحب على المكشوف</label>
                            <Select id="StoreTrans" showSearch className="w-full my-2" value={myData?.StoreTrans || ""}
                                onChange={(value, opt) => changeValue(value, "StoreTrans")}
                            >
                                <Select.Option value={0}>السماح باجراء الحركة</Select.Option>
                                <Select.Option value={1}>تحذير مع السماح باجراء الحركة</Select.Option>
                                <Select.Option value={2}>منع الحركة نهائيا</Select.Option>
                            </Select>
                        </div>
                        <div className="w-3/12">
                            <label htmlFor="StoreTrans" className=" w-full">معدل دوران المخزن</label>
                            <Input className="w-full my-2" value={myData?.StockCycel} onChange={(event) => changeValue(event.target.value, "StockCycel")} />
                        </div>

                    </div>

                    <Form.Item className="w-3/12"  label="استخدام التكويد على مستوى الصنف" layout="vertical" name={"IsUseAutoCategoryId"}>
                        <Switch checked={myData?.IsUseAutoCategoryId} onChange={(value) => changeValue(value, "IsUseAutoCategoryId")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="استخدام الكمية فقط" layout="vertical" name={"IsQtyOnly"}>
                        <Switch checked={myData?.IsQtyOnly} onChange={(value) => changeValue(value, "IsQtyOnly")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="تكرار الصنف في الحركة" layout="vertical" name={"IsRepeatProd"}>
                        <Switch checked={myData?.IsRepeatProd} onChange={(value) => changeValue(value, "IsRepeatProd")} />
                    </Form.Item>
                    <Form.Item className="w-3/12"  label="استخدام السعر صفر" layout="vertical" name={"IsUsePiceZero"}>
                        <Switch checked={myData?.IsUsePiceZero} onChange={(value) => changeValue(value, "IsUsePiceZero")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="استخدام المخزن على مستوى الصنف" layout="vertical" name={"IsUseStoreInDet"}>
                        <Switch checked={myData?.IsUseStoreInDet} onChange={(value) => changeValue(value, "IsUseStoreInDet")} />
                    </Form.Item>
                    <Form.Item className="w-3/12" label="استخدام تواريخ صلاحية" layout="vertical" name={"IsUseExpDate"}>
                        <Switch checked={myData?.IsUseExpDate} onChange={(value) => changeValue(value, "IsUseExpDate")} />
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}


export default Settings;