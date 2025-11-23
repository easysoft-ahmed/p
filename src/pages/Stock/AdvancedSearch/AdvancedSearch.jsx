import { useEffect } from "react"
import { getManyDataForSelectInput } from "../../../api"
import Comp1 from "./AddOrEdit/Components/Comp1"
import Comp2 from "./AddOrEdit/Components/Comp2"
import { edit_advanced_search } from "./AddOrEdit/stateAdvancedSearch"
import useGet from "../../../hooks/useGet"
import { useDispatch } from "react-redux"

const AdvancedSearch = ()=>{
    let {getDataAsync} = useGet();
    let dispatch = useDispatch()
    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["categories", "products"], getDataAsync)
            
            dispatch(edit_advanced_search({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    useEffect(()=>{
        callGetManyDataForSelectInput()

    }, [])


    return(
        <>
            <Comp1 />
            <Comp2 />
        </>

    )
}

export default AdvancedSearch