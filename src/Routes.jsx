import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InnerPage from "./pages/InnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        children: [
          {
            path: ":name",
            element: <InnerPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
