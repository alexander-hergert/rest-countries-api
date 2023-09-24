import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import filterSlice from "./slices/filterSlice";
import { apiCountrySlice } from "./api/apiCountrySlice";

const store = configureStore({
  reducer: {
    themes: themeSlice.reducer,
    filters: filterSlice.reducer,
    [apiCountrySlice.reducerPath]: apiCountrySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCountrySlice.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("theme", JSON.stringify(state.themes));
  localStorage.setItem("filter", JSON.stringify(state.filters));
});

export default store;
