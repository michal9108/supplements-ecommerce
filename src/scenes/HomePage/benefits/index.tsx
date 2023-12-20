import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Maintain Optimal Protein Intake",
    description:
      "Elevate nutritional value with Bodybuff crispy bars, enriched with whey protein isolate crisps. These selected protein sources supply vital amino acids for body fuel and muscle support",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Strenghten and Sustain Muscles",
    description:
      "Enhance ans preserve muscle health for an active lifestyle and productive workouts. Indulge your sweet cravings while enjoying a substantial 15g of protein in every bar.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Improves Gut Health & Digestion",
    description:
      "Increase your digestion and nutrient absorbtion with the abundant dietary fiber in all of our bars. Improving gut health and well-being, these bars optimize your metabolism and overall vitality.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-1">
      <div>
        {/* HEADER */}
        <div className="flex flex-col container items-center justify-center md:my-1 md:w-3/5">
        
            <p className=" text-lg">The perfect snack to</p>

            <HText>Energize Your Body And Fuel Your Active Lifestyle</HText>
            
        
        </div>

        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
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
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    The Perfect Snack for Your <span className="text-primary-300">Active</span> Lifestyle{" "}
               
                  </HText>
                </div>
              </div>
            </div>

            {/* DESCRIPT */}
            <div>
              <p className="my-5 text-lg">
              Whether you're hitting the gym, powering through your day, or simply busy and on-the-go - our Kino Crispy Bars are finely tuned to complement your active routine. Blended with high-quality Protein and High Fibre, they deliver convenient nourishment for workouts and busy schedules where a snack on-the-go just makes the most sense. 
              </p>
              
            </div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
