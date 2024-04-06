import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Events from "../Pages/Events/Events";
import Gallery from "../Pages/Gallery/Gallery";
import Blog from "../Pages/Blog/Blog";
import Reservation from "../Pages/Reservation/Reservation";
import Contact from "../Pages/Contact/Contact";

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
    ],
  },
]);
