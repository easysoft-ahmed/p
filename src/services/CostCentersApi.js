import { MainAPI } from "../lib/axios"

export const getAllCostCenters = async()=>{
    try {
        let response = await MainAPI.get(`Acc/CostCenters`)
        return response?.data?.ResponseObject;       
    } catch (error) {
        console.error("خطاء في جلب مراكز التكلفة");
    }
}