import { mainAxios } from "./axiosConfig";

const url = "teams";

const teamWorkApi = {
  updateTeam: (team) => {
    return mainAxios.patch(`${url}/`, { team });
  },
  deleteMemberFromTeam: (member) => {
    return mainAxios.post(`${url}/remove-member`, member);
  },
  addMemberFromTeam: (member) => {
    return mainAxios.post(`${url}/add-member`, member);
  },
  deleteTeam : (name) => {
    return mainAxios.delete(`${url}`,  {data:{name}});
  }
};

export default teamWorkApi;