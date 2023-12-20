import React from "react";

const reviews = () => {
  return (
    <div>
      <section className="mx-auto my-5  gap-8  items-center justify-center  md:flex   w-screen">
        {/*  TO DO Review element */}

        <figure className="max-w-screen-md flex justify-center mx-auto min-h-full w-5/6 	">
          <div className="max-w-3xl">
            <div className="md:flex md:flex-row m-6 p-1 border-dotted rounded-lg border-2 border-rose-500">
              <div className="mx-auto w-36 items-start flex justify-center md:mx-0 md:w-96 md:p-0 lg:mb-0  md:pt-5 ">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                  className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20 mx-auto md:mr-5"
                  alt="woman avatar"
                />
              </div>
              <div className="">
                <div className="flex items-center my-4 text-yellow-300 max-md:justify-center">
                  <svg
                    className="w-6 h-6 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>

                <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
                    <cite className="pe-3 font-small text-gray-900 ">
                      Bonnie
                    </cite>
                    <cite className="ps-3 text-sm  text-gray-400">
                      25 years old | from Los Angeles
                    </cite>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>

        {/* <section className="">
            <div className=" rounded-md p-6  max-w-screen-md shadow-lg md:p-6 md:text-left flex justify-center">
              <div className="max-w-3xl">
                <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                  <div className="md:flex md:flex-row">
                    <div className="mx-auto  flex w-36 items-start justify-center md:mx-0 md:w-96 lg:mb-0">
                      <img
                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                        className="rounded-full shadow-md dark:shadow-black/30 w-20 h-20"
                        alt="woman avatar"
                      />
                    </div>
                    <div>
                      <p className="mb-1 font-thin text-neutral-500 dark:text-neutral-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </p>
                      <p className="mb-2 text-xl font-thin text-neutral-800 dark:text-neutral-200">
                        Anna Smith
                      </p>
                      <p className="mb-0 font-thin text-neutral-500 dark:text-neutral-400">
                        Product manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
      </section>
    </div>
  );
};

export default reviews;
