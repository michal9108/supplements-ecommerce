import Navbar from "@/scenes/Global/navbar";
import Footer from "@/scenes/Global/footer";
import { ShoppingCartProvider } from "@/scenes/cart/ShoppingCartContext";

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <ShoppingCartProvider>
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  </ShoppingCartProvider>
  )
}
