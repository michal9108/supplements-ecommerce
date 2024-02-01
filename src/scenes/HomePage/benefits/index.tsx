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
import useMediaQuery from "@/hooks/useMediaQuery";
import MiniProductCard from "../MiniProductCard";

const proofs: Array<ProofType> = [
  {
    icon: (
      <HomeModernIcon className="max-md:h-full max-md:w-full h-20 w-20  " />
    ),
    title: "30 day easy return",
  },
  {
    icon: <HomeModernIcon className="max-md:h-full max-md:w-full h-20 w-20" />,
    title: "100% satisfaction guaranteed",
  },
  {
    icon: <HomeModernIcon className="max-md:h-full max-md:w-full h-20 w-20" />,
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
  return (
    <>
      <div className=" bg-gray-20">
        <section id="benefits" className="mx-auto min-h-full w-full py-1">
          {/* BENEFITS */}

          {/* <div className=" items-center justify-center gap-8 md:flex">
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
          />
        ))}
      </div> */}

          {/* HEADER */}
          <div className=" flex justify-center ">
            {" "}
            <div className="text-4xl   font-bold ">SHOP BY GOAL</div>
          </div>

          <div className="flex sm:flex-col items-center justify-center md:my-2 md:w-full">
            <div className=" items-center justify-center  flex  flex-wrap border-box ">
              <div className="flex basis-1/6">
                <MiniProductCard />
              </div>
              <div className="flex basis-1/6">
                <MiniProductCard />
              </div>
              <div className="flex basis-1/6">
                <MiniProductCard />
              </div>
              <div className="flex basis-1/6">
                <MiniProductCard />
              </div>
              <div className="flex basis-1/6">
                <MiniProductCard />
              </div>
              <div className="flex basis-1/6">
                <MiniProductCard/>
              </div>
            </div>
          </div>
        </section>
        {/* PROOFS */}
        <section className="mx-auto min-h-full w-full py-1">
          <div className=" items-center justify-center  md:flex w-full">
            {proofs.map((proof: ProofType) => (
              <Benefit
                key={proof.title}
                icon={proof.icon}
                title={proof.title}
              />
            ))}
          </div>
        </section>
      </div>
      {/* CALL TO ACTION - GRAPHICS AND DESCRIPTION*/}
      <section className="mx-auto min-h-full w-5/6 py-1">
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}

          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            <div>
              <div className="relative">
                <HText>
                  BECOME FINALLY <span className="text-primary-300">BUFF</span>
                </HText>
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
              <ActionButton>BUY NOW</ActionButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
