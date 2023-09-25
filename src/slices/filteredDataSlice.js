import { createSlice } from "@reduxjs/toolkit";

const filteredDataSlice = createSlice({
  name: "filteredData",
  initialState: [],
  reducers: {
    initial: (state, action) => {
      return (state = action.payload);
    },
    addFilter: (state, action) => {
      if (action.payload === "") {
        return state;
      }
      return state.filter((item) => item.region === action.payload);
    },
  },
});

export const { initial, addFilter } = filteredDataSlice.actions;

export default filteredDataSlice;
