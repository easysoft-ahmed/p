import axios from "axios";
import { baseUrl } from "../api";

export const MainAPI = axios.create({
    baseURL: baseUrl
})


MainAPI.interceptors.request.use(
  (config) => {
    const token = "TWc9PTpWR1Z6ZENCVmMyVnk6YXc9PTpiR2t5Tm5kNE9FaENPV005Ok1BPT0="; // جلب التوكن من التخزين المحلي
    // const token = localStorage.getItem('token'); // جلب التوكن من التخزين المحلي
    console.log(token);
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; //
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
