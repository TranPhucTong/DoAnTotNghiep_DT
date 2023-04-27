import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../reducers/slices/customerSlice";
import employeeSlice from "../reducers/slices/employeeSlice";
import routeSlice from "../reducers/slices/routeSlice";
import hireTeamSlice from "../reducers/slices/hireTeamSlice";
import updateEmployeeSlice from "../reducers/slices/updateEmployeeSlice";
const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    employee: employeeSlice.reducer,
    route: routeSlice.reducer,
    hireTeam: hireTeamSlice.reducer,
    updateEmployee: updateEmployeeSlice.reducer,
  },
});
export default store;
