import { MainAPI } from "../lib/axios"

export const getAllRetPurchInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Purch/RetPurch`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المشتريات");
    }
}


export const getNextCodeRetPurchInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Purch/RetPurch/NextId`)
        return response?.data?.ResponseObject;
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
