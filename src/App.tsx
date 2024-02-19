import Navbar from "@/scenes/Global/navbar";
import Footer from "@/scenes/Global/footer";
import { Outlet } from "react-router-dom";



export default function App() {
  return (
    <div className="app">
    
        <Navbar />
        <Outlet />
        <Footer />
        
    </div>
  );
}
