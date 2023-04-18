import { createSlice } from "@reduxjs/toolkit";

const initialState = {isSecondRoute: true};
const routeSlice = createSlice({
  name: "route",
  initialState: initialState,
  reducers: {
    changeRoutesss: (state,action) =>{
      state.isSecondRoute = action.payload;
      // console.log(action.payload);
      console.log("action: ", action);
    }
  }
});

export const { changeRoutesss } = routeSlice.actions;
export const routeState = (state) => state.route.isSecondRoute;
  
export default routeSlice;