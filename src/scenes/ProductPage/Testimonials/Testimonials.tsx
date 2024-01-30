import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import Testimonial from "./Testimonial"

const Testimonials = () => {
  const starIcon = () => (
    <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
      <svg
        className="w-6 h-6 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        {" "}
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
  //className="mx-auto min-h-full w-5/6 py-1"
  // my-2  gap-3  items-center justify-center
  return (
    <>
      <section>
        {/*  TO DO Review element */}
        <div className="flex  items-center justify-center py-2  sm:flex-col md:my-2 md:w-full "
        
          // className="mx-auto flex w-5/6 my-2  gap-3  items-center justify-center"
        >
          <figure 
           className=" items-center justify-center  flex gap-3 flex-wrap border-box "
          // className="max-w-screen-md flex justify-center  mx-auto min-h-full w-5/6  max-md:flex-col"
          >
            <Testimonial name="Bonnie" age={25} city="Los Angeles" />
            <Testimonial name="John" age={30} city="Seattle" />
            <Testimonial name="Laura" age={18} city="Denver" />
           
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
