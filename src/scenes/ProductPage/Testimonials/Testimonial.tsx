import React from "react";

import { StarIcon } from "@heroicons/react/24/solid";


interface TestimonialProps  {
    name:string,
    age:number,
    city:string,

}

export default function Testimonial({name, age, city}: TestimonialProps) {
  return (
    <div className="flex max-w-lg justify-center">
      <div className="flex  mx-1 my-3 p-1 border-dotted rounded-lg border-3 border-rose-500">
        <div className="mx-auto w-36 items-start flex justify-center md:mx-0 md:p-0 lg:mb-0  md:pt-5 ">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
            className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20 mx-auto md:mr-5"
            alt="woman avatar"
          />
        </div>
        <div>
          <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
            <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
            <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
            <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
            <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
            <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
          </div>

          <figcaption className="flex mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex flex-col items-start ">
              <div>
                {" "}
                <cite className=" font-small text-gray-900 ">{name}</cite>
              </div>
              <div>
                {" "}
                <cite className="text-sm  text-gray-400">{age} years old</cite>
              </div>
              <div>
                {" "}
                <cite className="text-sm  text-gray-400">from {city}</cite>
              </div>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}
