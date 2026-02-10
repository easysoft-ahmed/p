import axios from "axios";
import { useState, useEffect } from "react";
import {baseUrl} from "../api";
import { message } from "antd";
const usePost = () => {

    const postDataAsync = async(path, body)=>{
        let token = localStorage.getItem("token")
        let headers =   { 'Authorization': `Bearer ${token}` }

        let res = axios.post(baseUrl.concat(path), body , {headers})
        .then(res => res.data)
        .catch(err => err)

        return res
    }
  return {postDataAsync};
};

export default usePost;
