import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Store } from "@/scenes/cart/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import storeItems from "@//data/items.json"
import { ShoppingCartProvider } from "@/scenes/cart/ShoppingCartContext";

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
        element: <ProductPage id={1} price={11.77}        
       />
      },

      {
        path: "coaching",
       
      },
      {
        path: "contact",
      },
      {
        path: "store",
        element: <Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ShoppingCartProvider>

    <RouterProvider router={router} />
    </ShoppingCartProvider>

  </React.StrictMode>,
);
