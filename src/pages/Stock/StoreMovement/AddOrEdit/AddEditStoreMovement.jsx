import { useLocation } from "react-router-dom";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { edit_store_movement, init_state_store_movement } from "./stateStoreMovement";
import { getManyDataForSelectInput } from "../../../../api";
import useGet from "../../../../hooks/useGet";

const AddEditStoreMovement = ()=>{
    let checkPageType = useLocation().pathname.indexOf("add") ? true:false;
    let pageType = {add: checkPageType , edit: !checkPageType};
    let dispatch = useDispatch();
    let {getDataAsync} = useGet();

    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput([ "products" , "stores", "units" ], getDataAsync);
            console.log(data);
            
            dispatch(edit_store_movement({dataSelects: data}))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(pageType.add){            
            dispatch(init_state_store_movement({}))
        }
        callGetManyDataForSelectInput()
    }, [])
    return(
        <>
            <Comp1 />
            <Comp2 />
        </>
    )
}

export default AddEditStoreMovement;