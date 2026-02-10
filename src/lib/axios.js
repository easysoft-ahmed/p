import axios from "axios";
import { baseUrl } from "../api";

export const MainAPI = axios.create({
    baseURL: baseUrl
})


MainAPI.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token")
    // const token = localStorage.getItem('token'); // جلب التوكن من التخزين المحلي
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; //
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
