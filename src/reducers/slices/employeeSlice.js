import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "../actions/authAction";
import {
  getListEmployee,
  getProfileEmployee,
  updateProfileEmployee,
  updateSpotlightEmployee,
} from "../actions/employeeAction";
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

const initialState = { employee, listEmployee: [], account: "" };

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    changeEmployee: (state, action) => {
      console.log(action.payload);
      if (!action.payload) return;
      state.employee = action.payload;
    },
    setAccount: (state, action) => {
      console.log(action.payload);
      if (!action.payload) return;
      state.account = action.payload;
    },
  },
  extraReducers: {
    [getListEmployee.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listEmployee = action.payload.data;
    },
    [getProfileEmployee.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.employee = action.payload.data;
    },
    [updateProfileEmployee.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.employee = action.payload.data;
    },
    [updateSpotlightEmployee.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.employee.spotlight = action.payload.data;
    },
  },
});

export const listEmployee = (state) =>
  state.employee.listEmployee ? state.employee.listEmployee : null;
export const selectEmployee = (state) =>
  state.employee.employee ? state.employee.employee : null;
export const selectAccountEmployee = (state) =>
  state.employee.account ? state.employee.account : null;
export const { changeEmployee, setAccount } = employeeSlice.actions;
export default employeeSlice;
