import { SaveOutlined } from "@ant-design/icons";
import { Button, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { edit_delegates_and_staff, init_delegates_and_staff } from "./stateDelegatesAndStaff";

const AddEditDelegatesAndStaff = ()=>{
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    
    let myData = useSelector(state => state.delegates_and_staff.value);

    let {id} = useParams();
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();
    let changeValue = (eventOrValue, prop)=>{
        
        if(prop){
            dispatch(edit_delegates_and_staff({[prop]: eventOrValue}))
        }else{
            let {id, value} = eventOrValue.target;
            dispatch(edit_delegates_and_staff({[id]: value}))
        }
    }

    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sales/Sellers?SellerID=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_delegates_and_staff({...data.ResponseObject[0]}))
            }
        } catch (error) {
            console.log(error);
        }

    }



    let handleSubmit = async()=>{
        setMsg(false)
        console.log(myData);
        
        if(id){
            let status = await putDataAsync("Purch/Vendors", myData);
            navigate("/purch/suppliers/add", { replace: true });
            status?.ResponseObject && dispatch(init_delegates_and_staff())
            status?.ResponseObject && setMsg(true);
        }else{
            let status = await postDataAsync("Purch/Vendors", myData);
            status?.ResponseObject && dispatch(init_delegates_and_staff());
            status?.ResponseObject && setMsg(true)
        }

    }



    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(init_delegates_and_staff())
        }

    }, [id])

    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة مندوب</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-5/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="SellerId">كود المندوب</label>
                        <input type="text" id="SellerId" disabled value={myData?.SellerId || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="SellerName">أسم المندوب</label>
                        <input type="text" id="SellerName" value={myData?.SellerName || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic w-full">
                        <label htmlFor="Address">العنوان</label>
                        <input type="text" id="Address" value={myData?.Address || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="Phone">الهاتف</label>
                        <input type="text" id="Phone" value={myData?.Phone || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="Mobile">الموبيل</label>
                        <input type="text" id="Mobile" value={myData?.Mobile || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-4/12">
                        <label htmlFor="NationalID">الرقم القومي</label>
                        <input type="text" id="NationalID" value={myData?.NationalID || ""} onChange={event => changeValue(event)}/>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="Sex">الجنس</label>
                        <Select className="w-full" id="Sex" value={myData?.Sex || ""} onChange={value => changeValue(value, "Sex")}>
                            <Select.Option value={0}>ذكر</Select.Option>
                            <Select.Option value={1}>انثى</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="Religon">الديانة</label>
                        <Select className="w-full" id="Religon" value={myData?.Religon || ""} onChange={value => changeValue(value, "Religon")} >
                            <Select.Option value={0}>مسلم</Select.Option>
                            <Select.Option value={1}>مسيحي</Select.Option>
                            <Select.Option value={2}>يهودي</Select.Option>
                            <Select.Option value={3}>أخرى</Select.Option>
                        </Select>
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="MonthlySalary">الراتب الشهري</label>
                        <input type="text" id="MonthlySalary" value={myData?.MonthlySalary || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="input_label_basic ps-2 w-3/12">
                        <label htmlFor="DelySalary">أجر اليوم</label>
                        <input type="text" id="DelySalary" value={myData?.DelySalary || ""} onChange={event => changeValue(event)} />
                    </div>
                    <div className="w-full flex flex-wrap justify-between [&_button]:w-auto border-y my-4 py-4">

                        <div className="input_label_basic">
                            <label htmlFor="delegate_sales">مبيعات</label>
                            <Switch id="delegate_sales" value={myData?.IsSales || ""} onChange={value => changeValue(value, "IsSales")} />
                        </div>
                        
                        <div className="input_label_basic">
                            <label htmlFor="delegate_purchases">مشتريات</label>
                            <Switch id="delegate_purchases" value={myData?.IsPurch || ""} onChange={value => changeValue(value, "IsPurch")} />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_collect">تحصيل</label>
                            <Switch id="delegate_collect" value={myData?.IsFin || ""} onChange={value => changeValue(value, "IsFin")} />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_support">دعم فني</label>
                            <Switch id="delegate_support" value={myData?.IsSupport || ""} onChange={value => changeValue(value, "IsSupport")} />
                        </div>

                        <div className="input_label_basic">
                            <label htmlFor="delegate_telesales">تيلي سيلز</label>
                            <Switch id="delegate_telesales" value={myData?.IsTeleSales || ""} onChange={value => changeValue(value, "IsTeleSales")} />
                        </div>
                    </div>

                    <div className="input_label_basic w-full">
                        <label htmlFor="Notes">ملاحظات</label>
                        <TextArea id="Notes" value={myData?.Notes || ""} onChange={event => changeValue(event)} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditDelegatesAndStaff;