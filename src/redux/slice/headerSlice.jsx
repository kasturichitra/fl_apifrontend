import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageTitle: "Guides",
  openMenu: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setPageTitle: (state, action) => {
      state.pageTitle = action.payload;
    },
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
});

export const { setPageTitle, setOpenMenu } = headerSlice.actions;
export default headerSlice.reducer;
