import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themes",
  initialState: "light",
  reducers: {
    changeTheme: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice;
