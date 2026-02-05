import { MainAPI } from "../lib/axios"

export const getAllProducts = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Products`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الاصناف");
    }
}