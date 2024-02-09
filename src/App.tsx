import Navbar from "@/scenes/Global/navbar";
import Footer from "@/scenes/Global/footer";
import { ProductCartProvider } from "@/scenes/cart/ShoppingCartContext";
import { Outlet } from "react-router-dom";



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
