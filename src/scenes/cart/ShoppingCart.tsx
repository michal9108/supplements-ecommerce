import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { CartItem } from "@/scenes/cart//CartItem";
import storeItems from "@//data/items.json";
// import ActionButton from "@/shared/ActionButton";
// import { useContext } from "react";
type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // const cart = useContext(ShoppingCartContext)

  //request to STRIPE on checkout
  const checkout = async () => {
    await fetch(
      "https://supplements-ecommerce-git-structure3-mikes-projects-b8b6e248.vercel.app/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
        //possible bug
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

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
        <button
          onClick={checkout}
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Checkout
        </button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
