import React from "react";
import crossIcon from "../../assets/redcrossIcon.png";
export default function Guarantee() {
  return (
    <section className="w-full bg-primary-200 py-8">
      <div className="mx-auto min-h-full ">
        <div className="mx-auto  w-5/6  max-w-7xl py-2   md:px-10 md:py-8  md:mx-auto  lg:py-8  2xl-mx-2 border-rose-500 ">
          <div className=" flex gap-3 justify-center flex-wrap">
            <img
              src={crossIcon}
              alt="red cross icon"
              className="w-16 h-16 flex "
            />

            <span className="">
              <div className="my-auto flex justify-center ">
                <h2 className="font-bold text-xxl text-black-900 text-center">
                  30 Days Money Back Guarantee
                </h2>
              </div>
              <div className="flex">
                {" "}
                <p className="text-center ">
                  Unfortunately, testosterone levels have been steadily
                  declining over the last 3 decades.
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
