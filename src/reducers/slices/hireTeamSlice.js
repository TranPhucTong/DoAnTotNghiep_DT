import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // field: "",
  // totalPersonnel: Number,
  // duration: "",
  // workingTime: "",
  // tech: "",
  // startTime: "",
  // typeWork: "",
  // budget: Number,
  // info: {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   jobType: "",
  //   address: "",
  // },
};
const hireTeamSlice = createSlice({
  name: "hireteam",
  initialState: initialState,
  reducers: {
    updateRequire: (state, action) => {
      state.field = action.payload;
    },
    updateRequire2: (state, action) => {
      state.totalPersonnel = action.payload;
    },
    updateRequire3: (state, action) => {
      state.duration = action.payload;
    },
    updateRequire4: (state, action) => {
      state.workingTime = action.payload;
    },
    // updateRequire5: (state, action) => {
    //   state.tech = action.payload;
    //   console.log("action: ", action);
    // },
    updateRequire6: (state, action) => {
      state.startTime = action.payload;
    },
    updateRequire7: (state, action) => {
      state.typeWork = action.payload;
    },
    updateRequire8: (state, action) => {
      state.budget = action.payload;
    },
    // updateRequire9: (state, action) => {
    //   state.info = {
    //     name: action.payload.name,
    //     email: action.payload.email,
    //     phone: action.payload.phone,
    //     jobType: action.payload.jobTitle,
    //     address: action.payload.addressWork,
    //   };
    //   console.log("state: ", { ...state });
    //   console.log("action: ", action);
    // },
  },
});

export const {
  updateRequire,
  updateRequire2,
  updateRequire3,
  updateRequire4,
  // updateRequire5,
  updateRequire6,
  updateRequire7,
  updateRequire8,
  // updateRequire9,
} = hireTeamSlice.actions;
export const hireTeam = (state) => state.hireTeam;

export default hireTeamSlice;
