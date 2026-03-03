import axios from "axios";
import { useState, useEffect } from "react";
import {baseUrl} from "../api";
import { message } from "antd";
const useDelete = () => {

    const deleteDataAsync = async(path, body)=>{
        let token = localStorage.getItem("token")
        let headers =   { 'Authorization': `Bearer ${token}` }

        let res = axios.delete(baseUrl.concat(path) , {headers})
        .then(res => res.data)
        .catch(err => err)

        return res
    }
  return {deleteDataAsync};
};

export default useDelete;
