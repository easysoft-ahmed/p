import { useLocation, useParams } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useDispatch } from "react-redux";
import useGet from "../../../../hooks/useGet";
import { getManyDataForSelectInput } from "../../../../api";
import { edit_store_transform, init_state_store_transform } from "./stateStoreTransform";
import { useEffect } from "react";
import { unique } from "../../../../helpers";

const AddEditStoreTransform = ()=>{
    let {id} = useParams();
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();

    
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/TransForm?TransDoc=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_store_transform({...data.ResponseObject[0], TransFormItems: data.ResponseObject[0].TransFormItems?.map(item =>{ return {...item, fakeID: unique()}})}))
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units" ], getDataAsync);
            console.log(data?.stores?.filter(store => store.IsRealStock)[0]);
            
            dispatch(edit_store_transform({dataSelects: data, StoreId: data?.stores?.filter(store => store.IsRealStock)[0]?.StoreID || ""}))
        } catch (error) {
            console.log(error);
        }
    }

    let getDataEditPage_callGetManyDataForSelectInput = async()=>{
        await callGetManyDataForSelectInput();
        await getDataEditPage()
    }

    useEffect(()=>{
        if(id){
            getDataEditPage_callGetManyDataForSelectInput()
        }else{
            dispatch(init_state_store_transform())
            callGetManyDataForSelectInput()
        }

    }, [id])


    return(
        <>
            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditStoreTransform;