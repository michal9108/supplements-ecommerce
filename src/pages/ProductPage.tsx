import ModalEmail from "@/scenes/modal/ModalEmail";
import Testimonials from "@/scenes/ProductPage/Testimonials/TestimonialsContainer";
import BenefitsContainer from "@/scenes/ProductPage/Benefits/BenefitsContainer";
import Features from "@/scenes/ProductPage/Features/Features";
import Faq from "@/scenes/HomePage/FAQ/Faq";
import Product from "@/scenes/ProductPage/ProductCard/Product";
import InfoMessage from "@/scenes/ProductPage/InfoMessage";
import Guarantee from "@/scenes/ProductPage/Guarantee";
import Community from "@/scenes/HomePage/community/Community";
import { useProductCart } from "@/scenes/cart/ProductCartContext";

import ProductReviews from "@/scenes/ProductPage/ProductReviews";

import ProductFaq from "@/scenes/ProductPage/ProductFaq";
import Newsletter from "@/scenes/HomePage/Newsletter";
import BrandCarousel from "@/scenes/BrandCarousel";
import Incentives from "@/scenes/ProductPage/ProductCard/Incentives";

export default function ProductPage() {
  const { selectedProduct } = useProductCart();
  return (
    <>
      <div className="bg-primary-100">
        <div className="w-full static ">
          <ModalEmail />
        </div>
       
        {selectedProduct && <Product {...selectedProduct} />}
        <Incentives />
        <Testimonials />
        {selectedProduct && <InfoMessage  {...selectedProduct}/>}
        {/* {selectedProduct &&   <BenefitsContainer {...selectedProduct} />}

        {selectedProduct &&   <Features  {...selectedProduct} />} */}

        <ProductFaq />
        <ProductReviews />
        <Newsletter />
        <Community />
        <Guarantee />
        <BrandCarousel/>
      </div>
    </>
  );
}
