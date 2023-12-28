import React from 'react'

const benefits = () => {
  return (
    <div>
       <section>
          {/* Benefits Container */}
          <div className="mx-auto max-w-7xl px-4 py-10 md:px-10 lg:py-32">
            {/* Benefits Title */}
            <div className="text-center ">
              <h2 className="text-3xl font-bold md:text-5xl">
                Make every step user-centric
              </h2>
              <h3 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] lg:mb-16">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam,purus sit amet luctus magna fringilla urna
              </h3>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Support</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center ">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Organise</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
              {/* Benefits Item */}
              <div className="grid gap-1 p-2 md:p-6 justify-items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
                  alt=""
                  className="inline-block h-8"
                />
                <p className="text-xl font-semibold">Flexibility</p>
                <p className="text-sm text-[#636262]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                  aliquam, purus sit.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center my-2 ">
              <button
                type="submit"
                className="w-4/6 min-width-auto rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center"
              >
                <div className="mb-1">Supercharge Your Testosterone</div>
                <div className="text-sm">30 Days Money Back Guarantee</div>
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default benefits
