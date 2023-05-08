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
  cancelContract(contractId, reason) {
    return mainAxios.put(`${url}/cancel`, { contractId, reason });
  },
};
export default contractApi;
