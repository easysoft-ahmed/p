import { MainAPI } from "../lib/axios"

export const getAllStockTrans = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Trans`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب حركة المخزون");
    }
}


export const getNextCodeStockTrans = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Trans/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}
