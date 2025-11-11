import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import MessageRequest from "../../components/MessageRequest";
import logo from "../../../public/logo.png"
import usePost from "../../hooks/usePost";
import { set_login_user } from "../../redux/stateGlobal";
import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";

const Login = ()=>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [loginForm, setLoginForm] = useState({Email: "" , UserPassword: ""})
    let {postDataAsync} = usePost()
    let handleSubmit = async(e)=>{
        e.preventDefault();
        let response = await postDataAsync("Identity/LogIn", loginForm);
        if(response?.ResponseObject?.Token){
            dispatch(set_login_user(response.ResponseObject));
            navigate("/")
        }
    }
    return(
        <>
            {/* <MessageRequest data={data} errorMsg={errorMsg} /> */}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img src="logo.png" alt="Your Company" class="mx-auto h-20 w-auto" />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-600">مرحبا بك في برنامج ERP </h2>
                </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form class="space-y-6">
                            <div>
                                <label for="user_name" class="block text-sm/6 font-medium text-indigo-600">اسم المستخدم</label>
                                <div class="mt-2">
                                    <input id="user_name" value={loginForm.Email} onChange={(event)=>setLoginForm(state => { return {...state, Email: event.target.value} })} type="text" name="user_name" required autocomplete="user_name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm/6 font-medium text-indigo-600">كلمة المرور</label>
                                </div>
                                <div class="mt-2">
                                    <input id="password" onKeyDown={(e)=>{if(e.code === "Enter"){handleSubmit(e)}}} value={loginForm.UserPassword} onChange={(event)=>setLoginForm(state => { return {...state, UserPassword: event.target.value} })} type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">هل نسيت كلمة المرور ؟</a>
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