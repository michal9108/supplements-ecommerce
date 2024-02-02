import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import buffpack1 from "../../../assets/buffpack1.png"
import buffpack2 from "../../../assets/buffpack2.png"
import buffpack3 from "../../../assets/buffpack3.png"



const slideImages =  [{ src: buffpack1 }, { src: buffpack2 }, { src: buffpack3 }];


const ProductSlider = () => {
  const isAboveMd = window.innerWidth >= 1060;

 
  

  return (
    <section className="   w-11/12 h-11/12 max-md:w-11/12">
      <div
     
      >
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div >
                <img src={slideImage.src} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default ProductSlider;
