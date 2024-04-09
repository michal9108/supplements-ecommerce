import { Link } from "react-router-dom";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";


export default function SuccesPage() {
  return (
    <div className="mt-20">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <CheckBadgeIcon className="mx-auto h-10 w-10 text-green-500 dark:text-green-400" />

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-500 dark:text-green-400 sm:text-5xl">
            Order Successful!
          </h1>

          <p className="mt-8">
            Check your purchase email
            <span className="mx-1 font-extrabold text-black-500">
          
            </span>
            for your invoice.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className=" no-underline rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Go back home
            </Link>
            <h4 className="text-sm font-semibold">Contact support</h4>
            <div> support@bodybuff.com </div>
          </div>
        </div>
      </main>
    </div>
  );
}
