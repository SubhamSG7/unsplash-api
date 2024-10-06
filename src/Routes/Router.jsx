import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Wrapper from "../Components/Wrapper";
import Search from "../Components/Search";
import { FetchImages, handleSearchQuery } from "../APIS/LoaderApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { index: true, element: <Home />, loader: () => FetchImages() },
      {
        path: "/Search",
        element: <Search />,
        loader: ({ request }) => handleSearchQuery(request),
      },
    ],
  },
]);
export const AllRoutes = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
