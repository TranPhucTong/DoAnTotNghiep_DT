import customerApi from "../../api/customerApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const checkIsPhone = createAsyncThunk(
  "/customers/check-phone",
  async (phone) => {
    console.log(phone);
    try {
      const res = await customerApi.checkIsPhone(phone);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
