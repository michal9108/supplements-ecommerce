import ButtonLink from "@/shared/ButtonLink";
import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import H2 from "@/shared/H2";
const trendingProducts = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 3,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 4,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
];
function Trending() {
  return (
    <section aria-labelledby="trending-heading">
        <H2 color={"black-900"} >trending Products</H2>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-5 lg:px-8 lg:pt-32">
      

        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {trendingProducts.map((product) => (
            <Link
              key={product.id}
              // onClick={""}
              to="/productpage"
              className="no-underline"
            >
              <div key={product.id} className="group relative border-1 border-black-900 rounded-lg">
                <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center "
                  />
                </div>

                <div className="w-10 absolute top-3 right-3">
                  {/* {isFavorite ? ( */}
                  <HeartIconSolid
                    fill="#dc2626"
                    // onClick={() => {
                    //   setIsFavorite(!isFavorite);
                    // }}
                  />
                  {/* ) : (
                      <HearIconOutlined
                     
                      color="#ffffff"
                    
                        onClick={() => {
                          setIsFavorite(!isFavorite);
                        }}
                      />
                    )} */}
                </div>

                {/* {inStock ? ( */}
                <div className=" absolute top-3 left-3 max-w-fit border-solid border-black bg-green-500 rounded-lg mt-auto p-2">
                  <div className="text-xs tracking-tight text-primary-100 ">
                    ✔️ in stock
                  </div>
                </div>
                {/* ) : (
              <div className="absolute top-2 left-2 border-solid border-black bg-danger rounded-lg my-auto p-2">
                <div className="text-xs tracking-tight text-primary-100 ">
                  ⤫ not avalaible
                </div>
              </div>
            )} */}

                <span className="flex flex-col justify-center items-center  gap-3 my-3 py-3">
                  <h3 className="  text-center font-bold text-base text-black-900">
                    <span className="absolute inset-0 " />
                    {product.name}
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
                      <h3 className=" flex font-bold xxs:text-md mb-0 text-black-900">322$</h3>
                      <strong className=" flex font-normal text-red-700 line-through">
                        999$
                      </strong>
                    </div>
                  </span>
                  <ButtonLink
                    //   onClick={}
                    to={"/productpage"}
                    children={"BUY NOW"}
                    disabled={false}
                    className=" bg-black   text-primary-100 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href="#"
            className="font-medium text-black-600 hover:text-black-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trending;
