import { MainAPI } from "../lib/axios"

export const getAllCustomers = async()=>{
    try {
        let response = await MainAPI.get(`Sales/Customers`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب العملاء");
    }
}