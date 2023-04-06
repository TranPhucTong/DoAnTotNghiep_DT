import { createSlice } from "@reduxjs/toolkit";

const initialState = {isMainRoute: true};
const routeSlice = createSlice({
  name: "route",
  initialState: initialState,
  reducers: {
    changeRoutesss: (state,action) =>{
      state.isMainRoute = action.payload;
      console.log(action.payload);
    }
  }
});

export const { changeRoutesss } = routeSlice.actions;
export const routeState = (state) => state.route.isMainRoute;
  
export default routeSlice;