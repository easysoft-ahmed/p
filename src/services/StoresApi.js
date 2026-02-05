import { MainAPI } from "../lib/axios"

export const getAllStores = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Stores`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المخازن");
    }
}