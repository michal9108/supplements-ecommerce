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
import ProductCard from "../productcard";

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
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-1">
      <div className="">
       

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
          <div className=" items-center justify-center  md:flex">

<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

          
        </div>
        {/* PROOFS */}
        <div className=" items-center justify-center  md:flex">
          {proofs.map((proof: ProofType) => (
            <Benefit
              key={proof.title}
              icon={proof.icon}
              title={proof.title}
            />
          ))}
        </div>
        </div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-5 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="static">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    The Perfect Snack for Your{" "}
                    <span className="text-primary-300">Active</span> Lifestyle{" "}
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPT */}
            <div>
              <p className="my-5 text-lg">
                Whether you're hitting the gym, powering through your day, or
                simply busy and on-the-go - our Kino Crispy Bars are finely
                tuned to complement your active routine. Blended with
                high-quality Protein and High Fibre, they deliver convenient
                nourishment for workouts and busy schedules where a snack
                on-the-go just makes the most sense.
              </p>
            </div>

            {/* BUTTON */}
            <div className="static mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Benefits;

