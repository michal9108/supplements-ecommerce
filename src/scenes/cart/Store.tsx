import { Col, Row } from "react-bootstrap";
import { StoreItem } from "@/scenes/cart/StoreItem";

const storeItems = [
  {
    id: 1,
    name: "Book",
    price: 10.99,
    imgUrl: "/imgs/book.jpg",
  },
  {
    id: 2,
    name: "Computer",
    price: 1199,
    imgUrl: "/imgs/computer.jpg",
  },
  {
    id: 3,
    name: "Banana",
    price: 1.05,
    imgUrl: "/imgs/banana.jpg",
  },
  {
    id: 4,
    name: "Car",
    price: 14000,
    imgUrl: "/imgs/car.jpg",
  },
];

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
