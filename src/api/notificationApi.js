import { mainAxios } from "./axiosConfig";

const url = "notifications";
const notificationApi = {
  seenNotification(notificationId) {
    return mainAxios.put(`${url}/seen`, { notificationId });
  },
  getNotificationsOfAdmin() {
    return mainAxios.get(`${url}`);
  },
};
export default notificationApi;
