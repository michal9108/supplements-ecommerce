import React from 'react'
import image1 from "@/assets/image1.png";

const features = () => {
  return (
    <div>
       <section>
          {/* Features Container */}
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            {/* Features Title */}
            <div className="text-center">
              <h4 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16">
                Lorem ipsum dolor:
              </h4>
            </div>
            {/* Features Grid */}
            <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
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
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
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
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center">
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
              {/* Features Item */}
              <div className="grid gap-1 p-8 md:p-6 justify-items-center">
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
            <div className="grid gap-1 p-8 md:p-6 justify-items-center ">
              <img src={image1} className=" w-2/6  xs:w-4/6  sm:w-3/6 "></img>
            </div>
          </div>
        </section>
    </div>
  )
}

export default features
