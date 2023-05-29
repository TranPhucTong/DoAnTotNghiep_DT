import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name : "",
  gender : "",
  birthday : "",
  email : "",
  phone : ""
}

const updateEmployeeSlice = createSlice({
  name: "updateEmployee",
  initialState: initialState,
  reducers: {
    updateRequireEmployee: (state, action) => {
      state.id = action.payload._id
      state.name = action.payload.name 
      state.gender  = action.payload.gender
      state.birthday = action.payload.birthDate;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      console.log("Action: ", action);
      console.log("ID : ", state.phone);
    },
  },
});

export const {
  updateRequireEmployee
} = updateEmployeeSlice.actions;
export const updateEmployee = (state) => state.updateEmployee;

export default updateEmployeeSlice;
