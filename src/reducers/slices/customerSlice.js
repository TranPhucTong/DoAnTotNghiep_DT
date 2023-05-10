import { createSlice } from "@reduxjs/toolkit";
import { login, register, registerInfo } from "../actions/authAction";
import { getCustomer } from "../actions/customerAction";
let customer = {
  phone: "",
  name: "",
};

const initialState = { isLoggedIn: false, customer: null };

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    logOut: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.customer = null;
    },
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
    setFriend: (state, action) => {
      state.group = null;
      state.friend = action.payload;
    },
    setNullFriend: (state) => {
      state.friend = null;
    },
    changeInfo: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (!action.payload.data.customer) return;
      const { accessToken, customer } = action.payload.data;
      state.isLoggedIn = true;
      state.customer = customer;
      localStorage.setItem("access_token", accessToken);
    },
    [login.fulfilled]: (state, action) => {
      if (!action.payload.data.customer) return;
      const { accessToken, customer } = action.payload.data;
      state.isLoggedIn = true;
      state.customer = customer;
      localStorage.setItem("access_token", accessToken);
    },
    [getCustomer.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      const customer = action.payload.data;
      state.customer = customer;
      state.isLoggedIn = true;
    },
    [registerInfo.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      const { customer, accessToken } = action.payload.data;
      state.isLoggedIn = true;
      state.customer = customer;
      localStorage.setItem("access_token", accessToken);
    },
    [register.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      const { customer } = action.payload.data;
      state.customer = customer;
    },
  },
});

export const selectCustomer = (state) =>
  state.customer.customer ? state.customer.customer : null;

export const isLoggedIn = (state) => state.customer.isLoggedIn;
export const { setLogin, setLogout } = customerSlice.actions;
export default customerSlice;
