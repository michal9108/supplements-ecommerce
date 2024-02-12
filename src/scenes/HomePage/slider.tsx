import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slider1 from "@/assets/homeSlider1.png";
import slider2 from "@/assets/homeSlider2.png";
import slider3 from "@/assets/homeSlider3.png";
import slider4 from "@/assets/homeSlider4.png";
import slider5 from "@/assets/homeSlider5.png";
import slider6 from "@/assets/homeSlider6.png";
import slider7 from "@/assets/homeSlider7.png";
const Slider = () => {  const [isAboveMd, setIsAboveMd] = useState(false);

  const updateWindowSize = () => {
    setIsAboveMd(window.innerWidth >= 800);
  };

  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const slideImages = isAboveMd
  ? [{ src: slider1 }, { src: slider2 }, { src: slider3 }, { src: slider4 }]
  : [{ src: slider5 }, { src: slider6 }, { src: slider7 }];


  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <section className="pt-10">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle }}>
              <img src={slideImage.src} />
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default Slider;
