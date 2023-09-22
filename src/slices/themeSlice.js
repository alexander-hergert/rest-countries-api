import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themes",
  initialState:  "light",
  reducers: {
    changeTheme: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice;
