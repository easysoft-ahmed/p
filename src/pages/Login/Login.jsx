import { Button, Checkbox, Form, Input, Select } from "antd";
import Password from "antd/es/input/Password";
import { useEffect, useState } from "react";
import MessageRequest from "../../components/MessageRequest";
import logo from "../../../public/logo.png"
import usePost from "../../hooks/usePost";
import { set_login_user } from "../../redux/stateGlobal";
import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import useGet from "../../hooks/useGet";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = ()=>{
    let dispatch = useDispatch();

    let navigate = useNavigate();
    let [loginForm, setLoginForm] = useState({Email: localStorage.getItem("Email") || "" , UserPassword: localStorage.getItem("UserPassword") || "", Branch: null});
    let [isRememberMe, setIsRememberMe] = useState(localStorage.getItem("rememberMe") ? true : false)
    let [branches , setBranches] = useState([])
    let {postDataAsync} = usePost();
    let {getDataAsync} = useGet();
    let [errMsg, setErrMsg] = useState(false)
    let handleSubmit = async(e)=>{
        e.preventDefault();
        if(isRememberMe){
            localStorage.setItem("Email", loginForm?.Email);
            localStorage.setItem("UserPassword", loginForm?.UserPassword);
            localStorage.setItem("rememberMe", "true");
        }else{
            localStorage.removeItem("Email");
            localStorage.removeItem("UserPassword");
            localStorage.removeItem("rememberMe");
        }
        setErrMsg("")
        let response = await postDataAsync("Identity/LogIn", loginForm);
        if(response?.ResponseObject?.Token){
            dispatch(set_login_user(response.ResponseObject));
            navigate("/")
        }else{
            console.log(response?.response?.data?.ErrorMsg);
            if(response?.response?.data?.ErrorMsg === "User Email or Password Is Invalid"){
                setErrMsg(true)
            }
        }
    }
    let handleGetBranches = async()=>{
        let branches = await getDataAsync("Sys/Branches");
        setBranches(branches?.ResponseObject || []);
    }
    useEffect(()=>{
        handleGetBranches();
    }, [])
    return(
        <>
            {/* <MessageRequest data={data} errorMsg={errorMsg} /> */}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src="logo.png" alt="Your Company" class="mx-auto h-20 w-auto" />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-600">مرحبا بك في برنامج ERP </h2>
                </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-5">
                            <div>
                                <div className={`text-rose-600 ${errMsg ? "":"invisible"}`}>اسم المستخدم او كلمة المرور غير صحيح</div>
                            </div>
                            <div>
                                <label for="user_name" class="block text-sm/6 font-medium text-indigo-600">الفرع</label>
                                <div class="mt-2">
                                    <Select className="w-full" value={loginForm.Branch} onChange={(value)=>setLoginForm(state => {return {...state, Branch: value}})} placeholder="--اختر فرع--" options={branches.map(ele => {return {...ele, key: ele.BranchID, value: ele.BranchID, label: ele.BranchName}})} />
                                </div>
                            </div>

                            <div>
                                <label for="user_name" class="block text-sm/6 font-medium text-indigo-600">اسم المستخدم</label>
                                <div class="mt-2">
                                    <Input id="user_name" value={loginForm.Email} onChange={(event)=>setLoginForm(state => { return {...state, Email: event.target.value} })} type="text" name="user_name" required autocomplete="user_name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm/6 font-medium text-indigo-600">كلمة المرور</label>
                                </div>
                                <div class="mt-2">
                                    <Input.Password
                                        id="password"
                                        value={loginForm.UserPassword}
                                        onChange={(event)=>setLoginForm(state => { return {...state, UserPassword: event.target.value} })}
                                        onKeyDown={(e)=>{if(e.code === "Enter"){handleSubmit(e)}}}
                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />

                                    {/* <Input id="password" onKeyDown={(e)=>{if(e.code === "Enter"){handleSubmit(e)}}} value={loginForm.UserPassword} onChange={(event)=>setLoginForm(state => { return {...state, UserPassword: event.target.value} })} type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" /> */}
                                </div>
                            </div>
                            <div class="text-sm">                                   
                                <Checkbox checked={isRememberMe} onChange={(e)=>setIsRememberMe(e.target.checked)}>تذكرني دائماَ</Checkbox>
                            </div>

                            <div>
                                <button onClick={(e) => handleSubmit(e)} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">تسجيل دخول</button>
                            </div>
                        </form>

                    </div>
            </div>
        </>
    )
}


export default Login;