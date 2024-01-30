import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link as RouterLink } from "react-router-dom";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import MyVerticallyCenteredModal from "@/scenes/modal/modal";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import cardsIcons from "../assets/cardsIcons.png";
import Attributes from "../scenes/HomePage/attributes";
import storeItems from "@//data/items.json";
import Testimonials from "../scenes/ProductPage/Testimonials/Testimonials";
import Features from "@/scenes/ProductPage/Features/Features";
import Benefits from "@/scenes/ProductPage/Benefits/Benefits";
import Faq from "@/scenes/ProductPage/FAQ/Faq";
interface Size {
  name: string;
  inStock: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  href: string;
  images: Array<{ src: string; alt: string }>;
  sizes: Size[];
  description: string;
  highlights: string[];
}

const product: Product = storeItems[0];

{
  /* Reviews function*/
}
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage() {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
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

  const handleSizeChange = (size: string) => {
    // Handle the updated size, you can set it in the local state if needed
    setSelectedSize(size);
  };

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const PopUpWindow = setTimeout(() => {
      setModalShow(true);
    }, 2000);
    return () => clearTimeout(PopUpWindow);
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="w-full static ">
          {/*  POP UP WINDOW / MODAL */}
          {/* <div className="relative">
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div> */}

          <div className="mx-auto  flex max-md:flex-wrap justify-center  gap-x-0  min-h-full w-5/6 ">
            <section className=" h-full w-full  mx-auto mt-5  lg:w-1/2 flex justify-items-center	justify-center">
           {/*PRODUCT IMAGE */}

              <div className="mx-auto max-w-2xl
               max-sm:px-6
                max-sm:pt-10  max-md:px-6">
                <div className=" aspect-h-4  overflow-hidden lg:block">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </section>

            <section className="p-3 mx-auto  h-full w-full lg:w-1/2 flex justify-items-center	justify-center">
             {/*PRODUCT INFO */}
              <div className=" grow max-w-2xl px-4 s pb-6 pt-6 max-sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                {/*PRODUCT REVIEWS */}
                <div className="mb-3">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-secondary-500"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0",
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      4.95 based on {reviews.totalCount} + reviews
                    </a>
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
                  <h2 className="sr-only">Product information</h2>
                  <div className="flex gap-2">
                    <p className="text-2xl  font-bold tracking-tight text-gray-900">
                      {formatCurrency(product.price)}
                    </p>
                    <p className="line-through text-2xl tracking-tight text-gray-400">
                      {" "}
                      US$29.77
                    </p>
                  </div>

                  <p className="text-base  text-gray-900 ">
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>

                  <form className="mt-7">
                 {/*PRODUCT PROOFS */}

                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-6 w-6"></HomeModernIcon>{" "}
                      </div>
                      <p className="text-gray-900  font-normal my-auto">
                        Science backed{" "}
                      </p>
                      <p className="text-secondary-500 my-auto">
                        Testosteron Increaser
                      </p>
                    </div>
                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-6 w-6"></HomeModernIcon>{" "}
                      </div>
                      <p className="text-gray-900  font-normal my-auto">
                        Science backed{" "}
                      </p>
                      <p className="text-secondary-500 my-auto">
                        Testosteron Increaser
                      </p>
                    </div>
                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-6 w-6"></HomeModernIcon>{" "}
                      </div>
                      <p className="text-gray-900  font-normal my-auto">
                        Science backed{" "}
                      </p>
                      <p className="text-secondary-500 my-auto">
                        Testosteron Increaser
                      </p>
                    </div>

                    {/* <Attributes onSizeChange={(size) => console.log(size)} />            */}
                    {/* PRODUCT BENEFITS */}

                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-4 w-4"></HomeModernIcon>{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-gray-900 text-sm font-light my-auto">
                          Free Shipping{" "}
                        </p>
                        <p className="text-gray-900 text-xs my-auto">
                          Orders are shipped within 2-3 business days
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-4 w-4"></HomeModernIcon>{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-gray-900 text-sm font-light my-auto">
                          30-day Money Back Guarantee{" "}
                        </p>
                        <p className="text-gray-900 text-xs my-auto">
                          If you are not satisfied, we will take care of it.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 my-3">
                      <div className="rounded-full border-1 border-gray-100 bg-primary-100 p-2">
                        <HomeModernIcon className=" h-4 w-4"></HomeModernIcon>{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="text-gray-900 text-sm font-light my-auto">
                          Continual Support{" "}
                        </p>
                        <p className="text-gray-900 text-xs my-auto">
                          Feel free to contact us through chat, phone or email.
                        </p>
                      </div>
                    </div>
                    {/* CART LOGIC */}
                    {quantity === 0 ? (
                      <button
                        className=" flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-white bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                            className="flex grow w-full  justify-center  rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-white bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                          >
                            +
                          </button>
                          <button
                            onClick={() => {
                              handleDecreaseQuantity(product.id, selectedSize);
                              openCart();
                            }}
                            className=" flex grow w-full justify-center rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-white bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    )}
                    <img src={cardsIcons} alt="" />
                  </form>
                </div>

                <div className="py-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-1 lg:pr-8 lg:pt-2">
                 {/*PRODUCT DESCRIPTION TEXT */}
                  <div>
                    <h3 className="sr-only">Description lorem7</h3>

                    <div className="space-y-4">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

          {/* TESTIMONIALS */}
        <Testimonials />

        {/* ADDTITIONAL INFO  */}
        <section className="mx-auto min-h-full w-5/6 py-1">
         
            <div className="mx-auto p-2 w-full border-dotted rounded-lg border-3 border-rose-500 md:mx-auto 2xl-mx-2">
              <div className="flex gap-2 ">
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                    fill="currentColor"
                  />
                </svg>
                <h2 className="font-bold text-lg text-gray-900 ">
                  Low Testosterone is a real buzz killer
                </h2>
              </div>

              <p className="py-0">
                Unfortunately, testosterone levels have been steadily declining
                over the last 3 decades. Plain and simple, your father and
                grandfathers had much higher testosterone levels than you. This
                is due to a number of reasons such as: higher levels of chronic
                stress, increases in body fat, and a massive increase in
                environmental estrogens.
              </p>
            </div>
           
        </section>
        <section className="mx-auto min-h-full w-full py-1">
        <p className=" text-2xl text-gray-900 ">
        Enhancing your testosterone levels naturally acts as a powerful asset, akin to unlocking a hidden potential:
              <strong className="italic">powering you up with more ambition, a higher sex drive, less fat, more muscle and a higher quality of life.</strong>
              </p>
        </section>

        <Features />
        {/* Money Guarantee section */}

        <section className="w-full bg-primary-200 py-8">
          <div className="mx-auto min-h-full ">
            <div className="mx-auto  w-5/6  max-w-7xl py-5   md:px-10 md:py-8  md:mx-auto  lg:py-8  2xl-mx-2 border-rose-500 ">
              <div className="flex ">
                <div className=" flex flex-row gap-3 justify-center">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
                      fill="currentColor"
                    />
                  </svg>

                  <div className="content-center">
                    <h2 className="font-bold text-xxl text-gray-900  ">
                      30 Days Money Back Guarantee
                    </h2>
                    <p className="">
                      Unfortunately, testosterone levels have been steadily
                      declining over the last 3 decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Benefits />
        <Faq />

        {/* Benefits - 4 Reasons you need with call to action */}
      </div>
    </>
  );
}
