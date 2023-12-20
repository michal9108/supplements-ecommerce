import Carousel from "@/scenes/HomePage/carousel";
import Benefits from "@/scenes/HomePage/benefits";
import ContactUs from "@/scenes/HomePage/contactUs";
import React from "react";
import Banner from "@/scenes/banner";
export default function HomePage({
 
  setSelectedPage = () => {},
}) {
  return (
    <div>
      <Carousel setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}
