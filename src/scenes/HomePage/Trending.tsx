import ButtonLink from "@/shared/ButtonLink";
import { StarIcon } from "@heroicons/react/24/solid";
import H2 from "@/shared/H2";
import { useProductCart } from "../cart/ProductCartContext";
import useOnMOuseOver from "@/hooks/useOnMouseOver";
import { ProductType } from "@/shared/types";

function Trending({ products }: { products: ProductType[] }) {
  const {
    storeItems,
    isProductFavorite,
    toggleFavorite,
    setProductDetails,
    increaseCartQuantity,
    openCart,
  } = useProductCart();

  const trendingProducts = products.slice(0, 4);
  const { handleMouseOver, handleMouseout, productImages } = useOnMOuseOver();

  const handleBuyNowClick = (id: string) => {
    const product = storeItems.find((item) => item.id === id);

    if (product) {
      setProductDetails({
        id: product.id,
        name: product.name,
        price: product.price,
        oldprice: product.oldprice,
        inStock: product.inStock,
        images: product.images,
        details: product.details,
        highlights: product.highlights,
        reviews: product.reviews,
        href: product.href,
        description: product.description,
        benefits: product.benefits,
        features: product.features,
      });
    }
  };

  const handleToggleFavoriteClick = (product: ProductType) => {
    toggleFavorite(product.id);
  };

  const handleButtonClick = (product: ProductType) => {
    handleBuyNowClick(product.id); // Passing only the ID to handleBuyNowClick
    increaseCartQuantity(product.id);
    openCart();
  };

  return (
    <section aria-labelledby="trending-heading">
      <H2 color={"black-900"}>trending Products</H2>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-5 lg:px-8 lg:pt-32">
        <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="group  border-1 border-black-900 rounded-lg relative"
            >
              {product.inStock ? (
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
              <div className="   flex justify-center items-center">
                <div className="md:w-3/4 md:py-0 sm:w-2/4 sm:py-4 xs:w-3/4 xs:py-0 xxs:w-full xxs:py-4 object-contain object-center ">
                  <img
                    src={
                      typeof productImages[product.id] === "string"
                        ? productImages[product.id]
                        : product.images[0].src
                    }
                    alt={product.images[0].alt}
                    onMouseOver={() => handleMouseOver(product.id)}
                    onMouseOut={() => handleMouseout(product.id)}
                    className="h-full w-full object-cover object-center "
                  />
                </div>
              </div>

              <div className="w-10  top-2 right-2 ">
                <button onClick={() => handleToggleFavoriteClick(product)}>
                  {" "}
                  {isProductFavorite(product.id) ? (
                    <div className=" top-2 right-2 border-1 border-black  bg-primary-100 rounded-lg my-auto p-2">
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
                  ) : (
                    <div className=" absolute top-2 right-2 border-1 border-black  bg-primary-100 rounded-lg my-auto p-2">
                      <div className="text-xs tracking-tight ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              </div>

              <span className="flex flex-col justify-center items-center  gap-3 my-3 py-3">
                <h3 className="  text-center font-bold text-base text-black-900">
                  <span className=" inset-0 " />
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
                    <h3 className=" flex font-bold xxs:text-md mb-0 text-black-900">
                      322$
                    </h3>
                    <strong className=" flex font-normal text-red-700 line-through">
                      999$
                    </strong>
                  </div>
                </span>

                <ButtonLink
                  onClick={() => handleButtonClick(product)}
                  to={"/productpage"}
                  children={"BUY NOW"}
                  disabled={false}
                  className=" bg-black   text-primary-100 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
                />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <div className="font-medium text-black-600 hover:text-black-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
