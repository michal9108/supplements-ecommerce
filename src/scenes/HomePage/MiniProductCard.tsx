import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image13 from "../../assets/image13.webp";
import useMediaQuery from "@/hooks/useMediaQuery";

function MiniProductCard() {
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
      <Card.Img variant="top" src={image13} />
      <Card.Body>
        {isAboveMediumScreens && (
          <div>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </div>
        )}
        <div className="flex justify-center">
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MiniProductCard;
