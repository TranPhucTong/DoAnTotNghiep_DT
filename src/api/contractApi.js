import { mainAxios } from "./axiosConfig";

const url = "/contracts";
const contractApi = {
  createContract(contract) {
    return mainAxios.post(`${url}`, {
      contract,
    });
  },
};
export default contractApi;
