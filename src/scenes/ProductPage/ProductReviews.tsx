import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import UserImage from "../../assets/user-reviews.png";

const reviews = {
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
      content: `
          <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
        `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily S.",
      avatarSrc: UserImage,
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductReviews() {
  return (
    <Tab.Group
      as="div"
      className="lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 m-auto "
    >
      <Tab.Panels as={Fragment}>
        <Tab.Panel className="-mb-10">
          <div className="lg:col-span-4">
            <h2
              id="reviews-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Buff Pack Reviews
            </h2>

            <div className="mt-3 flex items-center">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
              <p className="ml-2 text-sm text-gray-900">
                Based on {reviews.totalCount} reviews
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
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
                                width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
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

          {reviews.featured.map((review, reviewIdx) => (
            <div key={review.id} className="flex text-sm text-gray-500 items-start"> {/* Updated class to "items-start" */}
              <div className="flex-none py-10 px-1 relative">
                <img
                  src={review.avatarSrc}
                  alt=""
                  className="h-12 w-12 rounded-full bg-gray-100 opacity-40"
                />
              </div>

              <div
                className={classNames(
                  reviewIdx === 0 ? "" : "border-t border-gray-200",
                  "py-10 ml-4",  {/* Added ml-4 for margin */}
                )}
              >
                <span className="font-medium text-base text-gray-900 ">
                  {review.author}{" "}
                  <p className="text-green-700 font-normal text-sm">
                    Verified Buyer
                  </p>
                </span>

                <div className="mt-4 flex items-center"> {/* Moved stars and rating to a new flex container */}
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
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="prose prose-sm mt-4 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}

          
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
