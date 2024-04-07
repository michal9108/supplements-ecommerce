import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useProductCart } from "@/scenes/cart/ProductCartContext";

import UserIcon from "./UserIcon";
import Logo from "./Logo";
import WishlistIcon from "./navbarWishlistIcon";
import CartIcon from "./navbarCartIcon";

function SmallNavbar() {
  
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <div className={`${flexBetween} w-full`}>
      {" "}
      <button
        className="rounded-full bg-black p-2 "
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <Bars3Icon className="h-7 w-7 text-white" />
      </button>
      {/* MIDDLE  */}
      {/* LOGO */}
      <NavLink
        className="flex items-center justify-center w-full text-sm  inset-x-0 mx-auto"
        to="/"
      >
        <Logo />
      </NavLink>
      {/* RIGHT  */}
      {/* ACCOUNT */}
      <div className={`${flexBetween} gap-3 text-xl no-underline"`}>
        <NavLink to="/account">
          {" "}
          <UserIcon />
        </NavLink>

        {/* WISHLIST */}

        <NavLink to="/wishlist">
          <WishlistIcon />
        </NavLink>

        {/* CART */}

        <CartIcon />
      </div>
    </div>
  );
}

export default SmallNavbar;
