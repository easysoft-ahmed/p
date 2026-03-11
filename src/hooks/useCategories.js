import { useEffect, useState } from "react";
import { getAllCategories } from "../services/CategoriesApi";

const useCategories = ()=>{
    let [data, setData] = useState([])
    let handleGetCategories = async()=>{
        let response = await getAllCategories();
        response && setData(response);
    }
    useEffect(()=>{
        handleGetCategories()
    }, [])
    return {data}
}

export default useCategories;