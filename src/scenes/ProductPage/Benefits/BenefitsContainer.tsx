import fitPortrait from "../../../assets/fitPortrait.png";
import BenefitsBox from "./BenefitsBox";
import BenefitsBanner1 from "../../../assets/BenefitsBanner1.webp";
import { ProductType } from "@/shared/types";

export default function BenefitsContainer({
  benefits,
  images,
  name,
  details,
}: ProductType) {
  // const benefitsArray = benefits || [];

  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:pb-20 lg:pt-200">
        <img
          src={images[4].src}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-7xl px-6 my-10 lg:px-8">
          {/* py for lg*/}
          <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:pt-95">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"></h1>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {name}
              </h1>

              <p className="mt-16 text-lg font-medium leading-8 text-primary-100">
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 py-4 md:px-10 md:py-24 lg:py-32 flex max-sm:flex-col-reverse">
        <div className="flex flex-col">
          {/* Benefits  Grid */}

          <div className="grid gap-3 sm:grid-cols-4  md:grid-rows-1 md:grid-cols-4">
            {benefits.map((benefit, index) => {
              return (
                <div key={index}>
                  <BenefitsBox
                    benefittitle={benefit.benefittitle}
                    text={benefit.text}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
