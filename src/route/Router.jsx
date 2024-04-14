import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthRoute from "../features/auth/components/AuthRoute";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import SettingPage from "../pages/SettingPage";
import TestPage from "../pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <AuthRoute />,
  },
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
