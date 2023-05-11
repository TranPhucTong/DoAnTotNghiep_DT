import { createSlice } from "@reduxjs/toolkit";
import { login, register, registerInfo } from "../actions/authAction";
import {
  getFreelancerByPage,
  getListEmployee,
  getListEmployeeByPhone,
  getListEmployeeByType,
} from "../actions/employeeAction";
let employee = {
  id: "",
  name: "",
  birthDate: "",
  gender: "",
  email: "",
  skill: [],
  field: "",
  introduce: "",
  review: 0,
  rentFrom: 0,
  rentTo: 0,
  background: "",
  avatar: "",
};

const initialState = {
  employee,
  listEmployee: [],
  totalPage: 0,
  pageSelect: 0,
};

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
    [getListEmployeeByType.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listEmployee = action.payload.data;
    },
    [getListEmployeeByPhone.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.employee = action.payload.data;
    },
    [getFreelancerByPage.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      const { totalPage, results } = action.payload.data;
      state.listEmployee = results;
      state.totalPage = totalPage;
    },
  },
});

export const listEmployee = (state) => state.employee.listEmployee;
export const selectEmployee = (state) =>
  state.employee.employee ? state.employee.employee : null;
export const totalPage = (state) => state.employee.totalPage;
export const { changeEmployee } = employeeSlice.actions;
export default employeeSlice;
