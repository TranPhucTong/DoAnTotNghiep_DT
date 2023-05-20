import { createAsyncThunk } from "@reduxjs/toolkit";
import orderApi from "../../api/orderApi";
import orderTeamApi from "../../api/orderTeamApi";

export const getListOrderByCustomer = createAsyncThunk(
  "orders/customer",
  async (orderStatus) => {
    try {
      const res = await orderApi.getListOrderByCustomer(orderStatus);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
export const cancelOrder = createAsyncThunk(
  "orders/cancel",
  async (dataCancel) => {
    try {
      const res = await orderTeamApi.cancelOrder(dataCancel);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
