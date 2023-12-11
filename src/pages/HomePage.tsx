import Carousel from "@/scenes/carousel";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import OurClasses from "@/scenes/ourClasses";
import React from "react";
import Faq from "@/scenes/faq";

export default function HomePage({
 
  setSelectedPage = () => {},
}) {
  return (
    <div>
      <Carousel setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses />
      <Faq />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}
