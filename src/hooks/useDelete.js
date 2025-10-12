import axios from "axios";
import { useState, useEffect } from "react";
import {baseUrl} from "../api";
import { message } from "antd";
const useDelete = () => {

    const deleteDataAsync = async(path, body)=>{
        let token = "TWc9PTpWR1Z6ZENCVmMyVnk6YXc9PTpiR2t5Tm5kNE9FaENPV005Ok1BPT0="
        let headers =   { 'Authorization': `Bearer ${token}` }

        let res = axios.delete(baseUrl.concat(path) , {headers})
        .then(res => res.data)
        .catch(err => err)

        return res
    }
  return {deleteDataAsync};
};

export default useDelete;
