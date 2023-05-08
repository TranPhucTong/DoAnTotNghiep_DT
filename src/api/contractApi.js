import { mainAxios } from "./axiosConfig";

const url = "/contracts";
const contractApi = {
  createContract(contract) {
    return mainAxios.post(`${url}`, {
      contract,
    });
  },
  getContracts(orderStatus) {
    return mainAxios.get(`${url}/customer`, { params: { orderStatus } });
  },
};
export default contractApi;
