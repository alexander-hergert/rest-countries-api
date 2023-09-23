import { createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import InnerPage from "./pages/InnerPage";

import Infos from "./components/Infos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/countries",
        element: <InnerPage />,
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        },
        children: [
          {
            path: "/countries/:name",
            element: <Infos />,
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
