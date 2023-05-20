import { mainAxios } from "./axiosConfig";

const url = "orders";
const orderApi = {
  getListOrderByCustomer: (orderStatus) => {
    return mainAxios.get(`${url}/customer`, { params: { orderStatus } });
  },
};

export default orderApi;
