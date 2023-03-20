import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    updatePage: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const getPage = (state) => state.page.value;
export const { updatePage } = pageSlice.actions;
export default pageSlice.reducer;
