import { BenefitsType, ProductType, ProofType } from "@/shared/types";
import Benefit from "./Benefit";
import ResponsiveCard from "../ResponsiveCard";
import homebecomebuffimg from "../../../assets/becomebuff.png";
import homecardimg1 from "../../../assets/homecardimg1.png";
import homecardimg2 from "../../../assets/homecardimg2.png";
import homecardimg3 from "../../../assets/homecardimg3.png";
import homecardimg4 from "../../../assets/homecardimg4.png";
import homecardimg5 from "../../../assets/homecardimg5.png";
import homecardimg6 from "../../../assets/homecardimg6.png";
import storeItems from "../../../data/items.json";

const proofs: Array<ProofType> = [
  {
    icon: (
      <svg
        className="w-24 h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path d="M40.43 16.89A3 3 0 0 0 37.65 15H35v-4a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v23a3 3 0 0 0 3 3h1.1a5 5 0 0 0 9.8 0h12.2a5 5 0 0 0 9.8 0H41a3 3 0 0 0 3-3v-8a.94.94 0 0 0-.07-.37zM16 10h6v6l-2.4-1.8a1 1 0 0 0-1.2 0L16 16zM8.8 33.31a3.46 3.46 0 0 0-.27.5c0 .1-.11.2-.16.31a5.16 5.16 0 0 0-.24.79V35H7a1 1 0 0 1-1-1v-1h3c0 .1-.13.2-.2.31zM13 39a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm18-6a1 1 0 0 0-.09.13 4.88 4.88 0 0 0-.42.74l-.06.11a5.19 5.19 0 0 0-.28.87v.1H17.9v-.09a5.16 5.16 0 0 0-.24-.79c-.05-.11-.11-.21-.16-.31a3.46 3.46 0 0 0-.27-.5c-.07-.11-.15-.21-.22-.31H31zM6 31V11a1 1 0 0 1 1-1h7v8a1 1 0 0 0 1.6.8l3.4-2.55 3.4 2.55a1 1 0 0 0 1.05.09A1 1 0 0 0 24 18v-8h8a1 1 0 0 1 1 1v20zm29 8a3 3 0 0 1-3-3 3 3 0 0 1 .88-2.11 2.64 2.64 0 0 1 .62-.48l.3-.15a2.6 2.6 0 0 1 .44-.16A2.87 2.87 0 0 1 35 33a3 3 0 0 1 0 6zm7-5a1 1 0 0 1-1 1h-1.1a6.41 6.41 0 0 0-.23-.78 5 5 0 0 0-3.76-3.08A4.94 4.94 0 0 0 35 31V17h2.65a1 1 0 0 1 .92.63L42 26.19z" />
        <path d="M12 21H9a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 0-2h-1v-1h2a1 1 0 0 0 0-2zM19 23.5a2.5 2.5 0 0 0-2.5-2.5H15a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-1.2l1.17 1.75A1 1 0 0 0 18 29a.94.94 0 0 0 .55-.17 1 1 0 0 0 .28-1.38l-1.16-1.75A2.48 2.48 0 0 0 19 23.5zm-2.5.5H16v-1h.5a.5.5 0 0 1 0 1zM24 23a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2v-1h1a1 1 0 0 0 0-2h-1v-1zM30 23a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2v-1h1a1 1 0 0 0 0-2h-1v-1zM30 12h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zM30 16h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z" />
      </svg>
    ),
    title: "FAST & SECURE SHIPPING",
  },
  {
    icon: (
      <svg
        className=" "
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        height="100px"
        width="100px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512.015 512.015"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path d="M341.333,307.208c84.693,0,153.6-68.907,153.6-153.6s-68.907-153.6-153.6-153.6s-153.6,68.907-153.6,153.6     S256.64,307.208,341.333,307.208z M341.333,17.074c75.281,0,136.533,61.252,136.533,136.533s-61.252,136.533-136.533,136.533     c-75.281,0-136.533-61.252-136.533-136.533S266.052,17.074,341.333,17.074z" />
              <path d="M341.333,196.274c-9.412,0-17.067-7.654-17.067-17.067c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533     c0,15.855,10.914,29.107,25.6,32.922v1.212c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533v-1.212     c14.686-3.814,25.6-17.067,25.6-32.922c0-18.825-15.309-34.133-34.133-34.133c-9.412,0-17.067-7.654-17.067-17.067     c0-9.412,7.654-17.067,17.067-17.067c9.412,0,17.067,7.654,17.067,17.067c0,4.71,3.814,8.533,8.533,8.533     s8.533-3.823,8.533-8.533c0-15.855-10.914-29.107-25.6-32.922v-1.212c0-4.71-3.814-8.533-8.533-8.533     c-4.719,0-8.533,3.823-8.533,8.533v1.212c-14.686,3.814-25.6,17.067-25.6,32.922c0,18.825,15.309,34.133,34.133,34.133     c9.412,0,17.067,7.654,17.067,17.067S350.746,196.274,341.333,196.274z" />
              <path d="M341.333,273.074c65.877,0,119.467-53.589,119.467-119.467S407.211,34.141,341.333,34.141S221.867,87.73,221.867,153.608     S275.456,273.074,341.333,273.074z M341.333,51.208c56.465,0,102.4,45.935,102.4,102.4c0,56.465-45.935,102.4-102.4,102.4     c-56.465,0-102.4-45.935-102.4-102.4C238.933,97.143,284.868,51.208,341.333,51.208z" />
              <path d="M42.667,456.541c0-7.057-5.743-12.8-12.8-12.8c-7.057,0-12.8,5.743-12.8,12.8c0,7.057,5.743,12.8,12.8,12.8     C36.924,469.341,42.667,463.598,42.667,456.541z" />
              <path d="M507.426,358.408c-9.412-16.307-30.362-21.888-46.097-12.774l-98.21,47.804c-15.266,7.637-30.677,7.637-64.452,7.637     c-33.015,0-83.422-8.337-83.934-8.414c-4.642-0.777-9.045,2.364-9.813,7.006c-0.777,4.651,2.364,9.054,7.014,9.822     c2.116,0.358,52.292,8.653,86.733,8.653c35.43,0,53.214,0,71.996-9.395l98.671-48.051c3.942-2.278,8.533-2.884,12.954-1.707     c4.395,1.186,8.081,4.011,10.351,7.953c2.287,3.951,2.893,8.55,1.715,12.954s-4.002,8.081-8.192,10.505l-115.379,71.808     c-0.239,0.162-24.858,15.667-80.648,15.667c-48.375,0-123.11-41.182-124.186-41.771c-0.777-0.375-19.277-9.429-55.014-9.429     c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c31.036,0,47.027,7.467,47.061,7.467v-0.009     c3.226,1.792,79.343,43.742,132.139,43.742c61.611,0,88.934-17.749,89.839-18.355l114.961-71.552     c7.893-4.557,13.542-11.921,15.898-20.719C513.203,375.5,511.983,366.301,507.426,358.408z" />
              <path d="M110.933,324.274H179.2c9.958,0,26.88,12.698,41.813,23.893c18.722,14.046,36.412,27.307,52.053,27.307h51.2     c12.962,0,19.396,5.879,19.567,6.033c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5     c3.336-3.337,3.336-8.73,0-12.066c-1.126-1.126-11.605-11.034-31.633-11.034h-51.2c-9.958,0-26.88-12.698-41.813-23.893     c-18.722-14.046-36.412-27.307-52.053-27.307h-68.267c-4.719,0-8.533,3.823-8.533,8.533S106.214,324.274,110.933,324.274z" />
              <path d="M59.733,273.074h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2c4.71,0,8.533,3.831,8.533,8.533     v187.733c0,4.702-3.823,8.533-8.533,8.533h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2     c14.114,0,25.6-11.486,25.6-25.6V298.674C85.333,284.56,73.847,273.074,59.733,273.074z" />
            </g>
          </g>
        </g>
      </svg>
    ),
    title: "30-DAY EASY RETURNS",
  },
  {
    icon: (
      <svg
        className="w-24 h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path d="M10 34h3a1 1 0 0 0 1-1V22a1 1 0 0 0-1-1h-1v-1a12 12 0 0 1 24 0v1h-1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.91A6 6 0 0 1 30 39h-2a2.5 2.5 0 0 0-2.45-2h-3a2.5 2.5 0 0 0 0 5h3a2.51 2.51 0 0 0 2-1H30a8 8 0 0 0 7.93-7H38a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4v-1a14 14 0 0 0-28 0v1a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4zm15.5 6h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zM40 25v5a2 2 0 0 1-2 2h-2v-9h2a2 2 0 0 1 2 2zM8 25a2 2 0 0 1 2-2h2v9h-2a2 2 0 0 1-2-2z" />
        <path d="M24 35a5.94 5.94 0 0 0 4.81-2.41 1 1 0 1 0-1.62-1.18 4 4 0 0 1-6.38 0 1 1 0 1 0-1.62 1.18A5.94 5.94 0 0 0 24 35z" />
      </svg>
    ),
    title: "CONTINUAL SUPPORT",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = () => {
  return (
    <>
      <div className=" bg-gray-20">
        <section id="benefits" className="mx-auto min-h-full w-full py-1">
          {/* SHOP  */}
          <div className=" flex justify-center ">
            {" "}
            <h1 className="text-4xl  font-bold pb-4 pt-14 ">SHOP BY GOAL</h1>
          </div>

          <div className="flex sm:flex-col items-center justify-center md:my-2 md:w-full">
           
            <div className=" items-center justify-center  flex  flex-wrap border-box"> {storeItems.map((item: ProductType) => {
              return (
                <div key={item.id} className="flex basis-1/6 ">
                  <ResponsiveCard
                    {...item}
                  />
                </div>
              );
            })}</div>
          </div>
        </section>
        {/* PROOFS */}
        <section className="mx-auto min-h-full w-5/6 py-1">
          <div className=" items-center justify-center  sm:flex w-full">
            {proofs.map((proof: ProofType) => {
              return (
                <Benefit
                  key={proof.title}
                  icon={proof.icon}
                  title={proof.title}
                />
              );
            })}
          </div>
        </section>
      </div>
      {/* GRAPHICS AND DESCRIPTION*/}
      <section className="mx-auto min-h-full w-5/6 py-1">
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* GRAPHIC */}

          <img
            className="mx-auto pb-10"
            alt="benefits-page-graphic"
            src={homebecomebuffimg}
          />
          {/* DESCRIPTION */}
          <div>
            <div>
              <div className="relative">
                <h2 className="text-bold font-4xl ">
                  BECOME FINALLY <span className="text-primary-300">BUFF</span>
                </h2>
              </div>
            </div>
            <div>
              <p className="my-3 text-lg">
                Boosting your testosterone levels naturally can be a powerful
                advantage, enhancing ambition, increasing libido, reducing fat,
                promoting muscle growth, and overall improving your quality of
                life.
                <br />
                <br />
                Regrettably, testosterone levels have seen a consistent decline
                over the past three decades. Simply put, your father and
                grandfathers likely had higher testosterone levels compared to
                you. This decline can be attributed to various factors,
                including elevated chronic stress, higher body fat levels, and a
                significant rise in environmental estrogens.
                <br />
                <br />
                Compounds like phthalates, with estrogenic properties, disrupt
                endocrine function and have infiltrated food and scented
                products on a large scale. This implies that even if you adopt
                all the right measures—such as prioritizing sleep, maintaining
                proper nutrition, ensuring adequate vitamin D levels, and
                engaging in regular exercise—you may still find it challenging
                to elevate your testosterone levels to optimal levels.
              </p>
            </div>

            {/* BUTTON */}
            <div className=" relative mt-8 mb-8 flex  justify-center items-center">
              <button className=" rounded-lg bg-secondary-500  px-20 py-3   text-primary-100 no-underline font-semibold text-xl">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
