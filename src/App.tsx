import Navbar from "@/scenes/navbar";

import Footer from "@/scenes/footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function App({
  isTopOfPage = false,
  selectedPage = () => {},
  setSelectedPage = () => {},
}) {
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Outlet />
      <Footer />
    </div>
    

  );
}
