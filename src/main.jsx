import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Home from "./Component/Home";
import App from "./App";
import Errorpage from "./Component/Errorpage";
import Product from "./Component/product";
import Cart from "./Component/cart";
import ProductDetailes from "./Component/ProductDetailes";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
  path: "product/:id",
  element: <ProductDetailes />,
  loader: () => fetch("/product.json"),
}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="colored"
    />
    <RouterProvider router={router} />
  </React.StrictMode>
);