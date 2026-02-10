import { SaveOutlined } from "@ant-design/icons";
import { Button, Input, message, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { useDispatch, useSelector } from "react-redux";
import { edit_country_of_origin, initial_state_country_of_origin, update_country_of_origin } from "./stateCountryOfOrigin";
import { useEffect, useState } from "react";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";
import { getAllCountries, postNewCountry, putCountry } from "../../../../services/CountriesApi";

const AddEditCountryOfOrigin = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    const navigate = useNavigate();
    const [messageApi, statusRequestMessage] = message.useMessage();

    let [isAllCountries, setIsAllCountries] = useState([])

    let myData = useSelector(state => state.country_of_origin.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_country_of_origin({[id]: value}))
    }
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Sys/Countries?CountryId=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_country_of_origin(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    let handleAddPage = async()=>{
        let allCountries = await getAllCountries();
        setIsAllCountries(allCountries)
        dispatch(initial_state_country_of_origin())
    }

    let handleSubmit = async()=>{
        if(id){
            let checkNameCountryFirst = isAllCountries.filter(store => store?.CountryName === myData?.CountryName && store?.CountryID !== id);
            if(checkNameCountryFirst.length){
                messageApi.error("هذا الاسم مسجل مسبقا !")
            }else{
                let status = await putCountry(myData);
                if(status === true){
                    navigate("/stock/country_of_origin/add", { replace: true });
                    messageApi.success("تم تعديل البلد بنجاح !")
                    dispatch(initial_state_country_of_origin());
                }
            }
        }else{
            let checkNameCountryFirst = isAllCountries.filter(store => store?.CountryName === myData?.CountryName);            
            if(checkNameCountryFirst.length){
                messageApi.error("هذا الاسم مسجل مسبقا !")
            }else{
                let status = await postNewCountry(myData);
                if(status === true){
                    await handleAddPage()
                    messageApi.success("تم اضافة البلد بنجاح !")
                }
            }
        }
    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(update_country_of_origin({}))
        }
    }, [id])

    return(
        <>

            {statusRequestMessage}
            
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة بلد منشأ</h3>
                    <Button type="primary" disabled={!myData?.CountryName} onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="">كود بلد المنشأ</label>
                        <Input disabled type="text" value={myData?.CountryID || ""} onChange={event => changeValue(event)} id="CountryID"/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="">أسم بلد المنشأ</label>
                        <input type="text" value={myData?.CountryName || ""} onChange={event => changeValue(event)} id="CountryName" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddEditCountryOfOrigin;