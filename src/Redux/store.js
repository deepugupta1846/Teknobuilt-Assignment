import { configureStore } from "@reduxjs/toolkit";
import teslaNewsReducer from "./teslaNewsSlice";
export const store = configureStore({
  reducer: {
    teslaNews: teslaNewsReducer,
  },
});
