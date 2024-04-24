import React from "react";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { Button, Card, Offcanvas, Stack } from "react-bootstrap";
import H2 from "@/shared/H2";
import { XMarkIcon } from "@heroicons/react/24/solid";

import FavoriteCardItem from "@/scenes/FavoriteCardItem";
import { Link } from "react-router-dom";

const WishlistPage: React.FC = () => {
  const { wishlist, setWishlist, isProductFavorite } = useProductCart();

  console.log("wishlist items", wishlist);

  const handleClearWishlist = () => {
    // Logic to clear the wishlist
    setWishlist([]);
  };

  // Filter the wishlist to include only favorite products
  const favoriteProducts = wishlist.filter((item) =>
    isProductFavorite(item.id),
  );

  return (
    <>
      <H2 color="black-900">Wishlist</H2>

      {favoriteProducts.length === 0 ? (
    

<section className="grid min-h-full place-items-center px-6 py-24 sm:py-40 lg:px-8">
        <div className="text-center">
      <span className="flex justify-center">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg></span>   
        

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-black-500 dark:black-400 sm:text-5xl">
          Your Wishlist is Empty. 
          </h3>

        
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className=" no-underline rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
             Home
            </Link>
       
          </div>
        </div>
      </section>

      ) : (
        <span>
          <div className="flex items-center justify-center flex-col mx-2  "> <h3 className="flex"> You have {favoriteProducts.length} items in Wishlist</h3></div>
          <div className="flex justify-content-center"> {favoriteProducts.length !== 0 && (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => handleClearWishlist()}
            > Clear wishlist
              &times;
            </Button>
          )}</div>
          
         

          <section className="d-flex flex-column gap-3">
            <section aria-labelledby="trending-heading">
              <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-5 lg:px-8 lg:pt-32">
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                  {favoriteProducts.map((item) => (
                    <span>
                      {" "}
                      <FavoriteCardItem key={item.id} {...item} />
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </span>
      )}
    </>
  );
};

export default WishlistPage;
