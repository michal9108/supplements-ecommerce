import React from 'react'

export default function InfoMessage() {
  return (
    <>
    <section className="mx-auto min-h-full w-5/6 py-1">
    <div className="mx-auto p-2 w-full border-dotted rounded-lg border-3 border-secondary-500 md:mx-auto 2xl-mx-2">
      <div className="flex gap-2 ">
        {" "}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
            fill="currentColor"
          />
          <path
            d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="font-bold text-lg text-gray-900 ">
          Low Testosterone is a real buzz killer
        </h2>
      </div>

      <p className="py-0">
        Unfortunately, testosterone levels have been steadily declining
        over the last 3 decades. Plain and simple, your father and
        grandfathers had much higher testosterone levels than you. This is
        due to a number of reasons such as: higher levels of chronic
        stress, increases in body fat, and a massive increase in
        environmental estrogens.
      </p>
    </div>
  </section>
  <section className="mx-auto min-h-full w-full py-3">
  <p className=" text-2xl text-gray-900 mx-4 ">
    Enhancing your testosterone levels naturally acts as a powerful
    asset, akin to unlocking a hidden potential:
    <strong className="italic">
      powering you up with more ambition, a higher sex drive, less fat,
      more muscle and a higher quality of life.
    </strong>
  </p>
</section>
</>
  )
}
