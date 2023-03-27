import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../reducers/slices/customerSlice";
const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
  },
});
export default store;
