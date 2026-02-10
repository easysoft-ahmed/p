import { MainAPI } from "../lib/axios"

export const getAllProducts = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Products`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الاصناف");
    }
}

export const postNewProduct = async(data)=>{
    try {
        let response = await MainAPI.post(`Stock/Products`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة وحدة القياس");
    }
}

export const putProduct = async(data)=>{
    try {
        let response = await MainAPI.put(`Stock/Products`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل وحدة القياس");
    }
}