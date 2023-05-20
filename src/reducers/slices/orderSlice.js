import { createSlice } from "@reduxjs/toolkit";
import { cancelOrder, getListOrderByCustomer } from "../actions/orderAction";

const initialState = {
  listOrder: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setSelectOrder: (state, action) => {
      state.selectOrder = action.payload;
    },
    setListOrderFilter: (state, action) => {
      const condition = action.payload.toLowerCase();
      const listOrderFilter = state.listOrder.filter((order) =>
        order._id.toLowerCase().includes(condition)
      );
      state.listFilterOrder = listOrderFilter;
    },
  },
  extraReducers: {
    [getListOrderByCustomer.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.listOrder = action.payload.data;
      state.listFilterOrder = null;
    },
    [cancelOrder.fulfilled]: (state, action) => {
      const { orderId, reason } = action.payload.data;
      const index = state.listOrder.findIndex((item) => item._id === orderId);
      state.listOrder[index].status = "cancel";
      state.listOrder[index].reason = reason;
    },
  },
});

export const listOrderStore = (state) => state.order.listOrder;
export const listFilterOrderStore = (state) => state.order.listFilterOrder;
export const selectOrder = (state) => state.order.selectOrder;

export const { setSelectOrder, setListOrderFilter } = orderSlice.actions;
export default orderSlice;
