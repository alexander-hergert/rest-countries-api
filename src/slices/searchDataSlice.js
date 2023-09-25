import { createSlice } from "@reduxjs/toolkit";

const searchedDataSlice = createSlice({
  name: "searchedData",
  initialState: [],
  reducers: {
    initial: (state, action) => {
      return (state = action.payload);
    },
    searchFilter: (state, action) => {
      if (action.payload === "") {
        return state;
      }
      return state.filter((item) =>
        item.name.common.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const { initial, searchFilter } = searchedDataSlice.actions;

export default searchedDataSlice;
