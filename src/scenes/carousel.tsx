import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

import slide1 from "@/assets/image4.png";
import slide2 from "@/assets/image5.png";
import slide3 from "@/assets/image6.png";
import { Carousel as Slider } from "@material-tailwind/react";

import React, { useState, useEffect } from "react";

import m from "@/logos/m.svg";
import barstoolstore from "@/logos/barstoolstore.svg";
import budweiser from "@/logos/budweiser.svg";
import buzzfeed from "@/logos/buzzfeed.svg";
import forbes from "@/logos/forbes.svg";
import macys from "@/logos/macys.svg";
import menshealth from "@/logos/menshealth.svg";
import mrbeast from "@/logos/mrbeast.svg";


const images = [slide1,slide2, slide3];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Carousel = ({ setSelectedPage }: Props) => {
  const [clonedNode, setClonedNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const originalNode = document.querySelector(".logos-slide");
    if (originalNode) {
      const copy = originalNode.cloneNode(true) as HTMLElement;
      setClonedNode(copy);
    }
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    if (clonedNode) {
      const logosContainer = document.querySelector(".logos");
      if (logosContainer) {
        logosContainer.appendChild(clonedNode);
      }
    }
  }, [clonedNode]);

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="carousel"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 md:h-5/6  ">
      <Slider className="rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Slider>
          
 
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <>
          <div className="logos">
            <div className="logos-slide">
              <img src={m} />
              <img src={barstoolstore} />
              <img src={budweiser} />
              <img src={buzzfeed} />
              <img src={forbes} />
              <img src={macys} />
              <img src={menshealth} />
              <img src={mrbeast} />
            </div>

            <div className="logos-slide">
              <img src={m} />
              <img src={barstoolstore} />
              <img src={budweiser} />
              <img src={buzzfeed} />
              <img src={forbes} />
              <img src={macys} />
              <img src={menshealth} />
              <img src={mrbeast} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Carousel;
