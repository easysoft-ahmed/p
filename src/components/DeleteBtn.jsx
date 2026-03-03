import { Button, message, Popconfirm } from "antd";
import useDelete from "../hooks/useDelete";

const DeleteBtn = ({url})=>{
    let {deleteDataAsync} = useDelete();
    const confirm = async (e) => {
        let status = await deleteDataAsync(url);

        if(status?.ResponseObject){
            window.location.assign("")
        }
    };

    return(
        <>
            
            <Popconfirm title="حذف عنصر" description="هل متاكد من حذف العنصر ؟" onConfirm={confirm}  okText="Yes" cancelText="No" >
                <Button danger type="primary" className="mx-2">حذف</Button>
            </Popconfirm>

        </>
    )
}

export default DeleteBtn;