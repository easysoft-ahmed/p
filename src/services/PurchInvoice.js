import { MainAPI } from "../lib/axios"

export const getAllPurchInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Purch`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المشتريات");
    }
}


export const getNextCodePurchInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Purch/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
