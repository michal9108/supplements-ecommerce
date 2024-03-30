import { SocialImgType } from "@/shared/types";

import image7 from "../../../assets/ig.jpg";
import { motion } from "framer-motion";
import CommunityCard from "./CommunityCard";
import H2 from "@/shared/H2";

const workout: Array<SocialImgType> = [
  {
    name: "Lisa M.",
    opinion:
      "I've been using Buff Pack for a month now, and I can already see the results! It's boosted my energy levels during workouts and I feel less fatigued afterwards. Highly recommend!",
    image: image7,
  },
  {
    name: "Tom B.",
    opinion:
      "Muscle Mass has been a game-changer for my gym sessions. It helps me recover faster and has significantly reduced muscle soreness. Plus, it tastes great!",
    image: image7,
  },
  {
    name: "Peter M.",
    opinion:
      "I've tried several supplements before, but this one stands out. It provides me with the right amount of energy and focus needed for my intense workouts. Definitely worth the purchase!",
    image: image7,
  },
  {
    name: "Jane S.",
    opinion:
      "Since starting Energy Fuel , I've noticed an increase in my strength and endurance. It's also helped me maintain a healthy weight while building muscle. I'm impressed!",
    image: image7,
  },
  {
    name: "Lea B.",
    opinion:
      "I love how this supplement complements my diet and workout routine. It's easy to mix, tastes good, and has all the essential nutrients I need to fuel my body. 10/10 recommend!",
    image: image7,
  },
  {
    name: "Bill P.",
    opinion:
      "As a fitness trainer, I always recommend this supplement to my clients. It's reliable, effective, and supports overall fitness and wellness. Plus, the feedback from users has been overwhelmingly positive!",
    image: image7,
  },
];

export default function Community() {
  return (
    <section className=" w-full lg:w-4/6   lg:m-auto bg-primary-100  ">
      <motion.div>
        {/* HEADER */}
        <motion.div
          className="mx-auto w-5/6 md:w-/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6"
          
        >
          <div className="w-full text-center">
            <H2 color="black-900 mt-10">Join our Inner Circle</H2>

            <h3 className="font-medium my-4">
              Unlock Exclusive Content and Connect with a Community Committed to
              Health and Wellness
            </h3>
            <button className="rounded-lg bg-black-900 px-20 py-3 mb-10 text-primary-100 no-underline font-semibold text-xl">
              BECOME AN AMBASSADOR
            </button>
          </div>
        </motion.div>
        {/* CAROUSEL */}
        <div className=" h-[580px] w-full no-scrollbar overflow-x-auto overflow-y-hidden">
          <ul className="w-[2900px] whitespace-nowrap pl-0">
            {workout.map((item: SocialImgType, index) => (
              <CommunityCard
                key={`${item.name}-${index}`}
                name={item.name}
                opinion={item.opinion}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
