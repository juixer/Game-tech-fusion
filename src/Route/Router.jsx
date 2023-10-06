import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact us/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/blog',
          element:<Blogs/>
        },
        {
          path:'/service/:id',
          element:<ServiceDetails/>,
          loader: () => fetch('../Services.json')
        },
        {
          path:'/about',
          element: <AboutUs/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      ]
    },
  ]);
  export default router