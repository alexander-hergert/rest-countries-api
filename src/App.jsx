import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themes);

  return (
    <main data-theme={theme}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
