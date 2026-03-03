import { MainAPI } from "../lib/axios"

export const getAllBanks = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Banks`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب البنوك");
    }
}


export const getNextCodeBank = async()=>{
    try {
        let response = await MainAPI.get(`Fin/Banks/NextId`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب الكود التالي");
    }
}

export const postNewBank = async(data)=>{
    try {
        let response = await MainAPI.post(`Fin/Banks`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في اضافة البنك");
    }
}

export const putBank = async(data)=>{
    try {
        let response = await MainAPI.put(`Fin/Banks`, data)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في تعديل البنك");
    }
}