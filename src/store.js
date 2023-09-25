import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";
import filteredDataSlice from "./slices/filteredDataSlice";
import searchedDataSlice from "./slices/searchDataSlice";
import { apiCountrySlice } from "./api/apiCountrySlice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    filteredData: filteredDataSlice.reducer,
    searchedData: searchedDataSlice.reducer,
    themes: themeSlice.reducer,
    filters: filterSlice.reducer,
    [apiCountrySlice.reducerPath]: apiCountrySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCountrySlice.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("data", JSON.stringify(state.data));
  localStorage.setItem("filteredData", JSON.stringify(state.filteredData));
  localStorage.setItem("searchedData", JSON.stringify(state.searchedData));
  localStorage.setItem("theme", JSON.stringify(state.themes));
  localStorage.setItem("filter", JSON.stringify(state.filters));
});

export default store;
