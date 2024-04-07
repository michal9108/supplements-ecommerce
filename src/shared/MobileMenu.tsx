import Offcanvas from "react-bootstrap/esm/Offcanvas";
import ButtonLink from "./ButtonLink";
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { SmallMobileMenuType } from "./types";
import { useProductCart } from "@/scenes/cart/ProductCartContext";

const MobileMenu = ({ isMenuToggled }: SmallMobileMenuType) => {
  const { closeMenu } = useProductCart();
  return (
    <Offcanvas
      show={isMenuToggled}
      onHide={closeMenu}
      placement="start"
      className="rounded-lg"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className=" flex justify-center items-center"></Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="  flex flex-col gap-3 items-center justify-center h-full content-center">
        <div
          onClick={closeMenu}
          className=" flex flex-col font-bold w-full justify-center items-center  absolute top-1/3 underline-offset-4"
        >
          <h3 className="uppercase text-2xl  font-bold">Menu</h3>
          <NavLink to="/" className="no-underline mt-4">
            <p className="  uppercase text-xl text-black">Shop</p>
          </NavLink>
          <NavLink to="/blog" className="no-underline">
            <p className="uppercase text-xl text-black ">Blog</p>
          </NavLink>
          <NavLink to="/contact" className="no-underline">
            <p className="uppercase text-xl text-black">Contact</p>
          </NavLink>

          {/* <img src={emptyCart} alt="" /> */}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileMenu;
