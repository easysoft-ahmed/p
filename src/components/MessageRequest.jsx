import { message } from "antd";
import { useEffect } from "react";

const MessageRequest = ({data, errorMsg})=>{
    const [messageApi, statusRequestMessage] = message.useMessage();
    const error = () => {
        messageApi.open({
            type: 'error',
            content: errorMsg,
        });
    };
    const success = () => {
        messageApi.open({
            type: 'success',
            content: "تم تنفيذ طلبك بنجاح",
        });
    };

    useEffect(()=>{
        if(data){
            success();
        }else if(errorMsg){
            error()
        }
    }, [data, errorMsg])
    return(
        <>
          {statusRequestMessage}
        </>
    )
}

export default MessageRequest;