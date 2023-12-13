import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Link as RouterLink } from "react-router-dom";
import Faq from "@/scenes/faq";
import Button from "react-bootstrap/Button";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import MyVerticallyCenteredModal from "@/scenes/modal/modal";
import image1 from "@/assets/image1.png";
// import { product } from "@/data/product";
// import { data, Product } from "@/data/data";

type StoreItemProps = {
  id: number;
  price: number;
};

const product = 
  {
    id: 1,
    name: "Basic Tee 6-Pack",
    price: 192.77,
    href: "#",
    images: [
      {
        src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", className: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", className: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", className: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  };
  // Add more products if needed






{
  /* Reviews function*/
}
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function ProductPage({ id, price }: StoreItemProps) {



  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
  } = useShoppingCart();
  
  const quantity = getItemQuantity(id);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const PopUpWindow = setTimeout(() => {
      setModalShow(true);
    }, 4000);
    return () => clearTimeout(PopUpWindow);
  }, []);

  return (
    <>
      <div className="bg-white ">
        <div className="w-full pt-28">
          {/* POP UP WINDOW / MODAL */}

          {/* <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
          <div className="mx-auto  flex max-md:flex-wrap justify-center  gap-x-12 mx- min-h-full w-5/6">
            <section className=" h-full w-full  mx-auto mt-13  lg:w-1/2 flex justify-items-center	justify-center">
              {/* Product Image */}

              <div className="mx-auto  max-w-2xl max-sm:px-6 ">
                <div className=" aspect-h-4  overflow-hidden lg:block">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </section>

            <section className="p-5 mx-auto  h-full w-full lg:w-1/2 flex justify-items-center	justify-center">
              {/* Product info */}
              <div className=" grow max-w-2xl px-4 s pb-6 pt-6 max-sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 max-sm:text-3xl">
                    {product.name}
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    {formatCurrency(price)}
                  </p>

                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0",
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                      <a
                        href={reviews.href}
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {reviews.totalCount}reviews
                      </a>
                    </div>
                  </div>

                  <form className="mt-10">
                    {/* Colors */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a color
                        </RadioGroup.Label>
                        <div className="flex items-center space-x-3">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
                                classNames(
                                  color.selectedClass,
                                  active && checked ? "ring ring-offset-1" : "",
                                  !active && checked ? "ring-2" : "",
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.className,
                                  "h-8 w-8 rounded-full border border-black border-opacity-10",
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          Size
                        </h3>
                        <a
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Size guide
                        </a>
                      </div>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a size
                        </RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  active ? "ring-2 ring-indigo-500" : "",
                                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6",
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-md",
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                    {quantity === 0 ? (
                      <button
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => { increaseCartQuantity(id);
                           openCart(); }}
                       
                      >
                        BUY
                      </button>
                    ) : (
                      <div
                        className="d-flex align-items-center flex-column"
                        style={{ gap: ".5rem" }}
                      >
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ gap: ".5rem" }}
                        >
                          <Button onClick={() => decreaseCartQuantity(id)}>
                            -
                          </Button>
                          <div>
                            <span className="fs-3">{quantity}</span> in cart
                          </div>
                          <Button onClick={() => increaseCartQuantity(id)}>
                            +
                          </Button>
                        </div>
                       
                      </div>
                    )}
                  </form>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description lorem7</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="mx-auto my-5  gap-8  items-center justify-center  md:flex   w-screen">
          {/*  TO DO Review element */}

          <figure className="max-w-screen-md flex justify-center mx-auto min-h-full w-5/6 	">
            <div className="max-w-3xl">
              <div className="md:flex md:flex-row m-6 p-1 border-dotted rounded-lg border-2 border-rose-500">
                <div className="mx-auto w-36 items-start flex justify-center md:mx-0 md:w-96 md:p-0 lg:mb-0  md:pt-5 ">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20 mx-auto md:mr-5"
                    alt="woman avatar"
                  />
                </div>
                <div className="">
                  <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
                    <svg
                      className="w-6 h-6 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-6 h-6 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <cite>
                    <p className="text-base  text-gray-900 ">
                      "Flowbite is just awesome. It contains tons of predesigned
                      components and pages starting from login screen to complex
                      dashboard. Perfect choice for your next SaaS application."
                    </p>
                  </cite>
                  <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                      <cite className="pe-3 font-small text-gray-900 ">
                        Bonnie
                      </cite>
                      <cite className="ps-3 text-sm  text-gray-400">
                        25 years old | from Los Angeles
                      </cite>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          </figure>

          {/* <section className="">
            <div className=" rounded-md p-6  max-w-screen-md shadow-lg md:p-6 md:text-left flex justify-center">
              <div className="max-w-3xl">
                <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                  <div className="md:flex md:flex-row">
                    <div className="mx-auto  flex w-36 items-start justify-center md:mx-0 md:w-96 lg:mb-0">
                      <img
                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                        className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20"
                        alt="woman avatar"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-thin text-neutral-500 dark:text-neutral-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </p>
                      <p className="mb-2 text-xl font-thin text-neutral-800 dark:text-neutral-200">
                        Anna Smith
                      </p>
                      <p className="mb-0 font-thin text-neutral-500 dark:text-neutral-400">
                        Product manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </section>

        {/* Benefit sentence */}
        <section className="w-full bg-primary-200 py-10">
          <div className="mx-auto min-h-full ">
            <div className="mx-auto p-5 w-4/6 border-dotted border-2 rounded-lg  border-rose-500 md:mx-auto 2xl-mx-2">
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

              <p className="py-3">
                Unfortunately, testosterone levels have been steadily declining
                over the last 3 decades. Plain and simple, your father and
                grandfathers had much higher testosterone levels than you. This
                is due to a number of reasons such as: higher levels of chronic
                stress, increases in body fat, and a massive increase in
                environmental estrogens.
              </p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section>
          {/* Features Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {/* Features Title */}
            <div className="text-center">
              <h4 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
                Lorem ipsum dolor:
              </h4>
            </div>
            {/* Features Grid */}
            <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Support</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Organise</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </div>
            <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
              <img src={image1} className=" w-2/6  xs:w-4/6  sm:w-3/6 "></img>
            </div>
          </div>
        </section>
        {/* Money Guarantee section */}

        <section className="w-full bg-primary-200 py-10">
          <div className="mx-auto min-h-full ">
            <div className="mx-auto  w-5/6  max-w-7xl py-5   md:px-10 md:py-24  md:mx-auto  lg:py-32  2xl-mx-2 border-rose-500 ">
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
                    <h2 className="font-bold text-xxl text-gray-900 ">
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

        {/* Benefits Section */}
        <section>
          {/* Benefits Container */}
          <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-10 lg:py-32">
            {/* Benefits Title */}
            <div className="text-center ">
              <h2 className="text-3xl font-bold md:text-5xl">
                Make every step user-centric
              </h2>
              <h3 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] lg:mb-16">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </h3>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Support</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Organise</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center my-2 ">
              <button
                type="submit"
                className="w-4/6 min-width-auto rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center"
              >
                <div className="mb-1">Supercharge Your Testosterone</div>
                <div className="text-sm">30 Days Money Back Guarantee</div>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section*/}

        <Faq />

        {/* Benefits - 4 Reasons you need with call to action */}
      </div>
    </>
  );
}
