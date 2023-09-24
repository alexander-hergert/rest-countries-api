import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/normalize.css";
import "./styles/index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiCountrySlice } from "./api/apiCountrySlice.js";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiCountrySlice}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
