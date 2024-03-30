import { NavLink } from "react-router-dom";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import UserIcon from "./UserIcon";
import { useEffect, useState } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HearIconOutlined } from "@heroicons/react/24/outline";
import Logo from "./Logo"
function navbarMedium() {
  const { openCart, cartQuantity, toggleFavorite, isProductFavorite } =
    useProductCart();
  const [isFavorite, setIsFavorite] = useState(false);
  const flexBetween = "flex items-center justify-between";

  useEffect(() => {
    // For demonstration purposes, I'm setting a productId. You'd likely get this from the selected product or another source.
    const productId = "price_1OhJA3H9dKBRlDkrzq4XCurD"; // Replace with actual productId
    setIsFavorite(isProductFavorite(productId));
  }, [isProductFavorite]);

  return (
    <div className={`${flexBetween} w-full`}>
      <div className={`${flexBetween} gap-10 text-sm`}>
      <NavLink
        className=" text-4xl   font-bold  no-underline text-black focus:text-primary-500 "
        to="/"
      >
           <Logo/>
      </NavLink>
  
      </div>

      {/* MIDDLE  */}

      <div className={`${flexBetween}  text-sm`}>
        <NavLink
          className="text-xl no-underline font-bold text-black focus:text-primary-500"
          to="/"
        >
          PRODUCTS
        </NavLink>
      </div>

      {/* RIGHT SIDE */}
      <div className={ ` ${flexBetween} gap-3 text-xl no-underline"`}>
      <NavLink to="/account">
          <UserIcon />{" "}
        </NavLink>
  
      
      <NavLink to="/">
                      {/* FAVORITE */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        fill="bg-black"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </NavLink>
       
        <button
          onClick={openCart}
          style={{
            width: "2rem",
            height: "2rem",
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
  );
}

export default navbarMedium;
