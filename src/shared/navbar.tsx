import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { useProductCart } from "@/scenes/cart/ProductCartContext";
import Banner from "@/shared/banner";
import NavbarSmall from "./navbarSmall";

import NavbarMedium from "./navbarMedium";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import ButtonLink from "./ButtonLink";
import { Stack } from "react-bootstrap";
import { ShoppingCartType } from "./types";

const Navbar = () => {

  // const { isMenuToggled, closeMenu } = useProductCart();
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = "bg-primary-100 drop-shadow ";



  return (
    <nav className="content">
      <span>
        <div className={`${navbarBackground} fixed top-0 w-full z-50 `}>
          {/* BANNER */}

          <Banner />
          <div className={`${flexBetween} w-5/6 lg:w-4/6 mx-auto py-3  `}>
            <div className=" w-full ">
              {/* ABOVE MD  1060px */}

              {isAboveMediumScreens ? <NavbarMedium /> : <NavbarSmall />}
            </div>
          </div>
        </div>

        {/*  MOBILE MENU  */}

       
       
       
      </span>
    </nav>
  );
};

export default Navbar;
