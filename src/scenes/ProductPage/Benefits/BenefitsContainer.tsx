import fitPortrait from "../../../assets/fitPortrait.png";
import BenefitsBox from "./BenefitsBox";
import BenefitsBanner1 from "../../../assets/BenefitsBanner1.webp";
export default function BenefitsContainer() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:pb-20 lg:pt-200">
        <img
          src={BenefitsBanner1}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="mx-auto max-w-7xl px-6 my-10 lg:px-8">
          {/* py for lg*/}
          <div className="mx-auto max-w-2xl py-40 sm:py-48 lg:pt-95">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                BUFF PACK:
              </h1>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Mass Gain
              </h1>

              <p className="mt-16 text-lg font-medium leading-8 text-primary-100">
                Buff Pack is an premium testosterone-boosting supplement
                designed to propel ambition, ignite vitalitya and sculpt your
                physique.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 py-4 md:px-10 md:py-24 lg:py-32 flex max-sm:flex-col-reverse">
        <div className="flex flex-col">
          {/* Benefits  Grid */}
          <div className="grid gap-3 sm:grid-cols-4  md:grid-rows-1 md:grid-cols-4">
            <BenefitsBox
              name="Enhance your libido"
              text="  Take your intimate experiences to new heights.
             
      aliquam, purus sit."
            />
            <BenefitsBox
              name="Trim body fat & Develop lean muscle"
              text="   Attain a toned and sculpted physique.
              "
            />
            <BenefitsBox
              name="Increase Quality of Life"
              text=" Enhance overall well-being and fulfillment.
            "
            />
            <BenefitsBox
              name="Boost your ambition."
              text="Enhance overall well-being and fulfillment."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
