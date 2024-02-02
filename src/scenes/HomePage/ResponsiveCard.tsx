import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ResponsiveCardType } from "@/shared/types";

function ResponsiveCard({ img, title, text }:ResponsiveCardType) {
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
    <Card style={cardStyle}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <h3 className="text-center">{title}</h3>
        </Card.Title>
        {isAboveMediumScreens && (
          <div>
            <Card.Text>{text}</Card.Text>
          </div>
        )}
        <div className="flex justify-center">
          <Button variant="dark" size="lg" className="w-100">
            BUY NOW
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ResponsiveCard;
