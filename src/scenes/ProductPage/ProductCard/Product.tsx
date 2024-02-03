import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { StarIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import cardsIcons from "../../../assets/cardsIcons.png";
import ProductComplementaries from "./ProductComplementaries";
import checkIcon from "../../../assets/checkIcon.png";
import ProductSlider from "./ProductSlider";
import { ProductType, ReviewsType } from "../../../shared/types";

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Product({id, name, price,  details, highlights, reviews}:ProductType) {
  


  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    openCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  // console.log(" qantity product page" + quantity);

  return (
    <div>
      <ProductComplementaries />
      <div className=" flex justify-center  items-center  min-h-full w-10/12  mx-auto max-sm:flex-wrap ">
        <section className="p-1 flex h-full w-full sm:w-1/2 justify-items-center	justify-center">
          <ProductSlider />
        </section>

        <section className="p-3 h-full w-full md:w-1/2 flex justify-items-center	justify-center">
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
                        reviews[0].average > rating
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
                    4.95 based on {reviews[0].totalCount}+
                  </p>
                </div>
              </div>
            </div>
            {/* Product name */}

            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-3xl font-bold tracking-tight text-secondary-500 max-sm:text-3xl">
                {name}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-3 lg:row-span-3 lg:mt-0">
              <p className="text-xl tracking-tightt text-secondary-500">
                60 Capsules | 30 Day Supply
              </p>

              <div className="flex gap-2">
                <p className="text-2xl  font-bold tracking-tight text-gray-900">
                  {formatCurrency(price)}
                </p>
                <p className="line-through text-2xl tracking-tight text-gray-400">
                  {" "}
                  US$
                </p>
              </div>

              <p className="text-base  text-gray-900 ">{details}</p>

              <form className="mt-7">
                {/*PRODUCT PROOFS */}

                {highlights.map((item) => (
                  <div key={item} className="flex gap-2 my-3">
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
                    onClick={() => {increaseCartQuantity(id);
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
                        onClick={() => { increaseCartQuantity(id);
                          openCart();
                        }}
                        className="flex grow w-full  justify-center  rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => {
                          decreaseCartQuantity(id);
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
