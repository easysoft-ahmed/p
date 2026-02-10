import { MainAPI } from "../lib/axios"

export const getAllUnits = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Units`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الوحدات");
    }
}

export const getUnit = async(UnitID)=>{
    try {
        let response = await MainAPI.get(`Stock/Units?UnitID=${UnitID}`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب وحدة القياس");
    }
}

export const getNextCodeUnit = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Units/NextCode`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewUnit = async(data)=>{
    try {
        let response = await MainAPI.post(`Stock/Units`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة وحدة القياس");
    }
}

export const putUnit = async(data)=>{
    try {
        let response = await MainAPI.put(`Stock/Units`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل وحدة القياس");
    }
}