import ModalEmail from "@/scenes/modal/ModalEmail";
import Testimonials from "@/scenes/ProductPage/Testimonials/Testimonials";
import FeaturesContainer from "@/scenes/ProductPage/Features/FeaturesContainer";
import Reasons from "@/scenes/ProductPage/Reasons/Reasons";
import Faq from "@/scenes/ProductPage/FAQ/Faq";
import Product from "@/scenes/ProductPage/ProductCard/Product";
import InfoMessage from "@/scenes/ProductPage/InfoMessage";
import Guarantee from "@/scenes/ProductPage/Guarantee";
import OurResults from "@/scenes/HomePage/ourResults/OurResults";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import ProductProofs from "@/scenes/ProductPage/ProductCard/ProductProofs";

export default function ProductPage() {
  const { selectedProduct } = useProductCart();
  return (
    <>
      <div className="bg-primary-100">
        <div className="w-full static ">
          <ModalEmail />
        </div>
        <ProductProofs />
        {selectedProduct && <Product {...selectedProduct} />}
        <Testimonials />
        <InfoMessage />
        <FeaturesContainer />
        <Guarantee />
        <Reasons />
        <OurResults />
        <Faq />
      </div>
    </>
  );
}
