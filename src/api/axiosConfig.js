import axios from "axios";
import { useNavigate } from "react-router-dom";
import configRoutes from "../config/configRouter";

const mainAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.defaults.headers.post["Content-Type"] = "application/json";

mainAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

mainAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error(`Error status: ${error.response.status}`);
    console.error(`Error message: ${error.message}`);
    localStorage.removeItem("access_token");
    if (error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export { mainAxios };
