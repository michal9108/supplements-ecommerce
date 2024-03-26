import { Link } from "react-router-dom";
import{ stripe } from "../shared/stripe"
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

interface Props {
  searchParams: {
    session_id?: string;
  };
}

export default async function SuccesPage({ searchParams }: Props) {

  const {setCartItems} =useProductCart();
  const sessionId = searchParams?.session_id ?? "";
  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const customerDetails = checkoutSession?.customer_details;

  // const{clearCart} =useShoppingCart()

  useEffect(()=>{
    if (customerDetails) {
      setCartItems([])
    }
  },[customerDetails])

    if (!customerDetails) {
      return (
        <>
          {/* <XCircle className="mx-auto h-10 w-10 text-red-400" /> */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
            No checkout session found
          </h1>
        </>
      )
    }

  return (
    <div className="mt-20">
      {/* <h2>Thank you for your order!</h2>
      <p>Check Your emaik inbox for the receipt.</p>
      <p>
        If you have any question don;t hasitate to use chat in right- bottom
        corner or email to{" "}
       
      </p> */}

      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <CheckBadgeIcon className="mx-auto h-10 w-10 text-lime-500 dark:text-lime-400" />

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-lime-500 dark:text-lime-400 sm:text-5xl">
            Order Successful!
          </h1>
          <h3 className="mt-8 text-2xl leading-7">
            Thank you,
            {/* <span className="font-extrabold">{customerDetails.name}</span>! */}
          </h3>
          <p className="mt-8">
            Check your purchase email{" "}
            {/* <span className="mx-1 font-extrabold text-yellow-500">{customerDetails.email}</span>  */}
            for your invoice.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Go back home
            </Link>
            <h4 className="text-sm font-semibold">Contact support</h4>
            <a href="support@bodybuff.com">support@bodybuff.com</a>
          </div>
        </div>
      </main>
    </div>
  );
}
