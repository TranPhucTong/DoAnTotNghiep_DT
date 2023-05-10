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
  getFreelancerByPage: (page, field) => {
    return mainAxios.get(`${url}/freelancer/page`, { params: { page, field } });
  },
};
export default employeeApi;
