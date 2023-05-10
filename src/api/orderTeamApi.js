import { mainAxios } from "./axiosConfig";

const url = "orders";
const orderTeamApi = {
  createOrder : (order) => {
    return mainAxios.post(`${url}`, { "order" :  order });
  },
  getListOrder : () => {
    return mainAxios.get(`${url}`);
  }
}

export default orderTeamApi;