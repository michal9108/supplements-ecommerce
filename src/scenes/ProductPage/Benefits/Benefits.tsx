import React from 'react'
import Benefit from './Benefit'

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

            {/* BENEFITS GRID */}
            <div className="grid gap-3 sm:grid-cols-2  md:grid-rows-1 md:grid-cols-4">
       <Benefit/>
       <Benefit/>
       <Benefit/>
       <Benefit/>
            
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
