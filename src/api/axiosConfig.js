import axios from "axios";
import { toast } from "react-toastify";

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
    return Promise.reject(error);
  }
);

export { mainAxios };
