import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import UserImage from "../../assets/user-reviews.png";
import USFlag from "../../assets/us.svg";
import H2 from "@/shared/H2";

const ReviewsArray = {
  totalCount: 1624,
  average: 4,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      title:"Really amazing",
      content: `
          <p>Since I started using this supplement, my workouts have been more productive than ever! It provides me with the energy and focus I need to push through my routines. Plus, it's easy on the stomach, which is a huge bonus for me.</p>
        `,
   
      datetime: "2022-03-25",
      author: "Emily S.",

    },
    {
      id: 2,
      rating: 5,
      content: `
          <p>I can't say enough good things about this supplement. It has helped me achieve my fitness goals faster and more efficiently. The taste is also great, making it enjoyable to consume daily.</p>
        `,
   
      datetime: "2022-02-10",
      author: "Tom B.",
  
    },
    {
      id: 3,
      rating: 5,
      content: `
          <p>After incorporating this supplement into my diet, I've noticed a significant improvement in my recovery time and overall muscle tone. It's become an essential part of my fitness routine!</p>
        `,

      datetime: "2022-01-05",
      author: "Peter M.",
 
    },
    {
      id: 4,
      rating: 5,
      content: `
          <p>This supplement has been a game-changer for me. It provides the perfect balance of nutrients to fuel my workouts and keep me energized throughout the day. I highly recommend it to anyone serious about fitness!</p>
        `,

      datetime: "2021-12-20",
      author: "Jane S.",
  
    },
    {
      id: 5,
      rating: 5,
      content: `
          <p>I've tried many supplements in the past, but this one is by far the best. It's easy to digest, tastes good, and most importantly, it delivers results. I'm extremely satisfied with my purchase!</p>
        `,
   
      datetime: "2021-11-10",
      author: "Lea B.",
      
    },{
      id: 6,
      rating: 5,
      content: `
          <p>This supplement has exceeded my expectations in every way. Not only does it provide me with the necessary energy for intense workouts, but it also supports my overall health and well-being. Plus, the ingredients are clean and high-quality, which gives me peace of mind.</p>
        `,

      datetime: "2022-04-05",
      author: "Training workout",
      
    },
    
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductReviews() {
  return (
    <>
     <H2 children="Buff Pack Reviews" color={"black-900"}           
        
            >
            
            </H2>
            <Tab.Group
      as="div"
      className="lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 m-auto "
    >
      <Tab.Panels as={Fragment}>
        <Tab.Panel className="-mb-13">
          <div className="lg:col-span-4">
           

            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        ReviewsArray.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{ReviewsArray.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">
                Based on {ReviewsArray.totalCount} reviews
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {ReviewsArray.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div
                        aria-hidden="true"
                        className="ml-1 flex flex-1 items-center"
                      >
                        <StarIcon
                          className={classNames(
                            count.count > 0
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0",
                          )}
                          aria-hidden="true"
                        />

                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-200" />
                          {count.count > 0 ? (
                            <div
                              className="absolute inset-y-0 rounded-full border border-black-900 bg-black-900"
                              style={{
                                width: `calc(${count.count} / ${ReviewsArray.totalCount} * 100%)`,
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / ReviewsArray.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Share your thoughts
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If you’ve used this product, share your thoughts with other
                customers
              </p>

              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
              >
                Write a review
              </a>
            </div>
          </div>

          {ReviewsArray.featured.map((review, reviewIdx) => (
            <div
              key={review.id}
              className="flex  flex-col text-sm text-gray-500 items-start"
            >
              <span className="flex">
                {/* AVATAR */}
                <div className="flex-none  pt-3 px-1 relative">
                  <img
                    src={UserImage}
                    alt=""
                    className="h-12 w-12 rounded-full bg-gray-100 opacity-40"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="green"
                    className="w-6 h-6 absolute top-11 right-0 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-gray-200",
                    "py-3 ml-1",
                  )}
                >
                  <section className="w-full">
                  <span className="font-medium text-base text-gray-900 ">
                    {review.author}
                  </span>
                  <strong className="text-green-700 font-normal text-sm mx-1">
                    Verified Buyer
                  </strong>
                 <span className="float-right mr-1 font-medium text-sm text-center">{review.datetime}</span>

                  </section>
                  <span className="flex">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icons-us"
                      viewBox="0 0 512 512"
                      className="w-5  "
                    >
                      <path fill="#bd3d44" d="M0 0h512v512H0" />
                      <path
                        stroke="#fff"
                        stroke-width="40"
                        d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
                      />
                      <path fill="#192f5d" d="M0 0h390v275H0z" />
                      <marker id="us-a" markerHeight="30" markerWidth="30">
                        <path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
                      </marker>
                      <path
                        fill="none"
                        marker-mid="url(#us-a)"
                        d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"
                      />
                    </svg>
                    <div className="text-gray-400 font-normal text-sm mx-1">
                      USA
                    </div>
                  </span>
                </div>
              </span>

              <span className="">
                {/* RATING  */}

                <div className="mt-1 flex items-center">
                  {" "}
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                  <strong className="font-bold text-sm text-black-900">
                    {review.title}
                  </strong>
                </div>

                {/* TEXT CONTENT  */}
                <div
                  className="prose prose-sm mt-1 max-w-none text-black-900"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </span>
            </div>
          ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </>
    
  );
}
