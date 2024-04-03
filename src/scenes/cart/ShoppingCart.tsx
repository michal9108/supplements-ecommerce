import { Offcanvas, Stack } from "react-bootstrap";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { formatCurrency } from "@/scenes/cart/formatCurrency";
import { ItemCart } from "@/scenes/cart/ItemCart";

import cardsIcons from "@/assets/cardsIcons.png";
import { ShoppingCartType } from "@/shared/types";
import emptyCart from "@/assets/empty-cart.svg";
import ButtonLink from "@/shared/ButtonLink";


export function ShoppingCart({ isOpen }: ShoppingCartType, id: number) {
  const { closeCart, cartItems, subtotal, savedAmount } = useProductCart();
 

  //request to STRIPE on checkout
  const checkout = async () => {
    console.log("cartItems:", cartItems);
    await fetch(import.meta.env.VITE_URL + '/checkout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network reponse was not ok");
        }
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
          //Forwarding user to Stripe
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
      {cartItems.length === 0 ? (
        <Offcanvas.Body className="  flex flex-col gap-3 items-center justify-center h-full content-center">
          <div
            onClick={closeCart}
            className=" flex flex-col font-bold w-full justify-center items-center  absolute top-1/3 underline-offset-4"
          >
            <p className="uppercase text-xl ">Your cart is empty</p>
            <p className="text-gray-500">There are no products in your cart</p>
            <img src={emptyCart} alt="" />
            <ButtonLink
              to="/"
              children="Continue Shopping"
              className="bg-black  text-primary-100 no-underline px-6 py-2.5 rounded-lg font-semibold text-xl "
              disabled={false}
            />
          </div>
        </Offcanvas.Body>
      ) : (
        <Offcanvas.Body className="d-flex flex-column gap-3">
          {subtotal() > 90 ? (
            <div className="mt-auto flex font-semibold w-full items-center justify-center underline-offset-4">
              {" "}
              You unlocked free Shipping !!! 🎉🥳{" "}
            </div>
          ) : (
            <div className="mt-auto flex font-semibold w-full items-center justify-center underline-offset-4">
              {" "}
              Add {formatCurrency(90 - subtotal())} to get free shipping 🙂{" "}
            </div>
          )}
          <Stack gap={3}>
            {cartItems.map((item) => (
              <ItemCart key={item.id} {...item} />
            ))}

            <div className="flex max-w-fit max-h-fit border-solid border-green-500 bg-green-500 rounded-lg p-2 mx-auto">
              <div className="text-xs tracking-tight text-primary-100 text-center ">
                You save in total {formatCurrency(savedAmount())}!!!🎉🥳
              </div>
            </div>

            <div className="flex mt-auto text-2xl  font-extrabold justify-between ">
              <div className="flex"> Subtotal</div>
              <div className="  flex">{formatCurrency(subtotal())}</div>
            </div>
          </Stack>
          
          <button
            onClick={checkout}
            className="mt-auto flex  w-full items-end justify-center rounded-md border border-transparent  font-bold px-8 py-3 text-3xl text-primary-100 bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Checkout
          </button>

          <p className="text-center mb-0"> Guaranteed Safe & Secure Checkout</p>
          <img src={cardsIcons} className="mt-auto" alt="" />
          <div
            onClick={closeCart}
            className="mt-auto flex font-semibold w-full items-center justify-center underline-offset-4"
          >
            Continue Shopping
          </div>
        </Offcanvas.Body>
      )}
    </Offcanvas>
  );
}
