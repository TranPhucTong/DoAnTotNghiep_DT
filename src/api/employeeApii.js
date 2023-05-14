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
  deleteEmloyeeInTeam: (phone) => {
    return mainAxios.delete(`${url}/remove-in-team`, { data: { phone } });
  },
  updateEmployee: (employee) => {
    return mainAxios.patch(`${url}/update`, { employee });
  },
  searchEmployee: (phone) => {
    return mainAxios.get(`${url}?phone=${phone}`);
  },
  getIsEmployeeActive: (active) => {
    return mainAxios.get(`${url}/active?active=${active}`);
  },
  checkEmployeeExist: (employeeId) => {
    return mainAxios.get(`${url}/exist-team?employeeId=${employeeId}`);
  },
};
export default employeeApii;
