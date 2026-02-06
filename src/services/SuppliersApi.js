import { MainAPI } from "../lib/axios"

export const getAllSuppliers = async()=>{
    try {
        let response = await MainAPI.get(`Purch/Vendors`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الموردين");
    }
}