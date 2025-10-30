import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

let pathWebSite = {
    "add": {title: {ar: "إضافة", en: ""}},
    "edit": {title: {ar: "تعديل", en: ""}},
    "/": {title: {ar: "الرئيسية"}},
    "accounts": {title: {ar: "الحسابات"}},
    "stock": {title: {ar: "المخزون"}},
    "purch": {title: {ar: "المشتريات"}},
    "sales": {title: {ar: "المبيعات"}},
    "financial": {title: {ar: "الحركة المالية"}},
    "accounts_codes": {title: {ar: "اكواد الحسابات"}},
    "helps_codes": {title: {ar: "أكواد اليوميات المساعدة "}},
    "settings": {title: {ar: "التثبيت و الخصائص", en: ""}},
    "setting": {title: {ar: "إعدادات", en: ""}},
    "system": {title: {ar: "النظام", en: ""}},
    "branches": {title: {ar: "الفروع", en: ""}},
    "users": {title: {ar: "المستخدمين", en: ""}},
    "company_data": {title: {ar: "بيانات الشركة", en: ""}},
}


const Breadcrumb = ()=>{
    let {pathname} = useLocation();
    let [arrayPath, setArrayPath] = useState([])

    let handleMakeCurrentPath = (arrayPath, strCurrentPath)=>{
        let myPath = ""
        for (let i = 0; i < arrayPath.length; i++) {
            myPath += arrayPath[i];
            if(arrayPath[i] === strCurrentPath){
                break;
            }   
        }
        return myPath;
        
    } 
    useEffect(()=>{
        let newArrayPath = pathname === "/" ? [""]: pathname.split("/");
        pathname.includes("edit") && newArrayPath.pop();
        newArrayPath[0] = "/";
        setArrayPath(newArrayPath)
    }, [pathname])
    return(
        <nav className="flex p-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              {arrayPath.map(path => 
                path === "/" ?
                    <li className="inline-flex items-center">
                        {arrayPath.length === 1 ?
                            <span className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                الرئيسية
                            </span>
                            :
                            <Link to={handleMakeCurrentPath(arrayPath, path)} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                الرئيسية
                            </Link>
                        }
                    </li>
                    : path === arrayPath[arrayPath.length - 1] ?
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{pathWebSite[path]?.title?.ar || "غير معرفة حاليا"}</span>
                        </div>
                    </li>
                    :
                    <li>
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <Link to={handleMakeCurrentPath(arrayPath, path)} className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{pathWebSite[path]?.title?.ar || "غير معرفة حاليا"}</Link>
                        </div>
                    </li>
              )}
            </ol>
          </nav>
    )
}


export default Breadcrumb;