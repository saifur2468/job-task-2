import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Home from "./Component/Home";
import App from "./App";
import Errorpage from './Component/Errorpage';
import Navbar from './Component/Navbar';
import product from "./Component/product";
import cart from "./Component/cart"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path:"/product",
        element:<product></product>
      },
      {
        path:"/cart",
        element:<cart></cart>
      }




    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <RouterProvider router={router} />
   
  </React.StrictMode>,
)