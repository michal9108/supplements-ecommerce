import ModalEmail from "@/scenes/modal/ModalEmail";
import Testimonials from "../scenes/ProductPage/Testimonials/Testimonials";
import Features from "@/scenes/ProductPage/Features/Features";
import Reasons from "../scenes/ProductPage/Reasons/Reasons";
import Faq from "@/scenes/ProductPage/FAQ/Faq";
import Product from "@/scenes/ProductPage/ProductCard/Product";
import InfoMessage from "@/scenes/ProductPage/InfoMessage";
import Guarantee from "@/scenes/ProductPage/Guarantee";
import OurClasses from "@/scenes/HomePage/ourClasses";

export default function ProductPage() {
  return (
    <>
      <div className="bg-primary-100">
        <div className="w-full static ">{/* <ModalEmail /> */}</div>
        <Product />

        <Testimonials />

        <InfoMessage />

        <Features />

        <Guarantee />

        <Reasons />
        <OurClasses />
        <Faq />
      </div>
    </>
  );
}
