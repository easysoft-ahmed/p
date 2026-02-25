export const baseUrl = "http://188.40.183.162:4560/api/"
// export const baseUrl = "https://api.prosofteg.com:5001/api/"


let dataEndPoint = {
    units : {end_point: "Stock/Units", name_en: "الوحدات"},
    stores : {end_point: "Stock/Stores", name_en: "المخازن"},
    countries : {end_point: "Sys/Countries", name_en: "بلد المنشأ"},
    categories : {end_point: "Stock/Categories", name_en: "الاصناف"},
    currencies : {end_point: "Fin/Currs", name_en: "العملات"},
    colors : {end_point: "Stock/Colors", name_en: "الالوان"},
    meagures : {end_point: "Stock/Meagures", name_en: "المقاسات"},
    acc_codes : {end_point: "Acc/Accs", name_en: "الحسابات"},
    suppliers : {end_point: "Purch/Vendors", name_en: "الموردين"},
    products : {end_point: "Stock/Products", name_en: "الاصناف"},
    cost_centers : {end_point: "Acc/CostCenters", name_en: "مراكز التكلفة"},
    staff : {end_point: "Sales/Sellers", name_en: "الموظفين"},
    suppliers_types : {end_point: "Purch/VendorTypes", name_en: "انواع الموردين"},
    customers_types : {end_point: "Sales/CustomerTypes", name_en: "انواع العملاء"},
    customers : {end_point: "Sales/Customers", name_en: "العملاء"},
    taxes : {end_point: "Fin/Taxs", name_en: "الضرائب"},
    boxes : {end_point: "Fin/Boxs", name_en: "الخزن"},
    
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