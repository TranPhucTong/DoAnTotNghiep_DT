import { mainAxios } from "./axiosConfig";

const url = "employees";
const employeeApi = {
  getAll() {
    return mainAxios.get(url);
  },
  getProfile() {
    return mainAxios.get(`${url}/profile`);
  },
  updateInfo(profile) {
    return mainAxios.post(`${url}/register-profile`, { profile });
  },
  updateSpotlight(spotlight) {
    return mainAxios.post(`${url}/update-spotlight`, { spotlight });
  },
};
export default employeeApi;
