import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slide1 from "@/assets/image7.png";
import slide2 from "@/assets/image8.png";
import slide3 from "@/assets/image9.png";
import slide4 from "@/assets/image10.png";
import slide5 from "@/assets/image11.png";
import slide6 from "@/assets/image12.png";

const Slider = () => {
  const isAboveMd = window.innerWidth >= 1060;

  const slideImages = isAboveMd
    ? [{ src: slide1 }, { src: slide2 }, { src: slide3 }]
    : [{ src: slide4 }, { src: slide5 }, { src: slide6 }];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "100%",
    
  };

  return (
    <section className=" gap-10  md:h-full md:pb-0">
      <div
      // className='pt-24 md:h-full md:pb-0'
      >
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle }}>
                <img src={slideImage.src} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default Slider;
