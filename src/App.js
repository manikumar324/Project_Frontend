
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/Signup";
import Recipes from "./Components/Recipes/Recipes";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import DosaMenu from "./Components/DosaMenu/DosaMenu";
import About from "./Components/About";
import NotFound from "./Components/NotFound/NotFound";
import OrderForm from "./Components/OrderForm/OrderForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/user-login",
      element: <Login />,
    },
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/recipes/menu-list",
      element: <Recipes />,
    },
    {
      path: "/recipes-about-section",
      element: <About />,
    },
    {
      path: "/user-change-password",
      element: <UpdatePassword />,
    },
    {
      path: "/recipeslist/:itemId",
      element: <DosaMenu />,
    },
    {
      path: "/item-order-form",
      element: <OrderForm />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;


