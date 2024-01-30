import React from "react";
import image1 from "@/assets/image1.png";
import Feature from "./Feature";

const features = () => {
  return (
    <div>
      <section>
        {/* Features Container */}
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-24 lg:py-32 flex">
          {/* Features Title  & Grid */}
          <div className="flex flex-col">
            <h4 className="mx-auto mb-8 mt-4 max-w-lg text-[#647084] md:mb-12 lg:mb-16 text-center">
              BodyPack allows you too :
            </h4>
         
        
          <div className="grid gap-1 sm:grid-cols-4  md:grid-rows-1 md:grid-cols-4">
  
            <Feature
              img="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bda43ea08a612343b1f3_Vector-3.svg"
              name="Support"
              text="    dfolor sit amet consectetur adipiscing elit ut
      aliquam, purus sit."
            />
            <Feature
              img="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdb1bd05f5915d7bf31c_Vector-4.svg"
              name="Organise"
              text="   Lorem ipsum dolor sit amet consectetur adipiscing elit ut
      aliquam, purus sit."
            />
            <Feature
              img="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
              name="Flexibility"
              text="    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
      aliquam, purus sit."
            />
            <Feature
              img="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358bdaaeeb5cbd611bf5048_Vector-5.svg"
              name="Endurance"
              text="    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
      aliquam, purus sit."
            />
          </div>
          </div>



          <div 
          
          className="flex justify-center align-items-center"
          >
            
            <img 
            // FIX IMG SIZE - RESPONSIVE W H 
            src={image1} className=" w-4/6 h-4/6  xs:w-4/6  xs:h-4/6  sm:w-3/6 sm:h-3/6  "></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default features;
