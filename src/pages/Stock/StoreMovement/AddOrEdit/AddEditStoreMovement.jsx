import { useLocation, useParams } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { edit_store_movement, init_state_store_movement, update_store_movement } from "./stateStoreMovement";
import { getManyDataForSelectInput } from "../../../../api";
import useGet from "../../../../hooks/useGet";
import { unique } from "../../../../helpers";

const AddEditStoreMovement = ()=>{
    let {id} = useParams();

    // let checkPageType = useLocation().pathname.indexOf("add") ? true:false;
    // let pageType = {add: checkPageType , edit: !checkPageType};
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Trans?TransDoc=${id}`);
            if(data?.ResponseObject?.length){
                dispatch(edit_store_movement({...data.ResponseObject[0], StockItems: data.ResponseObject[0].StockItems?.map(item =>{ return {...item, fakeID: unique()}})}))
            }

        } catch (error) {
            console.log(error);
        }

    }

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units", "acc_codes" ], getDataAsync);
            console.log(data);
            
            dispatch(edit_store_movement({dataSelects: data}))
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
            dispatch(init_state_store_movement())
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

export default AddEditStoreMovement;