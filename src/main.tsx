import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import SuccesPage from "./pages/Succespage";
import { RouterProvider } from "react-router-dom";
import axios from "axios";


const isUserSignedIn = !!localStorage.getItem('token')


const router = createBrowserRouter([
  {
    path: "/",
    element:  isUserSignedIn ? <App /> : <Login /> ,
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
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  }
  

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
