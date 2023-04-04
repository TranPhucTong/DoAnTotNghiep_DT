import { mainAxios } from "./axiosConfig";

const url = "employees";
const employeeApi = {
  getAll() {
    return mainAxios.get(url);
  },
};
export default employeeApi;
