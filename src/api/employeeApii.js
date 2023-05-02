import { mainAxios } from "./axiosConfig";

const url = "employees";
const employeeApii = {
  createEmployee: (employee) => {
    return mainAxios.post(`${url}/register`, { employee });
  },
  getEmplees: () => {
    return mainAxios.get(`${url}/team`);
  },
  deleteEmloyee: (phone) => {
    return mainAxios.delete(`${url}`, { data: { phone } });
  },
  updateEmployee: (employee) => {
    return mainAxios.patch(`${url}/update`,  { employee });
  },
  searchEmployee: (phone) => {
    return mainAxios.get(`${url}?phone=${phone}`)
  }
};
export default employeeApii;
