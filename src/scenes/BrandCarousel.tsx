
import { useState, useEffect } from "react";

import threem from "../assets/logos/threem.svg";


export default function BrandCarousel(){

  const [clonedNode, setClonedNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const originalNode = document.querySelector(".logos-slide");
    if (originalNode) {
      const copy = originalNode.cloneNode(true) as HTMLElement;
      setClonedNode(copy);
    }
  }, []); 

  useEffect(() => {
    if (clonedNode) {
      const logosContainer = document.querySelector(".logos");
      if (logosContainer) {
        logosContainer.appendChild(clonedNode);
      }
    }
  }, [clonedNode]);

//   const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section className=" gap-10 sm:h-full sm:pb-0  ">
      <div className="w-full m-auto pt-1">
        {/* {isAboveMediumScreens && ( */}
          <>
            <div
              className="logos  before:left-0 overflow-hidden py-14 px-0 whitespace-nowrap bg-white relative before:top-0 before:absolute before:w-42 before:h-full before:z:10 after:top-0 after:absolute after:w-42 after:h-full after:z:10 
"
            >
              <div className="logos-slide inline-block  animate-slide animation-duration-5000 animation-iteration-count-infinite animation-timing-linear  ">
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
                <img src={threem} />
              </div>
            </div>
          </>
        {/* )} */}
      </div>
    </section>
  );
};

