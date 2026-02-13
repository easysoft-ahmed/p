import { MainAPI } from "../lib/axios"

export const getAllBoxs = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Boxs`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الضرائب");
    }
}


export const getNextCodeBox = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Boxs/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewBox = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/Boxs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة الخزينة");
    }
}

export const putBox = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/Boxs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل الخزينة");
    }
}