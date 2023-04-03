import { createAsyncThunk } from "@reduxjs/toolkit";
import employeeApi from "../../api/employeeApi";
export const getListEmployee = createAsyncThunk("/employees", async () => {
  try {
    const res = await employeeApi.getAll();
    return { data: res.data, status: res.status };
  } catch (error) {
    return error.response;
  }
});
