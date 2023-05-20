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
    setListContractFilter: (state, action) => {
      const condition = action.payload.toLowerCase();
      const listContractFilter = state.listContract.filter(
        (contract) =>
          contract.nameProject.toLowerCase().includes(condition) ||
          contract.employee.name.toLowerCase().includes(condition)
      );
      state.listFilterContract = listContractFilter;
    },
    setIsRatingContract: (state, action) => {
      const contractId = action.payload;
      const index = state.listContract.findIndex(
        (item) => item._id === contractId
      );
      state.listContract[index]["isRating"] = true;
    },
    changeTypeContract: (state, action) => {
      const type = action.payload;
      state.typeContract = type;
    },
  },
  extraReducers: {
    [getContracts.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listContract = action.payload.data;
      state.listFilterContract = null;
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
export const listFilterContractStore = (state) =>
  state.contract.listFilterContract;
export const selectContract = (state) => state.contract.selectContract;
export const selectTypeContract = (state) => state.contract.typeContract;

export const {
  setSelectContract,
  setListContractFilter,
  setIsRatingContract,
  changeTypeContract,
} = contractSlice.actions;
export default contractSlice;
