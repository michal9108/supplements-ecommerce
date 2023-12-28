import cardsIcons from "../assets/cardsIcons.png"
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto py-3 w-5/6 gap-16 md:flex">
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
        <div className=" flex w-5/6 justify-center mx-auto text-center uppercase font-bold text-xs">
        <div>
          <p>
            †these statements have not been evaluated by the food and drug
            administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
        </div>
        <div className=" flex w-5/6  justify-between items-center mx-auto font-thin text-xs ">
        <div >
          <p className="my-3">© BODYBUFF All Rights Reserved.</p>
        </div>
        <div>
          <img src={cardsIcons} alt="Payment methods" className="h-12" />
        </div>
        </div>
    
    </footer>
  );
};

export default Footer;
