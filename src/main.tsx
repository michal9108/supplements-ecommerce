import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SuccesPage from "./pages/Succespage";
import AccountPage from "./pages/AccountPage";
import { RouterProvider } from "react-router-dom";
import CancelPage from "./pages/CancelPage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Returns from "./pages/Returns";
import WishlistPage from "./pages/WishlistPage";

const isUserSignedIn = !!localStorage.getItem("token");

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
        path: "/productpage",
        element: <ProductPage />,
      },
      {
        path: "/blog",
        element:<Blog />
      },
      {
        path: "/terms-of-service",
        element:<TermsOfService />
      },
      {
        path: "/privacy-policy",
        element:<PrivacyPolicy />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/returns-and-faq",
        element:<Returns />
      },
      {
        path: "/success",
        element: <SuccesPage />,
      },
      {
        path: "/cancel",
        element: <CancelPage/>,
      },
      {
        path: "/account",
        element: isUserSignedIn ? <AccountPage /> : <LoginPage />,
      },
      {
        path: "/wishlist",
        element: isUserSignedIn ? <WishlistPage /> : <LoginPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 
    <RouterProvider router={router} />
 
);
