import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image13 from "../../assets/image13.webp";
function ProductCard() {
  return (
    <Card style={{ width: '18rem', margin:'1rem'}}>
      <Card.Img variant="top" src={image13} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;