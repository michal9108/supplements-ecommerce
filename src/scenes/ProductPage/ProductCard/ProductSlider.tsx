import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ProductSliderType } from "@/shared/types";

const ProductSlider: React.FC<ProductSliderType> = ({ images }) => {
  const isAboveMd = window.innerWidth >= 1060;

  const indicators = (index) => (<div className="indicator"></div>);


   const properties = {
    duration:3000,
    transitionDuration: 300,
    indicators:true,
   }
  return (
    <section className="p-1 flex h-full w-full sm:w-1/2 justify-items-center	justify-center">
    <div className="   w-11/12 h-11/12 max-md:w-11/12">
      <div>
        <Slide {...properties} indicators={indicators}>
          {images.map((slideImage, index) => (
            <div key={index}>
              <div>
                <img src={slideImage.src} className="rounded-lg" />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
    </section>
  );
};

export default ProductSlider;
