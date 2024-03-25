import { StarIcon } from "@heroicons/react/24/solid";
import { TestimonialTypes } from "@/shared/types";

export default function Testimonial({
  user: name,
  age,
  city,
  src,
}: TestimonialTypes) {
  return (
    <div className="flex  justify-center">
      <div className="flex  mx-1 my-1 p-1 lg:w-5/6 md:w-5/6 sm:w-5/6 xs:w-5/6 xxs:w-5/6   border-dotted rounded-lg border-3 border-secondary-500">
        <section className="flex p-1  xxs:w-full">
          <span className="mx-auto w-36  items-start flex justify-center md:mx-0 md:p-0 lg:mb-0 pt-4  ">
            <img
              src={src}
              className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20 mx-auto md:mr-5"
              alt="woman avatar"
            />
          </span>
          <span>
            <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
              <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
              <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
              <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
              <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
              <StarIcon className=" h-6 w-6 me-1 flex-shrink-0" />
            </div>

            <figcaption className="flex mt-6 space-x-3 rtl:space-x-reverse">
              <div className="flex flex-col items-start ">
                <div className="flex flex-row gap-1">
                  {" "}
                  <div className=" font-small text-gray-900 ">{name}</div>
                  <div className="  max-w-fit max-h-fit my-auto rounded-lg text-xs tracking-tight text-green-500 text-center">
                    ✅ verified Buyer
                  </div>
                </div>
                <div>
                  {" "}
                  <cite className="text-sm  text-gray-400">
                    {age} years old
                  </cite>
                </div>
                <div>
                  {" "}
                  <cite className="text-sm  text-gray-400">from {city}</cite>
                </div>
              </div>
            </figcaption>
          </span>
        </section>
      </div>
    </div>
  );
}
