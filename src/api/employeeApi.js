import { mainAxios } from "./axiosConfig";

const url = "employees";
const employeeApi = {
  getAll() {
    return mainAxios.get(url);
  },
  getListEmployeeByType: (type) => {
    return mainAxios.get(`${url}/${type}`);
  },
  getEmployeeByPhone: (phone) => {
    return mainAxios.get(`${url}`, { params: { phone } });
  },
};
export default employeeApi;
