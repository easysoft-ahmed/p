import { MainAPI } from "../lib/axios"

export const getAllCurrncies = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Currs`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب العملات");
    }
}


export const getNextCodeCurr = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Currs/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewCurr = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/Currs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة العملة");
    }
}

export const putCurr = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/Currs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل العملة");
    }
}