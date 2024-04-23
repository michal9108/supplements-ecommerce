import ModalEmail from "@/scenes/modal/ModalEmail";
import Testimonials from "@/scenes/ProductPage/Testimonials/TestimonialsContainer";

import BenefitsContainer from "@/scenes/ProductPage/Benefits/BenefitsContainer";
import FeaturesContainer from "../scenes/ProductPage/Features/FeaturesContainer"
import Product from "@/scenes/ProductPage/ProductCard/Product";
import InfoMessage from "@/scenes/ProductPage/InfoMessage";
import Guarantee from "@/scenes/ProductPage/Guarantee";
import Community from "@/scenes/HomePage/community/Community";


import Reasons from "@/scenes/ProductPage/Reasons/Reasons";
import Faq from "@/scenes/ProductPage/FAQ/Faq";




import { useProductCart } from "@/scenes/cart/ProductCartContext";

import ProductReviews from "@/scenes/ProductPage/ProductReviews";

import ProductFaq from "@/scenes/ProductPage/ProductFaq";
import Newsletter from "@/scenes/HomePage/Newsletter";
import BrandCarousel from "@/scenes/BrandCarousel";
import Incentives from "@/scenes/ProductPage/ProductCard/Incentives";
import ProductProofs from "@/scenes/ProductPage/ProductCard/ProductProofs";

export default function ProductPage() {
  const { selectedProduct } = useProductCart();
  console.log("PRODUCT", selectedProduct);
  return (
    <>
      <div className="bg-primary-100">
        <div className="w-full static ">
          <ModalEmail />
        </div>


        {selectedProduct && <Product {...selectedProduct} />}
        <Incentives />
        <Testimonials />
        {selectedProduct && <InfoMessage {...selectedProduct} />}
        {selectedProduct && <BenefitsContainer {...selectedProduct} />}

        {selectedProduct && <FeaturesContainer {...selectedProduct} />}

        {selectedProduct && <ProductFaq {...selectedProduct} />}
        {selectedProduct &&   <ProductReviews  {...selectedProduct} />}
      
        <Newsletter />
        <Community />
        <Guarantee />
        <BrandCarousel />

       

      </div>
    </>
  );
}
