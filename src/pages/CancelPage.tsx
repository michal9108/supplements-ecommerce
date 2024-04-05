import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

export default function CancelPage() {
  return (
    <div className="mt-20">
      
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <XCircleIcon className="mx-auto h-10 w-10 text-red-500 dark:text-red-400" />

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-500 dark:text-red-400 sm:text-5xl">
            Transaction has been cancelled! Please try again
          </h1>

          <div className="mt-10 flex items-center justify-center  flex-col gap-6">
            <Link
              to="/"
              className="rounded-lg bg-secondary-500 px-20 py-3 text-primary-100 no-underline font-semibold text-xl  shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Go back home
            </Link>

           
            <h4 className="text-sm font-semibold">Contact support  <Link to="support@bodybuff.com">support@bodybuff.com</Link></h4>
           
          </div>
        </div>
      </main>
    </div>
  );
}
