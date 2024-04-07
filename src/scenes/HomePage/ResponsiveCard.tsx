import Card from "react-bootstrap/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/shared/types";
import ButtonBuyLink from "@/shared/ButtonBuyLink";
import { useProductCart } from "../cart/ProductCartContext";
import useOnMOuseOver from "@/hooks/useOnMouseOver";
import useCardStyle from "@/hooks/useCardStyle";
import { Link } from "react-router-dom";

//RESPONSIVE SHOP CARD
export default function ResponsiveCard({
  id,
  inStock,
  price,
  oldprice,
  images,
  name,
  details,
  highlights = [],
  href = "",
  description = [],
  reviews = [],
  benefits = [],
  features  ,
}: ProductType) {
  const {
    setProductDetails,
    isProductFavorite,
    toggleFavorite,
    increaseCartQuantity,
    openCart,
  } = useProductCart();

  const handleBuyNowClick = (id: string) => {
    setProductDetails({
      id,
      name,
      price,
      oldprice,
      inStock,
      images,
      details,
      highlights,
      reviews,
      href,
      description,
      benefits,
      features,
    });
  };

  const { cardStyle, isAboveMediumScreens } = useCardStyle();

  const { handleMouseOver, handleMouseout, productImages } = useOnMOuseOver();

  return (
    <Link
      onClick={() => handleBuyNowClick(id)}
      className="no-underline"
      to={"/productpage"}
    >
      <Card style={cardStyle} className="border-1 border-black">
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

          <Card.Img
            variant="top"
            src={
              typeof productImages[id] === "string"
                ? productImages[id]
                : images[0].src
            }
            alt={images[0].alt}
            onMouseOver={() => handleMouseOver(id)}
            onMouseOut={() => handleMouseout(id)}
          />
        </span>

        <Card.Body className="flex flex-col justify-between">
          <div className="mt-2">
            <Card.Title>
              <h3 className="text-center font-bold text-base">{name}</h3>
            </Card.Title>
          </div>

          {isAboveMediumScreens && (
            <div>
              <Card.Text className="text-center">{details}</Card.Text>
            </div>
          )}
          <div className="mt-auto mb-2 flex justify-center items-center flex-col">
            {" "}
            <span className="flex  justify-center xxs:flex-col gap-2  xxs:text-xs">
              <button onClick={() => toggleFavorite(id)}>
                {" "}
                {isProductFavorite(id) ? (
                  <div className="absolute top-2 right-2 border-1 border-black  bg-primary-100 rounded-lg my-auto p-2">
                    <div className="text-xs tracking-tight ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#DC3445"
                        className="w-4 h-4"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-2 right-2 border-1 border-black  bg-primary-100 rounded-lg my-auto p-2">
                    <div className="text-xs tracking-tight ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
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

              <h3 className=" flex font-bold xxs:text-md mb-0">{price}$</h3>
              <p className=" flex font-normal text-red-700 line-through">
                {oldprice}$
              </p>
            </span>
            {inStock ? (
              <ButtonBuyLink
                onClick={() => {
                  handleBuyNowClick(id);
                  increaseCartQuantity(id);
                  openCart();
                }}
                to={"/productpage"}
                children={"BUY NOW"}
                disabled={false}
                className=" bg-black   text-primary-100 no-underline  px-6 py-2.5 rounded-lg font-semibold text-xl w-full box-border;
                  "
              />
            ) : (
              <ButtonBuyLink
                to={"/productpage"}
                children={"SOLD OUT"}
                disabled={true}
                className=" bg-neutral-400   text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl "
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
