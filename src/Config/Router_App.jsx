import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Products_Details } from "../Components/Products_Details";
import { Product } from "../Components/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Product />} />
      <Route path="/product/:id" element={<Products_Details />} />
    </Route>
  )
);

const Router_App = () => {
  return <RouterProvider router={router} />;
};

export { Router_App };
