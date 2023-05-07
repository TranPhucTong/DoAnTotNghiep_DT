import customerApi from "../../api/customerApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const checkIsPhone = createAsyncThunk(
  "/customers/check-phone",
  async (phone) => {
    try {
      const res = await customerApi.checkIsPhone(phone);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const getCustomer = createAsyncThunk("/customers/profile", async () => {
  try {
    const res = await customerApi.getCustomer();
    return { data: res.data, status: res.status };
  } catch (error) {
    return error.response;
  }
});
