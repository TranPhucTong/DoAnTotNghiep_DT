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

export const getProfileEmployee = createAsyncThunk(
  "/employees/profile",
  async () => {
    try {
      const res = await employeeApi.getProfile();
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const updateProfileEmployee = createAsyncThunk(
  "/employees/register-profile",
  async (profile) => {
    try {
      const res = await employeeApi.updateInfo(profile);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const updateSpotlightEmployee = createAsyncThunk(
  "/employees/update-spotlight",
  async (spotlight) => {
    try {
      const res = await employeeApi.updateSpotlight(spotlight);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
