import { combineReducers } from "@reduxjs/toolkit";
import bannerReducer from "./features/banner/bannerSlice.js";

const rootReducer = combineReducers({
  banner: bannerReducer,
});

export default rootReducer;
