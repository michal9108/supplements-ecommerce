//@ts-nocheck 
import React from "react";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { Button, Card } from "react-bootstrap";
import H2 from "@/shared/H2";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonLink from "@/shared/ButtonLink";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ProductType } from "@/shared/types";

const WishlistPage = () => {
  const {
    wishlist,
    storeItems,
    setWishlist,
    isProductFavorite,
    toggleFavorite,
    removeFromWishlist,
    setProductDetails,
    increaseCartQuantity,
  } = useProductCart();

  // Filter the storeItems based on the wishlist
  // const wishlistItems = storeItems.filter((item) =>
  //   wishlist.some((wishlistItem) => wishlistItem.id === item.id),
  // );

  console.log("wishlist items", wishlist);
  const handleClearWishlist = () => {
    // Logic to clear the wishlist
    setWishlist([]);
  };


  const handleBuyClick = () => {
    setProductDetails({
      id,
      name,
      price,
      oldprice,
      inStock,
      images,
      details,
      highlights,
      reviews,
      href,
      description,
    });


    increaseCartQuantity(id);
  }


  return (
    <div>
      <H2 color="black-900">Wishlist</H2>

      {wishlist.length === 0 ? (
        <div>Your Wishlist is Empty. Plenty products from to choose...</div>
      ) : (
        <>
          <div>You have {wishlist.length} items in Wishlist</div>

          <section aria-labelledby="trending-heading">
            <H2 color={"black-900"}>trending Products</H2>
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-5 lg:px-8 lg:pt-32">
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                {wishlist.map((item) => (
                  <div key={item.id} className="no-underline">
                    <div
                      key={item.id}
                      className="group relative border-1 border-black-900 rounded-lg"
                    >
                      <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80 ">
                        <img
                          src={item.images[0].src}
                          alt={item.name}
                          className="h-full w-full object-cover object-center "
                        />
                      </div>

                      <div className="w-10 absolute top-3 right-3">
                        {/* <button onClick={() => toggleFavorite(item.id)}>
                          
                          {isProductFavorite(item.id) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                          
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                          
                          )}
                        </button> */}

                        {/* <button onClick={() => removeFromWishlist(item.id)}> add w </button> */}

                        {/* <button onClick={() => toggleFavorite(item.id)}>
              {isProductFavorite(item.id) ? "remove w" : "add w "}
            </button> */}
                      </div>

                      {/* {inStock ? ( */}
                      <div className=" absolute top-3 left-3 max-w-fit border-solid border-black bg-green-500 rounded-lg mt-auto p-2">
                        <div className="text-xs tracking-tight text-primary-100 ">
                          ✔️ in stock
                        </div>
                      </div>

                      <span className="flex flex-col justify-center items-center  gap-3 my-3 py-3">
                        <h3 className="  text-center font-bold text-base text-black-900">
                          <span className="absolute inset-0 " />
                          {item.name}
                        </h3>

                        <div className="flex items-center">
                          <div>
                            <div className="flex items-center">
                              <StarIcon
                                className="text-yellow-400 h-4 w-5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <StarIcon
                                className="text-yellow-400 h-4 w-5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <StarIcon
                                className="text-yellow-400 h-4 w-5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <StarIcon
                                className="text-yellow-400 h-4 w-5 flex-shrink-0"
                                aria-hidden="true"
                              />
                              <StarIcon
                                className="text-yellow-400 h-4 w-5 flex-shrink-0"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <p className="ml-2 my-auto text-sm text-gray-900">
                            650 reviews
                          </p>
                        </div>
                        <span className="flex  justify-center xxs:flex-col gap-2  xxs:text-xs">
                          <div className="flex flex-row">
                            <h3 className=" flex font-bold xxs:text-md mb-0 text-black-900">
                              322$
                            </h3>
                            <strong className=" flex font-normal text-red-700 line-through">
                              999$
                            </strong>
                            {/* <button
                            type="button"
                              onClick={() => {
                                removeFromWishlist(item.id);
                                console.log("click");
                              }}
                            >
                              remove w
                            </button> */}

<button onClick={() => toggleFavorite(item.id)}> {isProductFavorite(item.id) ? "remove w" : "add w "}</button>

                          </div>

                        </span>
                        <ButtonLink
                onClick={handleBuyClick}
                to={"/productpage"}
                children={"BUY NOW"}
                disabled={false}
                className=" bg-black   text-primary-100 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
              />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {wishlist.length !== 0 && (
        <button onClick={() => handleClearWishlist()} className="bg-orange-900">
          Clear Wishlist
        </button>
      )}
    </div>
  );
};

export default WishlistPage;
