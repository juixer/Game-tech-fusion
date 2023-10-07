import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact us/Contact";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import EditProfile from "../Pages/EditProfile/EditProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../Services.json"),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/editProfile",
        element: <PrivateRoute><EditProfile /></PrivateRoute>,
      },
    ],
  },
]);
export default router;
