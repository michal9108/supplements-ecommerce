import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { StarIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import cardsIcons from "../../../assets/cardsIcons.png";
import storeItems from "@//data/items.json";

import { useState } from "react";
import ProductComplementaries from "./ProductComplementaries";
import checkIcon  from "../../../assets/checkIcon.png"
import ProductSlider from "./Slider"
export default function Product() {
  const product: Product = storeItems[0];

  interface Size {
    name: string;
    inStock: boolean;
  }

  interface Reviews {
    average: number;
    totalCount: number;
  }
  interface Product {
    id: string;
    name: string;
    price: number;
    oldprice: number;
    href: string;
    images: Array<{ src: string; alt: string }>;
    sizes: Size[];
    details: string;
    highlights: string[];
    reviews: Reviews[];
  }

  const reviews = { average: 4, totalCount: 117 };

  function classNames(
    ...classes: (string | undefined | null | false)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    openCart,
    cartItems,
  } = useShoppingCart();

  const quantity = getItemQuantity(product.id);
  const [selectedSize, setSelectedSize] = useState<string>("L"); // Initialize with a default size

  const handleIncreaseQuantity = (id: string, size: string) => {
    increaseCartQuantity(id, size);
  };

  const handleDecreaseQuantity = (id: string, size: string) => {
    decreaseCartQuantity(id, size);
  };



  return (
    <div>
     
       <ProductComplementaries />
      <div 
      className="mx-auto   max-sm:flex-wrap justify-center  gap-x-0  min-h-full w-5/6 "
      >
     
        <section
        //  className=" h-full w-full  mx-auto mt-5  lg:w-1/2 flex justify-items-center	justify-center"
         >
          {/*PRODUCT IMAGE */}

          <div
            // className="mx-auto max-w-2xl max-sm:px-6
            //     max-sm:pt-10  max-md:px-6"
          >
            <div
            //  className=" aspect-h-4  overflow-hidden lg:block"
             >
              {/* <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              /> */}
              
            </div>
          </div>
       
        </section>
        <div className="flex mx-auto ">  < ProductSlider /></div>
      
        
        <section className="p-3 mx-auto  h-full w-full lg:w-1/2 flex justify-items-center	justify-center">
          {/*PRODUCT INFO */}
          <div className=" grow max-w-2xl px-4 s pb-6 pt-6 max-sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {/*PRODUCT REVIEWS */}
            <div className="mb-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.reviews[0].average > rating
                          ? "text-secondary-500"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>{" "}
                <div className="flex items-center">
                  <p className="  ml-3 text-sm font-medium text-gray-400 ">
                    4.95 based on {product.reviews[0].totalCount}+
                  </p>
                </div>
              </div>
            </div>
            {/* Product name */}

            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-3xl font-bold tracking-tight text-secondary-500 max-sm:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-3 lg:row-span-3 lg:mt-0">
              <p className="text-xl tracking-tightt text-secondary-500">
                60 Capsules | 30 Day Supply
              </p>

              <div className="flex gap-2">
                <p className="text-2xl  font-bold tracking-tight text-gray-900">
                  {formatCurrency(product.price)}
                </p>
                <p className="line-through text-2xl tracking-tight text-gray-400">
                  {" "}
                  US${product.oldprice}
                </p>
              </div>

              <p className="text-base  text-gray-900 ">{product.details}</p>

              <form className="mt-7">
                {/*PRODUCT PROOFS */}

                {product.highlights.map((item) => (
                  <div className="flex gap-2 my-3">
                    <div className="w-10 h-10">
                      <img src={checkIcon} alt="" />
                    </div>
                    <li className="list-none text-gray-900  font-normal my-auto">
                      {item}
                    </li>
                  </div>
                ))}

               

                {/* CART LOGIC */}
                {quantity === 0 ? (
                  <button
                    className=" flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={() => {
                      handleIncreaseQuantity(product.id, selectedSize);
                      openCart();
                    }}
                  >
                    BUY
                  </button>
                ) : (
                  <div
                    className=" align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="flex align-items-center justify-content-center"
                      style={{ gap: ".5rem" }}
                    >
                      <button
                        onClick={() => {
                          handleIncreaseQuantity(product.id, selectedSize);
                          openCart();
                        }}
                        className="flex grow w-full  justify-center  rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          handleDecreaseQuantity(product.id, selectedSize);
                          openCart();
                        }}
                        className=" flex grow w-full justify-center rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        -
                      </button>
                    </div>
                  </div>
                )}
                <img src={cardsIcons} alt="cardsIcons" />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
