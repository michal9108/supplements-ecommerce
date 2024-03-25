import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NavLink, Link } from "react-router-dom";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import Banner from "@/shared/banner";
import UserIcon from "./UserIcon";
import NavbarSmall from "./navbarSmall";
import NavbarMobileMenu from "./navbarMobileMenu";
import NavbarMedium from "./navbarMedium";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");

  const { openCart, cartQuantity } = useProductCart();

  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = "bg-primary-100 drop-shadow ";

  return (
    <nav className="content">
      <span>
        <div className={`${navbarBackground} fixed top-0 w-full z-50 `}>
          {" "}
          <Banner />
          <div className={`${flexBetween} w-5/6 lg:w-4/6 mx-auto py-3  `}>
            <div className=" w-full ">
              {/* ABOVE MD  1060px */}
              {/* LEFT SIDE */}

              {isAboveMediumScreens ? (
               <NavbarMedium/>
              ) : (
                <NavbarSmall />
              )}
            </div>
          </div>
        </div>

        {/*  MOBILE MENU  */}
        {!isAboveMediumScreens && isMenuToggled && <NavbarMobileMenu />}
      </span>
    </nav>
  );
};

export default Navbar;
