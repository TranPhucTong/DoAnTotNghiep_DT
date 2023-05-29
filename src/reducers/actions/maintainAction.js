import { createAsyncThunk } from "@reduxjs/toolkit";
import maintainApi from "../../api/maintainApi";

export const createMaintain = createAsyncThunk(
  "maintains/create",
  async (maintain) => {
    try {
      const res = await maintainApi.createMaintain(maintain);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
