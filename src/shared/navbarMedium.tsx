import { NavLink } from "react-router-dom";
import UserIcon from "./UserIcon";

import Logo from "./Logo";
import WishlistIcon from "./navbarWishlistIcon";
import CartIcon from "./navbarCartIcon";
function navbarMedium() {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className={`${flexBetween} w-full relative`}>
      {/* LEFT  */}
      {/* LOGO */}

      <div className={`${flexBetween} gap-10 text-sm`}>
        <NavLink
          className=" text-4xl   font-bold  no-underline text-black focus:text-primary-500 "
          to="/"
        >
          <Logo />
        </NavLink>
      </div>

      {/* MIDDLE  */}

     

      {/* RIGHT SIDE */}
      <div className={`${flexBetween} gap-3 text-xl no-underline`}>
        {/* ACCOUNT */}

        <NavLink to="/account">
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

export default navbarMedium;
