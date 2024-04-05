import ButtonLink from "@/shared/ButtonLink";
import { FavoriteItemType } from "@/shared/types";
import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useProductCart } from "./cart/ProductCartContext";

const FavoriteCardItem = ({ id, name, inStock }: FavoriteItemType) => {
  const {
    wishlist,

    removeFromWishlist,
  } = useProductCart();

  const item = wishlist.find((i) => i.id === id);
  if (item == null) return null;

  console.log("wishlist item", item);

  return (
    <div key={item.id} className="group border-1 border-black-900 rounded-lg">
      <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80 ">
        <span className="relative">
          {inStock ? (
            <div className=" absolute top-2 left-2 max-w-fit border-solid border-black bg-green-500 rounded-lg mt-auto p-2">
              <div className="text-xs tracking-tight text-primary-100 ">
                ✔️ in stock
              </div>
            </div>
          ) : (
            <div className="absolute top-2 left-2 border-solid border-black bg-danger rounded-lg my-auto p-2">
              <div className="text-xs tracking-tight text-primary-100 ">
                ⤫ not avalaible
              </div>
            </div>
          )}
          <button onClick={() => removeFromWishlist(id)} className="">
            <div className=" top-2 right-10 border-1 border-black  bg-primary-100 rounded-lg my-auto p-2">
              <div className="text-xs tracking-tight ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#DC3445"
                  className="w-6 h-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            </div>
          </button>
          <div className="  relative flex justify-center">
            <img
              src={item.images[0].src}
              alt={item.name}
              className="w-3/4  object-cover object-center "
            />
          </div>
        </span>
      </div>

      <div className="w-10  top-3 right-3"></div>

      <span className="flex flex-col justify-center items-center  gap-3 my-3 py-3">
        <h3 className="  text-center font-bold text-base text-black-900">
          <span className=" inset-0 " />
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
          <p className="ml-2 my-auto text-sm text-gray-900">650 reviews</p>
        </div>
        <span className="flex  justify-center xxs:flex-col gap-2  xxs:text-xs">
          <div className="flex flex-row">
            <h3 className=" flex font-bold xxs:text-md mb-0 text-black-900">
              322$
            </h3>
            <strong className=" flex font-normal text-red-700 line-through">
              999$
            </strong>
            
          </div>
        </span>
        <ButtonLink
          // onClick={handleBuyClick}
          to={"/productpage"}
          children={"BUY NOW"}
          disabled={false}
          className=" bg-black   text-primary-100 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
        />
      </span>
    </div>
  );
};

export default FavoriteCardItem;
