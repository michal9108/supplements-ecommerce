import Card from "react-bootstrap/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/shared/types";
import ButtonLink from "@/shared/ButtonLink";
import { useProductCart } from "../cart/ProductCartContext";
import { Link } from "react-router-dom";
import { useState } from "react";

function ResponsiveCard({
  id,
  images,
  name,
  details,
  price,
  oldprice,
  inStock,
  highlights,
  reviews,
  href,
}: ProductType) {
  const { setProductDetails, increaseCartQuantity, openCart } =
    useProductCart();

  const handleBuyNowClick = () => {
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
    });

    increaseCartQuantity(id);
    openCart();
  };

  const handleRegularClick = () => {
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
    });
    openCart();
  };

  const isBelowsxxScreens = useMediaQuery("(max-width: 325px)");
  const isBelowsxScreens = useMediaQuery("(max-width: 480px)");
  const isBelowSmallScreens = useMediaQuery("(max-width: 768px)");
  const isMediumScreens = useMediaQuery(
    "(min-width: 768px)" && "(max-width: 1060px)",
  );
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  let cardStyle;
  if (isBelowsxxScreens) {
    cardStyle = { width: "8rem", height: "23rem", margin: "0.5rem" };
  } else if (isBelowsxScreens) {
    cardStyle = { width: "10rem", height: "25rem", margin: "0.5rem" };
  } else if (isBelowSmallScreens) {
    cardStyle = { width: "14rem", height: "26rem", margin: "0.5rem" };
  } else if (isMediumScreens) {
    cardStyle = { width: "18rem", height: "30rem", margin: "0.5rem" };
  } else if (isAboveMediumScreens) {
    cardStyle = { width: "18rem", height: "35rem", margin: "0.5rem" };
  }
  if (isAboveLargeScreens) {
    cardStyle = { width: "20rem", height: "44rem", margin: "0.5rem" };
  }

  const [isFavorite, setFavorite] = useState(false);

  return (
    <div>
      <Link
        key={id}
        onClick={handleRegularClick}
        to="/productpage"
        className="no-underline"
      >
        <Card style={cardStyle}>
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
              src={images[0].src}
              alt={images[0].alt}
            />
          </span>

          <Card.Body className="flex flex-col justify-between">
            <div className="mt-2">
              <Card.Title>
                <h3 className="text-center">{name}</h3>
              </Card.Title>
            </div>

            {isAboveMediumScreens && (
              <div>
                <Card.Text className="text-center">{details}</Card.Text>
              </div>
            )}
            <div className="mt-auto mb-2 flex justify-center items-center flex-col">
              {" "}
              {/* Add mt-auto to push it to the bottom */}
              <span className="flex  justify-center gap-2">
              <h3 className=" flex font-bold">{price}$</h3>
              <p className=" flex font-normal text-neutral-400 line-through">{oldprice}$</p>
              </span>
              {inStock ? (
                <ButtonLink
                  onClick={handleBuyNowClick}
                  to={"/productpage"}
                  children={"BUY NOW"}
                  disabled={false}
                  className=" bg-black   text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl "
                />
              ) : (
                <ButtonLink
                  to={"/productpage"}
                  children={"UNAVAILABLE"}
                  disabled={true}
                  className=" bg-neutral-400   text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-l "
                />
              )}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default ResponsiveCard;
