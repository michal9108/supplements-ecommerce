import React from "react";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { Button, Card, Offcanvas, Stack } from "react-bootstrap";
import H2 from "@/shared/H2";

import FavoriteCardItem from "@/scenes/FavoriteCardItem";

const WishlistPage: React.FC = () => {
  const {
    wishlist,
    setWishlist,
    isProductFavorite,
  } = useProductCart();



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
         <section className="d-flex flex-column gap-3">
        <div>Your Wishlist is Empty. Plenty products from to choose...</div>
        </section>
      ) : (
        <section className="d-flex flex-column gap-3">

          <div>You have {favoriteProducts.length} items in Wishlist</div>

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
      )}

      {wishlist.length !== 0 && (
        <button onClick={() => handleClearWishlist()} className="bg-orange-900">
          Clear Wishlist
        </button>
      )}
 </> 
  );
};

export default WishlistPage;
