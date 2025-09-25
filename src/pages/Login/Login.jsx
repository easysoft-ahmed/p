import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import MessageRequest from "../../components/MessageRequest";

const Login = ()=>{
    // let [emailPassword, setEmailPassword] = useState({Email: "", UserPassword: ""});
    // let [path, setPath] = useState(null)
    
    // let [data, isLoading, errorMsg, errorBody] = useFetch(path, "POST", emailPassword)
    // let handleLogin = ()=>{
    //     setPath(null);
    //     setTimeout(()=>{setPath("Identity/LogIn");},100)
        
    //     if(data?.ResponseObject){
    //         localStorage.setItem("token", data.ResponseObject);
    //         location.assign('/')
    //     }
    // }
    // return(
    //     <>
    //         <MessageRequest data={data} errorMsg={errorMsg} />
    //         <div className="[&>*]:m-auto mt-[10%]">
    //             <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
    //                 <Form.Item label="اسم المستخدم" layout="vertical" required>
    //                     <Input onChange={(event)=>setEmailPassword(state => { return {...state, Email: event.target.value}})}/>
    //                 </Form.Item>
    //             </div>
    //             <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
    //                 <Form.Item label="كلمة المرور" layout="vertical" required>
    //                     <Password onChange={(event)=>setEmailPassword(state => { return {...state, UserPassword: event.target.value}})} />
    //                 </Form.Item>
    //             </div>
    //             <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 text-center">
    //                 <Button disabled={isLoading} onClick={handleLogin} type="primary">
    //                     تسجيل دخول
    //                 </Button>
    //             </div>
    //         </div>
    //     </>
    // )
}


export default Login;