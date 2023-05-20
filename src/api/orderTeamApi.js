import { mainAxios } from "./axiosConfig";

const url = "orders";
const orderTeamApi = {
  createOrder: (order) => {
    return mainAxios.post(`${url}`, { order: order });
  },
  getListOrder: () => {
    return mainAxios.get(`${url}`);
  },
  addTeamToOrder: (dataAddTeamToOrder) => {
    return mainAxios.put(`${url}`, dataAddTeamToOrder);
  },
  cancelOrder: (dataCancel) => {
    return mainAxios.put(`${url}/cancel`, dataCancel);
  },
  doneOrder: (orderId) => {
    return mainAxios.put(`${url}/done`, {orderId});
  }
};

export default orderTeamApi;
