import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./responseDataSlice.js";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
