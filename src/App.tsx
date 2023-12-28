import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";
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
