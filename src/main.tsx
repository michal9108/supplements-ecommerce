import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "@/pages/SignUpPage";
import LogInPage from "@/pages/LogInPage";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import SuccesPage from "./pages/Succespage";
import { RouterProvider } from "react-router-dom";
import axios from "axios";


axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

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
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
