import { mainAxios } from "./axiosConfig";

const url = "login";
const authApi = {
  login(phone, password) {
    return mainAxios.post(url, {
      phone,
      password,
    });
  },
  register(phone, password) {
    return mainAxios.post("register", {
      phone,
      password,
    });
  },
  registerInfo(info) {
    return mainAxios.post("register-info", info);
  },
};
export default authApi;
