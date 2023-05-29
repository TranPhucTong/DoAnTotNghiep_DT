import { mainAxios } from "./axiosConfig";

const url = "maintains";

const mainTainOrderApi = {
  createMaintain: (maintain) => {
    return mainAxios.post(`${url}/order`, { maintain });
  },
  acceptedMaintain: (maintainUpdate) => {
    return mainAxios.post(`${url}/order/accepted`, { maintainUpdate });
  },
  rejectMaintain: (maintainReject) => {
    return mainAxios.post(`${url}/order/rejected`, { maintainReject });
  }
};

export default mainTainOrderApi;