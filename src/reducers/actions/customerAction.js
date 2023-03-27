import customerApi from "../../api/customerApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const checkIsPhone = createAsyncThunk(
  "/customer/check-phone",
  async ({ phone }) => {
    try {
      const res = await customerApi.checkIsPhone(phone);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
