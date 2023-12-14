import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "@/pages/ProductPage";
// @ts-ignore
import storeItems from "@//data/items.json";
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
        element: (
          <ProductPage id={"price_1ONBwjH9dKBRlDkrsJgc1u8X"} price={11.77} />
        ),
      },

      {
        path: "coaching",
      },
      {
        path: "contact",
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
