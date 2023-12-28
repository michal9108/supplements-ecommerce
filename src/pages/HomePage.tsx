import Carousel from "@/scenes/HomePage/carousel";
import Benefits from "@/scenes/HomePage/benefits";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerNewsletter from "@/scenes/bannerNewsletter";
import OurClasses from "@/scenes/ourClasses";

export default function HomePage() {
  return (
    <div className="">
      <Carousel />
      <Benefits />
      <OurClasses />
      <BannerNewsletter/>
    </div>
  );
}
