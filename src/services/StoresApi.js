import { MainAPI } from "../lib/axios"


export const getAllStores = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Stores`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب المخازن");
    }
}
export const getNextCodeStore = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Stores/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewStore = async(data)=>{
    try {
        let response = await MainAPI.post(`Stock/Stores`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة المخزن");
    }
}

export const putStore = async(data)=>{
    try {
        let response = await MainAPI.put(`Stock/Stores`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل المخزن");
    }
}


export const getStockSetting = async(data)=>{
    try {
        let response = await MainAPI.get(`Stock/Configuration`, data)
        return response?.data?.ResponseObject;       

    } catch (error) {
        console.log(error);
        
    }
}