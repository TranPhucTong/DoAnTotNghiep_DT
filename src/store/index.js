import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../reducers/slices/customerSlice";
import employeeSlice from "../reducers/slices/employeeSlice";
const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    employee: employeeSlice.reducer,
  },
});
export default store;
