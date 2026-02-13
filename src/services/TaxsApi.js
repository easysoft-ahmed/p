import { MainAPI } from "../lib/axios"

export const getAllTaxs = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Taxs`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الضرائب");
    }
}


export const getNextCodeTax = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Taxs/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewTax = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/Taxs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة الضريبة");
    }
}

export const putTax = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/Taxs`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل الضريبة");
    }
}