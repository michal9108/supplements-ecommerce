import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

const testimonials = () => {
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

  return (
    <div>
      <section className="mx-auto my-2  gap-8  items-center justify-center  flex   w-screen">
        {/*  TO DO Review element */}
        <div>
          <figure className="max-w-screen-md flex justify-center  mx-auto min-h-full w-5/6  max-md:flex-col	">
            <div className="flex max-w-lg justify-center">
              <div className="flex  m-6 p-1 border-dotted rounded-lg border-3 border-rose-500">
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
                        <cite className=" font-small text-gray-900 ">
                          Bonnie
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          25 years old
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          from Los Angeles
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="flex max-w-lg justify-center">
              <div className="flex  m-6 p-1 border-dotted rounded-lg border-3 border-rose-500">
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
                        <cite className=" font-small text-gray-900 ">
                          Bonnie
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          25 years old
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          from Los Angeles
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
            <div className="flex max-w-lg justify-center">
              <div className="flex  m-6 p-1 border-dotted rounded-lg border-3 border-rose-500">
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
                        <cite className=" font-small text-gray-900 ">
                          Bonnie
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          25 years old
                        </cite>
                      </div>
                      <div>
                        {" "}
                        <cite className="text-sm  text-gray-400">
                          from Los Angeles
                        </cite>
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default testimonials;
