
//@ts-nocheck
import { Link } from "react-router-dom";
// import { stripe } from "../shared/stripe";

import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Stripe from "stripe";

interface Props {
  searchParams: {
    session_id?: string;
  };
}

interface Props {
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null
}

export default function SuccesPage({ searchParams }: Props) {



// const stripe = require('stripe')('sk_test_51HDZZtH9dKBRlDkrGypI7RjGytgwPUtI3mSHLWvdFtyo23eIpO3l3BSwjLbkIWNLZMonZluAfngDX5kKus8GpeLk00OVyIp7dR');

  const { setCartItems } = useProductCart();
  const sessionId = searchParams?.session_id ?? "";
  const [customerDetails, setCustomerDetails] = useState();

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      try {
        // console.log("Fetching checkout session with session ID:", sessionId);
        const session =
          await stripe.checkout.sessions.retrieve(sessionId);
        console.log("Fetched checkout session:", session);
        const details = session?.customer_details;
        console.log("Fetched customer details:", details);
        if (details) {
          setCartItems([]);
          setCustomerDetails(details);
          console.log("Customer details set:", details);
        }
      } catch (error) {
        console.error("Error retrieving checkout session:", error);
      }
    };

    if (sessionId) {
      fetchCheckoutSession();
    }
  }, [sessionId, setCartItems]);

  // console.log("Current customer details:", customerDetails);
  // if (!customerDetails) {
  //   console.log("No customer details found.");
  //   return (
  //     <>
  //       <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
  //         No checkout session found
  //       </h1>
  //     </>
  //   );
  // }

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
          <CheckBadgeIcon className="mx-auto h-10 w-10 text-orange-500 dark:text-orange-400" />

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-orange-500 dark:text-orange-400 sm:text-5xl">
            Order Successful!
          </h1>
          <h3 className="mt-8 text-2xl leading-7">
            Thank you,
            <span className="font-extrabold">{customerDetails?.name}</span>!
          </h3>
          <p className="mt-8">
            Check your purchase email{" "}
            <span className="mx-1 font-extrabold text-yellow-500">
              {customerDetails?.email}
            </span>
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
