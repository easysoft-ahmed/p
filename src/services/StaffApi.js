import { MainAPI } from "../lib/axios"

export const getAllStaff = async()=>{
    try {
        let response = await MainAPI.get(`Sales/Sellers`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المندوبين");
    }
}