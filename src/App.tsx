import Navbar from  '@/shared/navbar'
import Footer from "@/shared/footer";
import { Outlet } from "react-router-dom";
import { ProductCartProvider } from "@/scenes/cart/ProductCartContext";

export default function App() {
  return (
    <div className="app">
       <ProductCartProvider>
      <Navbar />
      <div className=' flex-1'>      <Outlet />
</div>
      <Footer />
      </ProductCartProvider>
    </div>
  );
}
