import { MainAPI } from "../lib/axios"

export const getAllSuppliersType = async()=>{
    try {
        let response = await MainAPI.get(`Purch/VendorTypes`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب انواع الموردين");
    }
}