import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { CartItem } from "@/scenes/cart//CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

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

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0),
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
