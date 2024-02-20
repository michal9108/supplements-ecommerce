import Carousel from "@/scenes/HomePage/carousel";
import InfoSales from "@/scenes/HomePage/InfoSales";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerNewsletter from "@/scenes/HomePage/bannerNewsletter";
import Reviews from "../scenes/HomePage/reviews";
import Slider from "@/scenes/HomePage/slider";
import Transformations from "@/scenes/HomePage/Transformations";
import ListOfProducts from "@/scenes/HomePage/ListOfProducts";

export default function HomePage() {
  return (
    <div className="">
      <Slider />
      <Carousel />
      <ListOfProducts />
      <InfoSales />
      <Reviews />
      <Transformations />
      <BannerNewsletter />
    </div>
  );
}
