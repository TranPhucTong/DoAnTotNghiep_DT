import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  nameTeam: "",
  field: "",
  leader: {},
  typeWork: "",
  total : Number
};

const updateTeamSlice = createSlice({
  name: "updateTeam",
  initialState: initialState,
  reducers: {
    updateRequireTeam: (state, action) => {
      state.id = action.payload._id
      state.nameTeam = action.payload.name
      state.field = action.payload.field 
      state.leader = action.payload.leader 
      state.total = action.payload.totalEmployee
      state.typeWork = action.payload.typeWork
    }}
});

export const { updateRequireTeam } = updateTeamSlice.actions;
export const updateTeam = (state) => state.updateTeam;

export default updateTeamSlice;