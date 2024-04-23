import useMediaQuery from "@/hooks/useMediaQuery";

import { useState, useEffect } from "react";

import threem from "../../assets/logos/threem.svg";
import barstoolstore from "../../assets/logos/barstoolstore.svg";
import buzzfeed from "../../assets/logos/buzzfeed.svg";
import forbes from "../../assets/logos/forbes.svg";
import macys from "../../assets/logos/macys.svg";
import menshealth from "../../assets/logos/menshealth.svg";
import mrbeast from "../../assets/logos/mrbeast.svg";
import budweiser from "../../assets/logos/budweiser.svg";

export default function Carousel(){
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

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section className=" gap-10 md:h-full md:pb-0  ">
      <div className="w-full m-auto pt-1">
        {isAboveMediumScreens && (
          <>
            <div
              className="logos  before:left-0 overflow-hidden py-14 px-0 whitespace-nowrap bg-white relative before:top-0 before:absolute before:w-42 before:h-full before:z:10 after:top-0 after:absolute after:w-42 after:h-full after:z:10 
"
            >
              <div className="logos-slide inline-block  animate-slide animation-duration-5000 animation-iteration-count-infinite animation-timing-linear  ">
                <img src={threem} />
                <img src={barstoolstore} />
                <img src={budweiser} />
                <img src={buzzfeed} />
                <img src={forbes} />
                <img src={macys} />
                <img src={menshealth} />
                <img src={mrbeast} />

                <img src={threem} />
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
      </div>
    </section>
  );
}


