import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import { rootPage, userPage, postPage } from "./pages";
import { ErrorBoundary } from "./components";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      element: <rootPage.Root />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "users",
          element: <userPage.Users />,
          loader: userPage.loader(queryClient),
          action: userPage.action(queryClient)
        },
        {
          index: true,
          element: <postPage.PostsListPage />,
          loader: postPage.loader(queryClient),
          action: postPage.action(queryClient)
        }
      ]
    }
  ]);