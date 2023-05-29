import { createAsyncThunk } from "@reduxjs/toolkit";
import notificationApi from "../../api/notificationApi";

export const seenNotification = createAsyncThunk(
  "notification/seen",
  async (notificationId) => {
    try {
      const res = await notificationApi.seenNotification(notificationId);
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);

export const getNotificationsOfAdmin = createAsyncThunk(
  "notifications",
  async () => {
    try {
      const res = await notificationApi.getNotificationsOfAdmin();
      return { data: res.data, status: res.status };
    } catch (error) {
      return error.response;
    }
  }
);
