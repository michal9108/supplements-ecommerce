import Carousel from "@/scenes/HomePage/Carousel";
import InfoSales from "@/scenes/HomePage/InfoSales";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "@/scenes/HomePage/Newsletter";
import Reviews from "@/scenes/HomePage/Reviews";
import HomeCarousel from "@/scenes/HomePage/HomeCarousel";
import Transformations from "@/scenes/HomePage/Transformations";
import Shop from "@/scenes/HomePage/Shop";
import Faq from "@/scenes/HomePage/FAQ/Faq";

export default function HomePage() {
  return (
    <div className="">
            {/* <EmblaCarousel /> */}

      <HomeCarousel />
      <Carousel />
      <Shop />
      <InfoSales />
      <Reviews />
      <Transformations />
      <Faq />
      <Newsletter />
    </div>
  );
}
