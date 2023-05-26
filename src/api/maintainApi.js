import { mainAxios } from "./axiosConfig";

const url = "/maintains";
const maintainApi = {
  createMaintain: (maintain) => mainAxios.post(url, { maintain }),
};
export default maintainApi;
