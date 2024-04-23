
import aboutus from "../../../assets/about-us-1copy.webp";
import { Featurestype, ProductType } from "@/shared/types";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import { Slide } from "react-slideshow-image";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import "react-slideshow-image/dist/styles.css";
import { ProductSliderType } from "@/shared/types";
import {
  HeartIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
import { HeartIcon as HearIconOutlined } from "@heroicons/react/24/outline";
const indicators = () => <div className="indicator pr-8  m-px"></div>;



  

export default function FeaturesContainer({ features, images, name }: ProductType) {
  const properties = {
    duration: 3000,
    transitionDuration: 300,
    indicators: true,
  };
  return (
    <div>
      <section className="bg-primary-100 ">
        <span className="md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 m-auto  ">
          {/* Features Container */}
          <div className="mx-auto max-w-7xl py-2 md:px-10 md:py-32">
            {/* Features Title */}
            <div className="text-center ">
              <h2 className="text-4xl font-bold  italic md:text-5xl my-10">
                Why {name}? 
              </h2>
            </div>
          </div>
        </span>

        <div className="overflow-hidden bg-white sm:py-15">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 sm:mx-0 sm:max-w-none sm:grid-cols-2">
            

              <section className="p-1 flex h-full w-full sm:w-full justify-items-center	justify-center items-center">
      <div className="   w-11/12 h-11/12 max-md:w-11/12">
        <div>
          <Slide {...properties} indicators={indicators}>
            {images.slice(5,8).map((slideImage, index) => (
              <div key={index}>
                <div className="relative">
                  <img
                    src={slideImage.src}
                    className="rounded-lg"
                    alt={`Slide ${index}`}
                  />
                  
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>

              <div className="md:ml-auto md:pl-4 md:pt-4">
                <div className="lg:max-w-lg">
                  <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature: Featurestype) => (
                      <div key={feature.featuretitle} className="relative pl-9">
                        <dt className=" font-semibold text-gray-900">
                          <CheckBadgeIcon
                            className="absolute left-1 h-7 w-7 text-green-600"
                            aria-hidden="true"
                          />
                          {feature.featuretitle}
                        </dt>{" "}
                        <dd className="inline">{feature.text}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
