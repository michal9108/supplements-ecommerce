import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import storeItems from "@//data/items.json";

type CartItemProps = {
  id: string;
  quantity: number;
  size: string;
};

export function CartItem({ id, quantity,size }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  const selectedSize = item.sizes.find((s) => s.name === size);

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src="src/assets/buffpack.jpeg"
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name} {selectedSize && selectedSize.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "1rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "1rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
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
