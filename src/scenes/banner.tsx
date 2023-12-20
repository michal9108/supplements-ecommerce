import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
const Banner = () => {
  return (
    <div className="fixed isolate flex justify-center items-center  z-30 w-full overflow-hidden bg-black sm:px-3.5 ">
      <div className="flex gap-y-2 gap-x-2">
       
        <p className="text-sm leading-6 text-white ">
          <strong className="font-semibold">30 DAY MONEY-BACK GUARANTEE</strong>
        </p>
        <p className="text-sm leading-6 text-white ">
          <strong className="font-semibold"> | </strong>
        </p>
        <p className="text-sm leading-6 text-white ">
          <strong className="font-semibold">
            IMPROVED MORE THAN 328,600 LIVES
          </strong>
        </p>
        </div>
    
    
    </div>
  );
};

export default Banner;

