import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { useProductCart } from "@/scenes/cart/ProductCartContext";
import Banner from "@/shared/banner";
import NavbarSmall from "./navbarSmall";
import NavbarMobileMenu from "./navbarMobileMenu";
import NavbarMedium from "./navbarMedium";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Navbar = () => {

const {isMenuToggled, setIsMenuToggled } = useProductCart();
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
        
              {isAboveMediumScreens ? (
               <NavbarMedium/>
              ) : (
                <NavbarSmall />
              )}
            </div>
          </div>
        </div>

         {/*  MOBILE MENU  */}

         {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed left-0 bottom-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl rounded-lg">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12 ">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400 " />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <NavLink
                className="text-xl font-semibold no-underline text-secondary-500 focus:text-primary-500 "
                to="/productpage"
              >
                PRODUCT
              </NavLink>
              <NavLink
                className="text-xl  font-semibold no-underline text-secondary-500 focus:text-primary-500"
                to="/coaching"
              >
                COACHING
              </NavLink>
              <NavLink
                className="text-xl  font-semibold no-underline text-secondary-500 focus:text-primary-500"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
