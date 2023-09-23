import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import filterSlice from "./slices/filterSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    themes: themeSlice.reducer,
    filters: filterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("theme", JSON.stringify(state.themes));
  localStorage.setItem("filter", JSON.stringify(state.filters));
});

export default store;
