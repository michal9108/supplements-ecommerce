import { Button, Stack } from "react-bootstrap";
import storeItems from "@//data/items.json";

import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import shopItems from "../../data/items.json"
import buffpack1 from "../../assets/buffpack1.png";
import { CartItemType, ProductType } from '../../shared/types'



export function CartItem({ id, quantity }: CartItemType) {

 

  const { removeFromCart } = useShoppingCart();


  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={buffpack1}
        style={{ width: "70px", height: "70px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name} 
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
