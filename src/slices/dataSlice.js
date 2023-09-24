import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    loadCountries: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { loadCountries } = dataSlice.actions;

export default dataSlice;
