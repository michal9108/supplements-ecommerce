import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "@/scenes/cart/ShoppingCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { CartItem } from "@/scenes/cart//CartItem";
import storeItems from "@//data/items.json";
import cardsIcons from "@/assets/cardsIcons.png"
import { ShoppingCartType } from "@/shared/types";


export function ShoppingCart({ isOpen }: ShoppingCartType) {
  const { closeCart, cartItems } = useShoppingCart();

  //request to STRIPE on checkout
  const checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
          // Forwarding user to Stripe
        }
      });
  };

  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      className="rounded-lg"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column gap-3">
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="flex mt-auto text-2xl  font-extrabold justify-between ">
            <div className="flex"> Subtotal</div>
            <div className="  flex">
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </div>
          </div>
        </Stack>
        <button
          onClick={checkout}
          className="mt-auto flex  w-full items-end justify-center rounded-md border border-transparent  font-bold px-8 py-3 text-3xl text-primary-100 bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Checkout
        </button>
        <img src={cardsIcons} className="mt-auto" alt="" />
        <div
          onClick={closeCart}
          className="mt-auto flex font-semibold w-full items-center justify-center underline-offset-4"
        >
          Continue Shopping
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
