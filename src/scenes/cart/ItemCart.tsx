import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { CartItemType } from '@/shared/types';
import { useProductCart } from "@/scenes/cart/ProductCartContext";

export function ItemCart({ id, quantity }: CartItemType) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity, storeItems } =
    useProductCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

console.log(item)


  return (
    <Stack direction="horizontal" gap={2} className="d-flex items-center">
      <img
        src={item.images[0].src}
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{item.name}</div>
      </div>
      <span className="border-solid border-1 flex flex-row align-center border-black">
        <button
          className="border-black border-solid  border-1 p-1"
          type="button"
          onClick={() => {
            decreaseCartQuantity(item.id);
          }}
        >
          -
        </button>

        <span
          className="text-black flex items-center"
          style={{ fontSize: "1rem" }}
        >
          {quantity}
        </span>

        <button
          className="border-black border-solid  border-1 p-1"
          type="button"
          onClick={() => {
            increaseCartQuantity(item.id);
          }}
        >
          +
        </button>
      </span>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
