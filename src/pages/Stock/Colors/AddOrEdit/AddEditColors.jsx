import { SaveOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { edit_color, update_color } from "./stateColor";
import { useParams } from "react-router-dom";
import useGet from "../../../../hooks/useGet";
import { useEffect } from "react";

const AddEditColors = ()=>{
    let {id} = useParams();
    let {getDataAsync} = useGet();

    let myData = useSelector(state => state.color.value);
    let dispatch = useDispatch();
    let changeValue = (event)=>{
        let {id, value} = event.target;
        dispatch(edit_color({[id]: value}))
    }
    let getDataEditPage = async ()=>{
        try {
            let data = await getDataAsync(`Stock/Colors?ColorID=${id}`);
            if(data.ResponseObject.length){
                dispatch(update_color(data.ResponseObject[0]))
            }
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(()=>{
        if(id){
            getDataEditPage()
        }else{
            dispatch(update_color({}))
        }
    }, [id])

    return(
        <>
            <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-between border-b pb-4 mb-4">
                    <h3 className="text-lg font-bold">إضافة لون</h3>
                    <Button type="primary" icon={<SaveOutlined />}>حفظ</Button>
                </div>

                <div className="flex flex-wrap w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
                    <div className="input_label_basic w-4/12">
                        <label htmlFor="ColorID">كود اللون</label>
                        <Input disabled={id ? true:false} type="text" value={myData?.ColorID || ""} onChange={event => changeValue(event)} id="ColorID"/>
                    </div>
                    <div className="input_label_basic ps-2 w-8/12">
                        <label htmlFor="ColorName">أسم اللون</label>
                        <input type="text" value={myData?.ColorName || ""} onChange={event => changeValue(event)} id="ColorName"/>
                    </div>
                    {/* <div className="input_label_basic ps-2 w-full">
                        <label htmlFor="">رمز الباركود</label>
                        <input type="text" value={myData?.} onChange={event => changeValue(event)} id=""/>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default AddEditColors;