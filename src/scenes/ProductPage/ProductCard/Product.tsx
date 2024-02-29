import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { StarIcon } from "@heroicons/react/24/solid";
import cardsIcons from "@/assets/cardsIcons.png";
import checkIcon from "@/assets/checkIcon.png";
import ProductSlider from "./ProductSlider";
import { ProductType} from "@/shared/types";

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
//TODO : refactor
export default function Product({
  id,
  name,
  price,
  oldprice,
  inStock,
  details,
  highlights,
  reviews,
  images,
}: ProductType) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    openCart,
  } = useProductCart();

  const quantity = getItemQuantity(id);

  // console.log(" qantity product page" + quantity);

  return (
    <div>
      <div className=" flex justify-center  items-center  min-h-full w-5/6  mx-auto max-sm:flex-wrap ">
        <ProductSlider images={images} />

        <section className="py-2 h-full w-full md:w-1/2 flex justify-items-center	justify-center">
          {/*PRODUCT INFO */}
          <div className=" grow max-w-2xl px-4 s py-3  max-sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            {/*PRODUCT REVIEWS */}
            <div className="mb-1">
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
                  <div className="  ml-3 text-xs font-bold text-black ">
                    {/* TO DO Review Count Logic  & Review average logic*/}
                    {reviews[0].average}/5 | by {reviews[0].totalCount} of happy
                    customers
                  </div>
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
            <div className="mt-1 lg:row-span-3 lg:mt-0">
              <div className="text-xl max-xs:text-xs tracking-tightt text-secondary-500">
                60 Capsules | 30 Day Supply
              </div>

              <div className="flex gap-2">
                <div className="text-2xl  font-bold tracking-tight text-gray-900">
                  {formatCurrency(price)}
                </div>
                <div className="line-through text-2xl tracking-tight text-gray-400">
                  {formatCurrency(oldprice)}
                </div>
              </div>
              <span className="flex flex-row gap-2">
                <div className=" max-w-fit border-solid border-green-500 bg-green-500 rounded-lg my-auto p-2 ">
                  <div className="text-xs tracking-tight text-primary-100 ">
                    You save {formatCurrency(oldprice - price)}!
                  </div>
                </div>
                {inStock ? (
                  <div className="max-w-fit border-solid border-black bg-green-500 rounded-lg my-auto p-2">
                    <div className="text-xs tracking-tight text-primary-100 ">
                      ✔️ in stock
                    </div>
                  </div>
                ) : (
                  <div className="max-w-fit border-solid border-black bg-danger rounded-lg my-auto p-2">
                    <div className="text-xs tracking-tight text-primary-100 ">
                      ❌ not avalaible
                    </div>
                  </div>
                )}
              </span>
              <div className="py-1 text-base  max-md:text-xs text-gray-900 ">
                {details}
              </div>

              <form className="mt-1">
                {/*PRODUCT PROOFS */}

                {highlights.map((item) => (
                  <div key={item} className="flex gap-2 my-2">
                    <div className="w-10 h-10">
                      <img src={checkIcon} alt="" />
                    </div>
                    <li className="list-none text-gray-900  font-normal my-auto">
                      <div>{item}</div>
                    </li>
                  </div>
                ))}

                {/* CART LOGIC */}
                {quantity === 0 ? (
                  <button
                    type="button"
                    disabled={!inStock}
                    className=" flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 disabled:bg-neutral-400 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={() => {
                      increaseCartQuantity(id);
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
                        type="button"
                        onClick={() => {
                          increaseCartQuantity(id);
                          openCart();
                        }}
                        className="flex grow w-full  justify-center  rounded-md border border-transparent  px-8 py-3 text-2xl font-bold  text-primary-100 bg-secondary-500 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        +
                      </button>
                      <button
                        type="button"
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
