import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <main data-theme="light">
        <RouterProvider router={router} />
      </main>
    </Provider>
  );
}

export default App;
