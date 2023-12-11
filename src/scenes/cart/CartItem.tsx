import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";

type CartItemProps = {
  id: number;
  quantity: number;
};

const storeItems = [
  {
    id: 1,
    name: "Book",
    price: 10.99,
  },
  {
    id: 2,
    name: "Computer",
    price: 1199,
  },
  {
    id: 3,
    name: "Banana",
    price: 1.05,
  },
  {
    id: 4,
    name: "Car",
    price: 14000,
  },
];

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item.price}
        </div>
      </div>
      <div> {item.price * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
