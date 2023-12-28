import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, ProofType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import ProductCard from "../productCard";
import useMediaQuery from "@/hooks/useMediaQuery";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-7 w-7" />,
    title: "Maintain Optimal Protein Intake",
  },
  {
    icon: <UserGroupIcon className="h-7 w-7" />,
    title: "Strenghten and Sustain Muscles",
  },
  {
    icon: <AcademicCapIcon className="h-7 w-7" />,
    title: "Improves Gut Health & Digestion",
  },
];

const proofs: Array<ProofType> = [
  {
    icon: <HomeModernIcon className="h-7 w-7" />,
    title: "30 day easy return",
  },
  {
    icon: <UserGroupIcon className="h-7 w-7" />,
    title: "100% satisfaction guaranteed",
  },
  {
    icon: <AcademicCapIcon className="h-7 w-7" />,
    title: "Fast and secure shipping",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {};



const Benefits = () => {
  // const isLessthanMediumScreens = useMediaQuery("max-width: 1060px)");

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-1">
     
        {/* BENEFITS */}

        
        <div className=" items-center justify-center gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
            />
          ))}
        </div>

        {/* HEADER */}
        <div className="flex flex-col container items-center justify-center md:my-2 md:w-3/5">
          <HText>SHOP BY GOAL</HText>
          <div className=" items-center justify-center  flex  flex-wrap border-box ">
            <div className="flex basis-1/4">
              <ProductCard />
            </div>
            <div className="flex basis-1/4">
              <ProductCard />
            </div>
            <div className="flex basis-1/4">
              <ProductCard />
            </div>
            <div className="flex basis-1/4">
              <ProductCard />
            </div>
           
            
          
          
          </div>
        </div>
        {/* PROOFS */}
        <div className=" items-center justify-center  md:flex ">
          {proofs.map((proof: ProofType) => (
            <Benefit key={proof.title} icon={proof.icon} title={proof.title} />
          ))}
        </div>
      
      {/* CALL TO ACTION*/}
      <div className="my-3 block  max-w-6xl ">
        <div className="block">
          <div className="flex flex-wrap justify-center items-center">
            <div className="flex basis-2/4 ">
              <img
                className="mx-3 my-3"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
              />
            </div>

            <div className="flex flex-col basis-2/4">
              <div>
                <div>
                  <div>
                    <HText>
                      BECOME FINALLY{" "}
                      <span className="text-primary-300">BUFF</span>
                    </HText>
                  </div>
                </div>
              </div>

              <div>
                <p className="my-3 text-lg">
                  Boosting your testosterone levels naturally can be a powerful
                  advantage, enhancing ambition, increasing libido, reducing
                  fat, promoting muscle growth, and overall improving your
                  quality of life.
                  <br />
                  <br />
                  Regrettably, testosterone levels have seen a consistent
                  decline over the past three decades. Simply put, your father
                  and grandfathers likely had higher testosterone levels
                  compared to you. This decline can be attributed to various
                  factors, including elevated chronic stress, higher body fat
                  levels, and a significant rise in environmental estrogens.
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
              <div className=" mt-8">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton>BUY NOW</ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
