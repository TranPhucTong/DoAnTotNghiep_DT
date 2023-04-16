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
  // updateAvatar(data) {
  //   return mainAxios.post(`${url}/register-profile/avatar`, {
  //     avatar: data.avatar,
  //     type: data.type,
  //     fileName: data.fileName,
  //   });
  // },
};
export default employeeApi;
