import { Input } from "antd";
import { getProductBalInStore } from "../services/StoresApi";
import { useEffect, useState } from "react";

const ProductBal = ({ProdId, StoreId})=>{
    let [isLoading, setIsLoading] = useState(false);
    let [isProdBal, setIsProdBal] = useState(null)
    let callGetProductBalInStore = async()=>{
        setIsLoading(true);
        try {
            let response = await getProductBalInStore(ProdId, StoreId)
            setIsProdBal(response);
            setIsLoading(false)
        } catch (error) {
            console.log(error   );
            setIsLoading(false)
        }
    }
    
    useEffect(()=>{
        callGetProductBalInStore()
    }, [ProdId, StoreId])
    return(

        <Input value={isLoading ? "جاري البحث عن الرصيد ..." : isProdBal} />
    )
}


export default ProductBal;