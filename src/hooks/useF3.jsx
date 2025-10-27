import { useDispatch, useSelector } from "react-redux"
import { edit_global } from "../redux/stateGlobal";

const useF3 = ()=>{
    const dispatch = useDispatch();
    const F3 = (event, component = <h2>Hello , Someone</h2>) => {
        console.log(event);
        if(event.type === 'keydown' && event.key  === "F3" || event.code  === "F3" ){
            event.preventDefault()
            dispatch(edit_global({popupF3: true, popupF3Component: component}))

        }
        // if(event.key === "F3" || event.code === "F3"){
        //     event.preventDefault()
        //     dispatch(edit_global({popupF3: true, popupF3Component: <h2>Hello</h2>}))
        // }
    }

    return {F3}
}

export default useF3