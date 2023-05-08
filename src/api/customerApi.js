import { mainAxios } from "./axiosConfig";

const url = "/customers";
const customerApi = {
  checkIsPhone(phone) {
    return mainAxios.post(`${url}/check-phone`, {
      phone,
    });
  },
  getCustomer() {
    return mainAxios.get(`${url}/profile`);
  },
  updateCustomer(customerUpdate){
    return mainAxios.patch(`${url}`, {
      customerUpdate
    });
  }
};
export default customerApi;
