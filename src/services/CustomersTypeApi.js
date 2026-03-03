import { MainAPI } from "../lib/axios"

export const getAllCustomersTypes = async()=>{
    try {
        let response = await MainAPI.get(`Sales/CustomerTypes`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب انواع العملاء");
    }
}