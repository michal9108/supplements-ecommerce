import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

import slide1 from "@/assets/image4.png";
import slide2 from "@/assets/image5.png";
import slide3 from "@/assets/image6.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import React, { useState, useEffect } from "react";

import m from "@/logos/m.svg";
import barstoolstore from "@/logos/barstoolstore.svg";
import budweiser from "@/logos/budweiser.svg";
import buzzfeed from "@/logos/buzzfeed.svg";
import forbes from "@/logos/forbes.svg";
import macys from "@/logos/macys.svg";
import menshealth from "@/logos/menshealth.svg";
import mrbeast from "@/logos/mrbeast.svg";

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
      <div className="mx-auto w-5/6 items-center md:h-5/6 ">
        <Slide>
          <div className="each-slide-effect">
            <img src={slide1}></img>
          </div>

          <div className="each-slide-effect">
            <img src={slide2}></img>
          </div>
          <div className="each-slide-effect">
            <img src={slide3}></img>
          </div>
        </Slide>
        {/* MAIN HEADER */}
        {/* <div className="z-10 mt-32 md:basis-3/5"> */}
        {/* HEADINGS */}
        {/* <div
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div> */}

        {/* ACTIONS */}
        {/* <div
            className="mt-8 flex items-center gap-8"

          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div> */}

        {/* IMAGE */}
        {/* <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div> */}
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
