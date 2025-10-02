export const baseUrl = "https://api.prosofteg.com:5001/api/"


let dataEndPoint = {
    units : {end_point: "Stock/Units", name_en: "الوحدات"},
    stores : {end_point: "Stock/Stores", name_en: "المخازن"},
    countries : {end_point: "Sys/Countries", name_en: "بلد المنشأ"},
    categories : {end_point: "Stock/Categories", name_en: "الاصناف"},
    currencies : {end_point: "Fin/Currs", name_en: "العملات"},
    
}

export async function getManyDataForSelectInput(arrayNameDataEndPoint, actionToCallApi) {
    let responseData = {}
    for (let nameDataEndPoint = 0; nameDataEndPoint < arrayNameDataEndPoint.length; nameDataEndPoint++) {
        try {
            let data = await actionToCallApi(dataEndPoint[arrayNameDataEndPoint[nameDataEndPoint]].end_point);
            responseData[arrayNameDataEndPoint[nameDataEndPoint]] = data.ResponseObject;
            
        } catch (error) {
            console.log("Some Error");
        }
    }
    return responseData;
}