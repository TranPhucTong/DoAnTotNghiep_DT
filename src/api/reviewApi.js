import { mainAxios } from "./axiosConfig";

const url = "reviews";

const reviewApi = {
  createReview: (review, contractId) => {
    return mainAxios.post(`${url}`, { review, contractId });
  },
};

export default reviewApi;
