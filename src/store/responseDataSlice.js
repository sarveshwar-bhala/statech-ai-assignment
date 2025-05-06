import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export const { addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
