import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slider1 from "@/assets/homeSlider8.png";
import slider2 from "@/assets/homeSlider2.png";
import slider3 from "@/assets/homeSlider3.png";
import slider4 from "@/assets/homeSlider4.png";
import slider5 from "@/assets/homeSlider5.png";
import slider6 from "@/assets/homeSlider6.png";
import slider7 from "@/assets/homeSlider7.png";
import slider8 from "@/assets/homeSlider8.png";
import slider9 from "@/assets/homeSlider9.png";
import slider10 from "@/assets/homeSlider10.png";
import slider11 from "@/assets/homeSlider11.png";
import slider12 from "@/assets/homeSlider12.webp";

export default function HomeCarousel() {
  const [isAboveMd, setIsAboveMd] = useState(false);

  const updateWindowSize = () => {
    setIsAboveMd(window.innerWidth >= 1060);
  };

  useEffect(() => {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);

    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  const slideImages = isAboveMd
    ? [
        { src: slider8 },
        { src: slider9 },
        { src: slider10 },
        { src: slider11 },
        { src: slider12 },
      ]
    : [{ src: slider5 }, { src: slider6 }, { src: slider7 }];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    width: "100%",
    // maxHeight: "500px",
  };

  return (
    <section className=" ">
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
}
