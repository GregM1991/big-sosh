import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { Root, userPage } from "./pages";
import { ErrorBoundary } from "./components";

export const createRouter = (queryClient: QueryClient) => createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "users",
        element: <userPage.Users />,
        loader: userPage.loader(queryClient),
        action: userPage.action(queryClient),
      }
    ],
  },
]);