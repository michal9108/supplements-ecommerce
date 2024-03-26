import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { useProductCart } from "@/scenes/cart/ProductCartContext";
import Banner from "@/shared/banner";
import NavbarSmall from "./navbarSmall";
import NavbarMobileMenu from "./navbarMobileMenu";
import NavbarMedium from "./navbarMedium";

const Navbar = () => {


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
