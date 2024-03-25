import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";

function NavbarMobileMenu() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
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
          to="/"
        >
          FAVORITES
        </NavLink>

        <NavLink
          className="text-xl  font-semibold no-underline text-secondary-500 focus:text-primary-500"
          to="/store"
        >
          STORE
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarMobileMenu;
