import { MainAPI } from "../lib/axios"

export const getAllCashOut = async()=>{
    try {
        let response = await MainAPI.get(`Fin/CashOut`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب ايصالات الدفع");
    }
}


export const getNextCodeCashOut = async()=>{
    try {
        let response = await MainAPI.get(`Fin/CashOut/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewCashOut = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/CashOut`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة ايصال الدفع");
    }
}

export const putCashOut = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/CashOut`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل ايصال الدفع");
    }
}