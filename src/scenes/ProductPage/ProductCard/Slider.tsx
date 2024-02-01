import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "../../../assets/buffpack.jpeg"
import slide2 from "../../../assets/buffpack2.jpeg"
import slide3 from "../../../assets/buffcognition.jpg"




const slideImages =  [{ src: slide1 }, { src: slide2 }, { src: slide3 }];


const ProductSlider = () => {
  const isAboveMd = window.innerWidth >= 1060;

  const divStyle = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundSize: "cover",
    width: "100%",
    height:"100%",
  };
  

  return (
    <section className="   w-5/12">
      <div
     
      >
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{...divStyle}}>
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
