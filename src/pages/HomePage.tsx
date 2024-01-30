import Carousel from "@/scenes/HomePage/carousel";
import Benefits from "@/scenes/HomePage/benefits";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerNewsletter from "@/scenes/HomePage/bannerNewsletter";
import OurClasses from "@/scenes/HomePage/ourClasses";
import Reviews from "../scenes/HomePage/reviews/reviews";
export default function HomePage() {
  return (
    <div className="">
      <Carousel />
      <Benefits />
      <Reviews />
      <OurClasses />
      <BannerNewsletter />
    </div>
  );
}
