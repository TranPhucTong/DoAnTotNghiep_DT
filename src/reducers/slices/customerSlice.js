import { createSlice } from "@reduxjs/toolkit";
import RegisterInfo from "../../pages/register-info/RegisterInfo";
import { login, register, registerInfo } from "../actions/authAction";
let customer = JSON.parse(localStorage.getItem("customer"));

const initialState = customer
  ? { isLoggedIn: true, customer: customer }
  : { isLoggedIn: false, customer: null };

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
    [register.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      if (!action.payload.data) return;
      const { phone } = action.payload.data;
      state.customer.phone = phone;
    },
    [registerInfo.fulfilled]: (state, action) => {
      if (!action.payload.data.customer) return;
      const { customer, accessToken } = action.payload.data;
      state.isLoggedIn = true;
      state.customer = customer;
      localStorage.setItem("access_token", accessToken);
    },
  },
});

export const selectCustomer = (state) =>
  state.customer ? state.customer : null;
export const { setLogin } = customerSlice.actions;
export default customerSlice;
