import ModalEmail from "@/scenes/modal/ModalEmail";
import Testimonials from "@/scenes/ProductPage/Testimonials/TestimonialsContainer";
import BenefitsContainer from "@/scenes/ProductPage/Benefits/BenefitsContainer";
import Features from "@/scenes/ProductPage/Features/Features";
import Faq from "@/scenes/HomePage/FAQ/Faq";
import Product from "@/scenes/ProductPage/ProductCard/Product";
import InfoMessage from "@/scenes/ProductPage/InfoMessage";
import Guarantee from "@/scenes/ProductPage/Guarantee";
import OurResults from "@/scenes/HomePage/ourResults/OurResults";
import { useProductCart } from "@/scenes/cart/ProductCartContext";
import ProductProofs from "@/scenes/ProductPage/ProductCard/ProductProofs";
import ProductReviews from "@/scenes/ProductPage/ProductReviews";
import SocialsGallery from "@/scenes/ProductPage/SocialsGallery";
import ProductFaq from "@/scenes/ProductPage/ProductFaq";

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
        <BenefitsContainer />
        {/* <Guarantee /> */}
        <Features />

      
        <ProductFaq />
        <ProductReviews />
        <OurResults />
        <SocialsGallery />
      </div>
    </>
  );
}
