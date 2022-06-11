import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Error from "../views/Error/Error";
import Home from "../views/home/Home";
const Router = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Navigation />,
      children: [
        { index: true, element: <Home /> },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        { path: "*", element: <Error /> },
      ],
    },
  ];

  // // The useRoutes() hook allows you to define your routes as JavaScript objects
  // // instead of <Routes> and <Route> elements. This is really just a style
  // // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(routes);
  return <div>{element}</div>;
};

export default Router;
