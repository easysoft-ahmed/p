import { MainAPI } from "../lib/axios"

export const getAllCashIn = async()=>{
    try {
        let response = await MainAPI.get(`Fin/CashIn`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب القبض");
    }
}


export const getNextCodeCashIn = async()=>{
    try {
        let response = await MainAPI.get(`Fin/CashIn/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewCashIn = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/CashIn`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة ايصال قبض");
    }
}

export const putCashIn = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/CashIn`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل ايصال قبض");
    }
}