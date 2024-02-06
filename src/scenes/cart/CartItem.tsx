import { Button, Stack } from "react-bootstrap";
import storeItems from "@//data/items.json";

import { useProductCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { CartItemType, ProductType } from '../../shared/types'



export function CartItem({ id, quantity,image }: CartItemType) {

 

  const { removeFromCart } = useProductCart();


  const item = storeItems.find((i) => i.id === id);

  if (!item || !image) {
    console.error("Item not found or images not available:", id);
    return null;
  }



  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.images[0].src}
        
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
