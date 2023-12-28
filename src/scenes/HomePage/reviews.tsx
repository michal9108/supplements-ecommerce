import { ReviewType } from "@/shared/types";

import { motion } from "framer-motion";
import Rewiewscard from "./reviewscard";
import HText from "@/shared/HText";

const reviews: Array<ReviewType> = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    state: "United States",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    state: "United States",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    state: "United States",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    state: "United States",
  },
];

type Props = {};

const Reviews = () => {
  return (
    <div className="bg-black p-14 pb-20">
      <section className="w-full bg-blue-700 block   border-black ">
        <div className="block mx-auto max-w-7xl bg-red-300">
          <motion.div>
            <div className="w-full mx-auto flex justify-center border-black bg-green-500">
              <div className="flex py-3 ">
                {" "}
                <h1 className="text-3xl text-white">REVIEWS</h1>
              </div>
            </div>
            <div className="h-[490px] w-full no-scrollbar  overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
                {reviews.map((item: ReviewType, index) => (
                  <Rewiewscard
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    title={item.title}
                    state={item.state}
                  />
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
