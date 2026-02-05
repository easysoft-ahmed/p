import { MainAPI } from "../lib/axios"


export const getFilesReport = async(WindowName)=>{
    return MainAPI.get(`Report/ReportFiles?WindowName=${WindowName}`)
}

export const postPrintReport = async(Filters)=>{
    return await MainAPI.post("Report/PrintOut", Filters, { responseType: 'blob' })
}