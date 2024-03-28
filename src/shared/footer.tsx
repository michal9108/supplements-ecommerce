import cardsIcons from "@/assets/cardsIcons.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-10">
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
            administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 justify-between items-center mx-auto font-thin text-xs">
        <div className="flex items-center justify-center">
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
