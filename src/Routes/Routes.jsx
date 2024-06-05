import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Events from "../Pages/Events/Events";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blog/Blog";
import Reservation from "../Pages/Reservation/Reservation";
import Contact from "../Pages/Contact/Contact";
import Order from "../Pages/Orders/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu
        ></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "blog",
        element:<Blog></Blog>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      }
    ],
  },
]);
