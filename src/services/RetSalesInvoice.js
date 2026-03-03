import { MainAPI } from "../lib/axios"

export const getAllRetSalesInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Sales/RetSales`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب مرتد المبيعات");
    }
}


export const getNextCodeRetSalesInvoice = async()=>{
    try {
        let response = await MainAPI.get(`Sales/RetSales/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
