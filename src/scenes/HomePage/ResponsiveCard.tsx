import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ProductType } from "@/shared/types";
import ButtonLink from "@/shared/ButtonLink";
import { useProductCart } from "../cart/ShoppingCartContext";

function ResponsiveCard({ id, images, name, details, price, oldprice, highlights, reviews, href }: ProductType) {
  const { setProductDetails,increaseCartQuantity, openCart } = useProductCart();

  const handleBuyNowClick = () => {
    setProductDetails({
      id,
      name,
      price,
      oldprice,
      images,
      details,
      highlights,
      reviews,
      href,
    });

    increaseCartQuantity(id);
  openCart()
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
    cardStyle = { width: "8rem", margin: "0.5rem" };
  } else if (isBelowsxScreens) {
    cardStyle = { width: "10rem", margin: "0.5rem" };
  } else if (isBelowSmallScreens) {
    cardStyle = { width: "14rem", margin: "0.5rem" };
  } else if (isMediumScreens) {
    cardStyle = { width: "18rem", margin: "0.5rem" };
  } else if (isAboveMediumScreens) {
    cardStyle = { width: "18rem", margin: "0.5rem" };
  }
  if (isAboveLargeScreens) {
    cardStyle = { width: "20rem", margin: "0.5rem" };
  }

  return (
    <div key={id}>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={images[0].src} />
        <Card.Body>
          <Card.Title>
            <h3 className="text-center">{name}</h3>
          </Card.Title>
          {isAboveMediumScreens && (
            <div>
              <Card.Text>{details}</Card.Text>
            </div>
          )}
          <div className="flex justify-center">
            <ButtonLink
              onClick={handleBuyNowClick}
              to={"/productpage"}
              children={"BUY NOW"}
              className="bg-black  text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl "
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ResponsiveCard;
