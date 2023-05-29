import { createSlice } from "@reduxjs/toolkit";
import { getNotificationsOfAdmin } from "../actions/notificationAction";

const initialState = {
  notifcations: [],
  totalNotificationNotSeen: 0,
};

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getNotificationsOfAdmin.fulfilled]: (state, action) => {
      if (!action.payload.data) return;
      state.notifications = action.payload.data;
      state.totalNotificationNotSeen = action.payload.data.filter(
        (item) => !item.isSeen
      ).length;
    },
  },
});

export const notifications = (state) => state.admin.notifications;
export const totalNotificationNotSeen = (state) =>
  state.admin.totalNotificationNotSeen
    ? state.admin.totalNotificationNotSeen
    : 0;
export const {} = adminSlice.actions;
export default adminSlice;
