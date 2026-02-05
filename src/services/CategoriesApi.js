import { MainAPI } from "../lib/axios"

export const getAllCategories = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Categories`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب انواع الاصناف");
    }
}