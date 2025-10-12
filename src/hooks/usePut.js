import axios from "axios";
import { useState, useEffect } from "react";
import {baseUrl} from "../api";
import { message } from "antd";
const usePut = () => {

    const putDataAsync = async(path, body)=>{
        let token = "TWc9PTpWR1Z6ZENCVmMyVnk6YXc9PTpiR2t5Tm5kNE9FaENPV005Ok1BPT0="
        let headers =   { 'Authorization': `Bearer ${token}` }

        let res = axios.put(baseUrl.concat(path), body , {headers})
        .then(res => res.data)
        .catch(err => err)

        return res
    }
  return {putDataAsync};
};

export default usePut;
