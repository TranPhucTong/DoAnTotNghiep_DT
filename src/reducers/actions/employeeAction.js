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

export const getListEmployeeByType = createAsyncThunk("/employees/type", async (type) => {
  try {
    const res = await employeeApi.getListEmployeeByType(type);
    return { data: res.data, status: res.status };
  } catch (error) {
    return error.response;
  }
});


export const getListEmployeeByPhone = createAsyncThunk(
  "/employees/phone",
  async (phone) => {
    try {
      const res = await employeeApi.getEmployeeByPhone(phone);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);