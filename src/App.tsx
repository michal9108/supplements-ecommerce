import Navbar from "@/scenes/Global/navbar";
import Footer from "@/scenes/Global/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function App() {
  return (
    <div className="app ">
      <Navbar />

      <Outlet />
      <Footer />
    </div>
  );
}
