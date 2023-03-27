import authApi from "../../api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "/login",
  async ({ username, password }) => {
    try {
      const res = await authApi.login(username, password);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const register = createAsyncThunk(
  "/register",
  async ({ username, password }) => {
    try {
      const response = await authApi.register(username, password);
      return { data: response.data, status: response.status };
    } catch (error) {}
  }
);

export const registerInfo = createAsyncThunk(
  "/register/info",
  async ({ user }) => {
    try {
      const response = await authApi.registerInfomation(user);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerVerify = createAsyncThunk(
  "/register/verify",
  async (username) => {
    try {
      const response = await authApi.verifyUsername(username);
      return { data: response.data, status: response.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const profile = createAsyncThunk("/profile", async (accessToken) => {
  try {
    const response = await authApi.profile(accessToken);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.log(error.response.status);
    return { status: error.response.status };
  }
});

export const existUsername = createAsyncThunk("/forgot", async (username) => {
  try {
    const response = await authApi.existUsername(username);
    return { data: response.data, status: response.status };
  } catch (error) {
    return error.response;
  }
});

// /forgot/reset-password
export const resetPassword = createAsyncThunk(
  "/forgot/reset-password",
  async (username, password) => {
    try {
      const response = await authApi.resetPassword(username, password);
      return { data: response.data, status: response.status };
    } catch (error) {
      return error.response;
    }
  }
);
