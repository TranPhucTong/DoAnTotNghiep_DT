import { createSlice } from "@reduxjs/toolkit";
import { getContracts } from "../actions/contractAction";

const initialState = {
  listContract: [],
};

const contractSlice = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getContracts.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listContract = action.payload.data;
    },
  },
});

export const listContractStore = (state) => state.contract.listContract;

export const {} = contractSlice.actions;
export default contractSlice;
