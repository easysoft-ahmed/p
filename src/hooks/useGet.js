import axios from "axios";
import { useState, useEffect } from "react";
import {baseUrl} from "../api";
import { message } from "antd";
const useGet = () => {
    const [resultGet, setResultGet] = useState(null);
    const [errorMsgGet, setErrorMsgGet] = useState(null);
    const [isLoadingGet, setIsLoadingGet] = useState(null);

    const getData = (path)=>{
        let token = localStorage.getItem("token")
        let headers =   { 'Authorization': `Bearer ${token}` }
        setIsLoadingGet(true)
        axios.get(baseUrl.concat(path), {headers})
        .then(res => {
            setResultGet(res.data);

        })
        .catch(err => {
            switch (err.status) {
                case 401:
                    setErrorMsgGet("ليس لديك الصلاحيات لهذا الطلب")
                    break;
                case 404:
                    setErrorMsgGet("طلب غير موجود")
                    break;
                default:
                    setErrorMsgGet("حدث خطاء اثناء معالجة الطلب")
                    break;
            }
        })
    }

    const getDataAsync = async(path)=>{
        let token = localStorage.getItem("token")
        let headers =   { 'Authorization': `Bearer ${token}` }

        let res = axios.get(baseUrl.concat(path), {headers})
        .then(res => res.data)
        .catch(err => err)

        return res
    }
  return {getData,getDataAsync , resultGet, errorMsgGet, isLoadingGet : resultGet !== null || errorMsgGet !== null ? false : true};
};

export default useGet;
