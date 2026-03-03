import { MainAPI } from "../lib/axios"

export const getAllStockTransform = async()=>{
    try {
        let response = await MainAPI.get(`Stock/TransForm`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب تحويل المخازن");
    }
}


export const getNextCodeStockTransform = async()=>{
    try {
        let response = await MainAPI.get(`Stock/TransForm/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
