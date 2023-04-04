import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  field: "",
  numberEmployee: "",
  workLength: "",
  workWeek: "",
  tech: "",
  workStart: "",
  workForm: "",
  workWage:"",
  info: {
    name: "",
    email:"",
    phone:"",
    jobType: "",
    address:"",
  }
 };
const hireTeamSlice = createSlice({
  name: "hireteam",
  initialState: initialState,
  reducers: {
    updateRequire: (state, action) => {
      state.field = action.payload;
      console.log("state: ", { ...state });
      console.log("action: ", action);
    },
    updateRequire2: (state, action) => {
      state.numberEmployee = action.payload;
      console.log("state: ", {...state});
      console.log("action: ", action);
    },
  },
});

export const { updateRequire, updateRequire2 } = hireTeamSlice.actions;
export const hireTeam = (state) => state.hireTeam;

export default hireTeamSlice;
