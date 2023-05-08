import { createAsyncThunk } from "@reduxjs/toolkit";
import contractApi from "../../api/contractApi";

export const getContracts = createAsyncThunk(
  "contract/customer",
  async (orderStatus) => {
    try {
      const res = await contractApi.getContracts(orderStatus);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const cancelContract = createAsyncThunk(
  "contract/cancel",
  async ({ contractId, reason }) => {
    try {
      const res = await contractApi.cancelContract(contractId, reason);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
