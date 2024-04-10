<<<<<<< HEAD
import cardsIcons from "@/assets/cardsIcons.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-10  flex-shrink-0">
      <div className="justify-content mx-auto py-3 lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">COMPANY</h4>
          <Link to="blog" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            BLOG
          </Link>
          <Link to="terms-of-service" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            TERMS OF SERVICE
          </Link>
          <Link to="privacy-policy" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            PRIVACY POLICY
          </Link>
          <Link to="contact" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            CONTACT US
          </Link>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">INFO</h4>
          <Link to="returns-and-faq" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            RETURNS & FAQ
          </Link>
          <Link to="returns-and-faq" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            MONEY BACK GUARANTEE
          </Link>
          <Link to="returns-and-faq" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            INTERNATIONAL SHIPPING
          </Link>
          <Link to="account" className="block no-underline my-3 text-gray-500 hover:text-gray-700">
            MANAGE SUBSCRIPTIONS
          </Link>
        </div>
      </div>
      <div className="flex lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 justify-center mx-auto text-center uppercase font-light text-xs">
        <div>
          <p>
            These statements have not been evaluated by the food and drug
=======
import cardsIcons from '@/assets/cardsIcons.png';

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-10">
      <div className="justify-content mx-auto py-3 w-5/6 lg:w-4/6  gap-16 md:flex">
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">COMPANY</h4>
          <p className="my-3">BLOG</p>
          <p className="my-3">TERMS OF SERVICE</p>
          <p>PRIVACY POLICY</p>
          <p>CONTACT US</p>
          <p>LOYALTY PROGRAM </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">INFO</h4>
          <p className="my-3">RETURNS & FAQ</p>
          <p className="my-3">MONEY BACK GUARANTEE</p>
          <p className="my-3">INTERNATIONAL SHIPPING</p>
          <p className="my-3">MANAGE SUBSCRIPTIONS</p>
        </div>
      </div>
      <div className=" flex w-full justify-center mx-auto text-center uppercase font-bold text-xs">
        <div>
          <p>
            †these statements have not been evaluated by the food and drug
>>>>>>> main
            administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex flex-wrap lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 justify-between items-center mx-auto font-thin text-xs">
        <div className="flex items-center justify-center">
=======
      <div className=" flex flex-wrap w-5/6 lg:w-4/6  justify-between items-center mx-auto font-thin text-xs ">
        <div className=" flex items-center justify-center">
>>>>>>> main
          <p className="my-3 text-center">© BODYBUFF All Rights Reserved.</p>
        </div>
        <div>
          <img src={cardsIcons} alt="Payment methods" className="h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
