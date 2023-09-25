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
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:region",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          return fetch(
            `https://restcountries.com/v3.1/region/${params.region}`
          );
        },
      },
      {
        path: "/country/:name",
        element: <InnerPage />,
        errorElement: <ErrorPage />,
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        },
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
