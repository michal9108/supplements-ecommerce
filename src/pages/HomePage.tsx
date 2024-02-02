import Carousel from "@/scenes/HomePage/carousel";
import Benefits from "@/scenes/HomePage/benefits";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerNewsletter from "@/scenes/HomePage/bannerNewsletter";
import Reviews from "../scenes/HomePage/reviews";
import Slider from "@/scenes/HomePage/slider";
import Transformations from "@/scenes/HomePage/Transformations";
export default function HomePage() {
  return (
    <div className="">
       <Slider />
      <Carousel />
      <Benefits />
      <Reviews />
      <Transformations/>
      <BannerNewsletter />
    </div>
  );
}
