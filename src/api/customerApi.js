import { mainAxios } from "./axiosConfig";

const url = "/customers";
const customerApi = {
  checkIsPhone(phone) {
    console.log(phone);
    return mainAxios.post(`${url}/check-phone`, {
      phone,
    });
  },
};
export default customerApi;
