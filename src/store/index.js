import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../reducers/slices/customerSlice";
import employeeSlice from "../reducers/slices/employeeSlice";
import routeSlice from "../reducers/slices/routeSlice";
import hireTeamSlice from "../reducers/slices/hireTeamSlice";
const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    employee: employeeSlice.reducer,
    route: routeSlice.reducer,
    hireTeam: hireTeamSlice.reducer,
  },
});
export default store;
