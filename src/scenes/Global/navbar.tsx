import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import Banner from "./banner";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

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
          <div className={`${flexBetween} w-5/6 mx-auto py-3  `}>
            <div className=" w-full gap-10">
              {/* ABOVE MD  1060px */}
              {/* LEFT SIDE */}

              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <NavLink
                      className=" text-4xl font-bold no-underline text-secondary-500  focus:text-primary-500 "
                      to="/"
                    >
                      BODYBUFF
                    </NavLink>
                  </div>

                  {/* MIDDLE  */}
                  <NavLink
                    className="text-xl no-underline font-semibold text-secondary-500 focus:text-primary-500"
                    to="/productpage"
                  >
                    PRODUCT
                  </NavLink>
                  <NavLink
                    className="text-xl no-underline font-semibold text-secondary-500 focus:text-primary-500"
                    to="/productpage"
                  >
                    STORE
                  </NavLink>
                  <NavLink
                    className="text-xl no-underline font-semibold text-secondary-500 focus:text-primary-500"
                    to="/store"
                  >
                    CONTACT
                  </NavLink>
                  {/* RIGHT SIDE */}
                  <div className={`${flexBetween} gap-8 text-xl no-underline"`}>
                     
                      <button
                        onClick={openCart}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          position: "relative",
                        }}
                        className="rounded-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="black"
                        >
                          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>

                        <div
                          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                          style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                          }}
                        >
                          {cartQuantity}
                        </div>
                      </button>
                    
                  </div>
                </div>
              ) : (
                <div className={`${flexBetween} w-full`}>
                  {" "}
                  <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-7 w-7 text-white" />
                  </button>
                  <NavLink
                    className=" text-4xl   font-bold  no-underline text-secondary-500  focus:text-primary-500 "
                    to="/"
                  >
                    BODYBUFF
                  </NavLink>
                  <div className={`${flexBetween} gap-8 text-xl no-underline"`}>
             
                    {cartQuantity > 0 ? (
                      <button
                        onClick={openCart}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          position: "relative",
                        }}
                        className="rounded-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                        >
                          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>

                        <div
                          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                          style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                          }}
                        >
                          {cartQuantity}
                        </div>
                      </button>
                    ) : (
                      <button
                        onClick={openCart}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          position: "relative",
                        }}
                        className="rounded-circle"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          fill="primary-100"
                        >
                          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>

                        <div
                          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                          style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                          }}
                        >
                          {cartQuantity}
                        </div>
                      </button>
                    )}
                  </div>
                </div>
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
                to="/store"
              >
                STORE
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
