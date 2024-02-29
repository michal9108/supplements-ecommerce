import Carousel from "@/scenes/HomePage/Carousel";
import InfoSales from "@/scenes/HomePage/InfoSales";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "@/scenes/HomePage/Newsletter";
import Reviews from "@/scenes/HomePage/Reviews";
import Slider from '@/scenes/HomePage/Slider';
import Transformations from "@/scenes/HomePage/Transformations";
import Shop from "@/scenes/HomePage/Shop";

export default function HomePage() {
  return (
    <div className="">
      <Slider />
      <Carousel />
      <Shop />
      <InfoSales />
      <Reviews />
      <Transformations />
      <Newsletter />
    </div>
  );
}
