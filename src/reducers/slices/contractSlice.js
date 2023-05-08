import { createSlice } from "@reduxjs/toolkit";
import { cancelContract, getContracts } from "../actions/contractAction";

const initialState = {
  listContract: [],
};

const contractSlice = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {
    setSelectContract: (state, action) => {
      state.selectContract = action.payload;
    },
  },
  extraReducers: {
    [getContracts.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listContract = action.payload.data;
    },
    [cancelContract.fulfilled]: (state, action) => {
      const { contractId, reason } = action.payload.data;
      const index = state.listContract.findIndex(
        (item) => item._id === contractId
      );
      state.listContract[index].status = "cancel";
      state.listContract[index].reason = reason;
    },
  },
});

export const listContractStore = (state) => state.contract.listContract;
export const selectContract = (state) => state.contract.selectContract;

export const { setSelectContract } = contractSlice.actions;
export default contractSlice;
