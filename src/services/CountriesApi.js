import { MainAPI } from "../lib/axios"

export const getAllCountries = async()=>{
    try {
        let response = await MainAPI.get(`Sys/Countries`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب البلدان");
    }
}


export const getNextCodeCountry = async()=>{
    try {
        let response = await MainAPI.get(`Stock/Countries/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewCountry = async(data)=>{
    try {
        let response = await MainAPI.post(`Sys/Countries`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة بلد منشأ");
    }
}

export const putCountry = async(data)=>{
    try {
        let response = await MainAPI.put(`Sys/Countries`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل بلد منشأ");
    }
}