import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import UserImage from "../../assets/user-reviews.png";
import USFlag from "../../assets/us.svg";
import H2 from "@/shared/H2";
import { ProductType } from "@/shared/types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductReviews({ reviews, name }: ProductType) {
  return (
    <>
      <H2 children={name + " reviews"} color={"black-900"}></H2>

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
                    {reviews.map((reviewType) =>
                      [0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviewType.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0",
                          )}
                          aria-hidden="true"
                        />
                      )),
                    )}
                  </div>
                  <p className="sr-only">{reviews[0].average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">
                  Based on {reviews[0].totalCount} reviews
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {reviews.map((reviewType) =>
                    reviewType.counts.map((count) => (
                      <div
                        key={count.rating}
                        className="flex items-center text-sm"
                      >
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
                                    width: `calc(${count.count} / ${reviewType.totalCount} * 100%)`,
                                  }}
                                />
                              ) : null}
                            </div>
                          </div>
                        </dt>
                        <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                          {Math.round(
                            (count.count / reviewType.totalCount) * 100,
                          )}
                          %
                        </dd>
                      </div>
                    )),
                  )}
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

                <div className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full">
                  Write a review
                </div>
              </div>
            </div>

            {reviews.map((reviewType) =>
              reviewType.featured.map((review, reviewIdx) => (
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
                        {/* SVG PATH */}
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
                        <span className="float-right mr-1 font-medium text-sm text-center">
                          {review.datetime}
                        </span>
                      </section>
                      <span className="flex">
                        {/* FLAG ICON */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icons-us"
                          viewBox="0 0 512 512"
                          className="w-5"
                        >
                          {/* SVG PATH */}
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
              )),
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
