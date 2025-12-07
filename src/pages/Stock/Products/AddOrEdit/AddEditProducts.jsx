import { Button, Tabs } from "antd";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import { SaveOutlined } from "@ant-design/icons";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Comp6 from "./components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import { useDispatch, useSelector } from "react-redux";
import { edit_product, update_product } from "./stateProduct";
import { getManyDataForSelectInput } from "../../../../api";
import usePost from "../../../../hooks/usePost";
import usePut from "../../../../hooks/usePut";
import MessageRequest from "../../../../components/MessageRequest";
import TreeProduct from "../../../../components/TreeProduct";

const AddEditProducts = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();
    let {postDataAsync} = usePost();
    let {putDataAsync} = usePut();
    let [msg, setMsg] = useState("");
    const navigate = useNavigate();
    let myData = useSelector(state => state.product.value);

    let dispatch = useDispatch();
    let getDataProductEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Products?ProductID=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_product(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }
    
    async function callGetManyDataForSelectInput(){
        try {
            let data = await getManyDataForSelectInput(["products", "suppliers", "acc_codes", "units", "stores", "countries", "categories", "currencies", "colors", "meagures"], getDataAsync)
            dispatch(edit_product({dataSelects: data}))
        } catch (error) {
            console.log("stop");
        }
    }

    let handleSubmit = async()=>{
        setMsg(false)
        if(id){
            let status = await putDataAsync("Stock/Products", myData);
            navigate("/stock/products/add", { replace: true });
            status?.ResponseObject && setMsg(true);
            // status?.ResponseObject && dispatch(initial_state_country_of_origin())
        }else{
            let status = await postDataAsync("Stock/Products", myData);
            // status?.ResponseObject && dispatch(initial_state_country_of_origin());
            status?.ResponseObject && setMsg(true)
        }

    }


    useEffect(()=>{
        if(id){
            getDataProductEditPage()
        }else{
            dispatch(update_product({}))
        }

        callGetManyDataForSelectInput()
    }, [id])
    return(
        <>
            <MessageRequest data={msg}/>


            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة صنف</h3>
                    <Button type="primary" onClick={handleSubmit} icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex w-full">
                    <Tabs
                        className="w-full lg:w-9/12 [&_*]:!transform-none"
                        type="card"
                        items={[
                            {label: "بيانات اساسية", key: "1", children: <Comp1 />},
                            {label: "شرائح اضافية ووحدات الصنف", key: "2", children: <Comp2 />},
                            {label: "موردي الصنف", key: "3", children: <Comp3 />},
                            {label: "مراقبة المخزون و التحكم في حركات الصنف", key: "4", children: <Comp4 />},
                            {label: "وصف الصنف", key: "5", children: <Comp5 />},
                            {label: "الباركود", key: "6", children: <Comp6 />},
                            {label: "البيانات الاخرى", key: "7", children: <Comp7 />},
                            {label: "صور الصنف", key: "8", children: <Comp8 />},
                        ]}
                    />
                    <TreeProduct updateSelectCategories={true} edit_product_type_2={edit_product} />
                </div>
            </div>
        </>
    )
}

export default AddEditProducts;