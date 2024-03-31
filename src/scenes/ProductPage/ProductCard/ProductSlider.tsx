import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ProductSliderType } from "@/shared/types";
import {
  HeartIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
import { HeartIcon as HearIconOutlined } from "@heroicons/react/24/outline";

const ProductSlider: React.FC<ProductSliderType> = ({ images }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isAboveMd = window.innerWidth >= 1060;

  const indicators = () => <div className="indicator pr-8  m-px"></div>;

  const properties = {
    duration: 3000,
    transitionDuration: 300,
    indicators: true,
  };
  return (
    <section className="p-1 flex h-full w-full sm:w-1/2 justify-items-center	justify-center">
      <div className="   w-11/12 h-11/12 max-md:w-11/12">
        <div>
          <Slide {...properties} indicators={indicators}>
            {images.slice(0, 4).map((slideImage, index) => (
              <div key={index}>
                <div className="relative">
                  <img
                    src={slideImage.src}
                    className="rounded-lg"
                    alt={`Slide ${index}`}
                  />
                  <div className="w-10 absolute top-3 right-3">
                    {isFavorite ? (
                      <HeartIconSolid
                        fill="#dc2626"
                        onClick={() => {
                          setIsFavorite(!isFavorite);
                        }}
                      />
                    ) : (
                      <HearIconOutlined
                        color="#ffffff"
                        onClick={() => {
                          setIsFavorite(!isFavorite);
                        }}
                      />
                    )}
                  </div>
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
