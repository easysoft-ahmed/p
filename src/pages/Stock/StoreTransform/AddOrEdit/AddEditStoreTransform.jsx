import { useLocation } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useDispatch } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_store_transform } from "./stateStoreTransform";
import { useEffect } from "react";

const AddEditStoreTransform = ()=>{
    let checkPageType = useLocation().pathname.indexOf("add") ? true:false;
    let pageType = {add: checkPageType , edit: !checkPageType};
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units" ], getDataAsync);
            console.log(data?.stores?.filter(store => store.IsRealStock)[0]);
            
            dispatch(edit_store_transform({dataSelects: data, StoreId: data?.stores?.filter(store => store.IsRealStock)[0]?.StoreID || ""}))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        callGetManyDataForSelectInput()
        if(pageType.add){            
            dispatch(edit_store_transform({}))
        }
    }, [])


    return(
        <>
            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditStoreTransform;