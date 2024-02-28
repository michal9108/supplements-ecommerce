import Navbar from "./scenes/Global/navbar";
import Footer from "./scenes/Global/footer";
import { Outlet } from "react-router-dom";
import { ProductCartProvider } from "./scenes/cart/ProductCartContext";

export default function App() {
  return (
    <div className="app">
       <ProductCartProvider>
      <Navbar />
      <Outlet />
      <Footer />
      </ProductCartProvider>
    </div>
  );
}
