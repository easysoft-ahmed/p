import { MainAPI } from "../lib/axios"

export const getAllCountries = async()=>{
    try {
        let response = await MainAPI.get(`Sys/Countries`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب البلدان");
    }
}