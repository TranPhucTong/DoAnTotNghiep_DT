import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../reducers/slices/customerSlice";
import employeeSlice from "../reducers/slices/employeeSlice";
import routeSlice from "../reducers/slices/routeSlice";
import hireTeamSlice from "../reducers/slices/hireTeamSlice";
import updateEmployeeSlice from "../reducers/slices/updateEmployeeSlice";
import updateTeamSlice from "../reducers/slices/updateTeamSlice";
import contractSlice from "../reducers/slices/contractSlice";
import orderSlice from "../reducers/slices/orderSlice";
import adminSlice from "../reducers/slices/adminSlice";
const store = configureStore({
  reducer: {
    customer: customerSlice.reducer,
    employee: employeeSlice.reducer,
    contract: contractSlice.reducer,
    order: orderSlice.reducer,
    route: routeSlice.reducer,
    hireTeam: hireTeamSlice.reducer,
    updateEmployee: updateEmployeeSlice.reducer,
    updateTeam: updateTeamSlice.reducer,
    admin: adminSlice.reducer,
  },
});
export default store;
