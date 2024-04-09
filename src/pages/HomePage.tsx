import InfoSales from "@/scenes/HomePage/InfoSales";
import "bootstrap/dist/css/bootstrap.min.css";
import Newsletter from "@/scenes/HomePage/Newsletter";
import Reviews from "@/scenes/HomePage/Reviews";
import HomeCarousel from "../scenes/HomePage/HomeCarousel";
import Transformations from "@/scenes/HomePage/Transformations";
import Shop from "@/scenes/HomePage/Shop";
import Faq from "@/scenes/HomePage/FAQ/Faq";
import BrandCarousel from "@/scenes/BrandCarousel";
import Incentives from "@/scenes/ProductPage/ProductCard/Incentives";
import Trending from "@/scenes/HomePage/Trending";
import Blog from "./Blog";
import DiscountBanner from "@/scenes/HomePage/DiscountBanner";
import { useProductCart } from "@/scenes/cart/ProductCartContext";

export default function HomePage() {
  const { storeItems } = useProductCart();
  return (
    <div className="">
      <HomeCarousel />
      <Incentives />
      <BrandCarousel />
      <Shop />
      <InfoSales />
      <Trending products={storeItems} />
      <Reviews />
      <DiscountBanner />
      <Transformations />
      <Faq />
      <Blog />
      <Newsletter />
    </div>
  );
}
