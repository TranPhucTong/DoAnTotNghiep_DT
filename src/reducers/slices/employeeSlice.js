import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  loginAdmin,
  register,
  registerInfo,
} from "../actions/authAction";
import { getListEmployee } from "../actions/employeeAction";
let employee = {
  id: "",
  name: "",
  birthDate: "",
  gender: "",
  gmail: "",
  skill: [],
  field: "",
  introduce: "",
  review: 0,
  rentFrom: 0,
  rentTo: 0,
  background: "",
  avatar: "",
};

const initialState = { employee, listEmployee: [] };

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    changeEmployee: (state, action) => {
      console.log(action.payload);
      if (!action.payload) return;
      state.employee = action.payload;
    },
  },
  extraReducers: {
    [getListEmployee.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listEmployee = action.payload.data;
    },
    [loginAdmin.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      const { accessToken, employee } = action.payload.data;
      state.employee = employee;
      localStorage.setItem("access_token", accessToken);
    },
  },
});

export const listEmployee = (state) =>
  state.employee.listEmployee ? state.employee.listEmployee : null;
export const selectEmployee = (state) =>
  state.employee.employee ? state.employee.employee : null;
export const { changeEmployee } = employeeSlice.actions;
export default employeeSlice;
