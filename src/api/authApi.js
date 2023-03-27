import { mainAxios } from "./axiosConfig";

const url = "/login";
const authApi = {
  login(phone, password) {
    return mainAxios.post(url, {
      phone,
      password,
    });
  },
};
export default authApi;