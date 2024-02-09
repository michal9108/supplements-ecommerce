import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {  createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import SuccesPage from "./pages/Succespage";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "productpage",
        element: <ProductPage />,
      },
      {
        path: "contact",
      },
      {
        path: "success",
        element: <SuccesPage />,
      }
    ],
  },{
    
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
