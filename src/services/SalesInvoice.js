import { MainAPI } from "../lib/axios"

export const getAllSalesInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Sales`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المبيعات");
    }
}


export const getNextCodeSalesInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Sales/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
