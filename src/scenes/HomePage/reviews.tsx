import { ReviewType } from "@/shared/types";
import { motion, useAnimation } from "framer-motion";
import CardTemplate from "@/shared/CardTemplate";
import { useState } from "react";
import H2 from "@/shared/H2";

const reviews: Array<ReviewType> = [
  {
    title: "Lorem 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
  {
    title: "Lorem 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John N.",
    country: "United States",
    showStar: true,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleArrowClick = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % reviews.length
        : (currentIndex - 1 + reviews.length) % reviews.length;

    setCurrentIndex(newIndex);

    controls.start({
      x: `-${newIndex * 12.5}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <div className="bg-black pb-20 relative">
      <section className="w-full bg-black block   border-black">
        <div className="block mx-auto ld: bg-black">
          <motion.div>
            <div className="w-full mx-auto flex justify-center border-black bg-black">
              <div className="flex ">
                {" "}
                <H2 color="primary-100">reviews</H2>
              </div>
            </div>
            <div className="h-[480px] w-5/6 mx-auto no-scrollbar  overflow-y-hidden relative">
              <motion.ul
                className="w-[2800px] whitespace-nowrap pl-0"
                animate={controls}
              >
                {reviews.map((item: ReviewType, index) => (
                  <motion.li
                    key={`${item.name}-${index}`}
                    className="inline-block "
                  >
                    <CardTemplate
                      key={`${item.name}-${index}`}
                      name={item.name}
                      description={item.description}
                      title={item.title}
                      country={item.country}
                      showStars={item.showStar}
                    />
                  </motion.li>
                ))}
              </motion.ul>
              <button
                className=" z-30 absolute top-1/2 -translate-y-1/2 left-0 bg-gray-400 text-white rounded-full w-10 h-10 ml-6"
                onClick={() => handleArrowClick("prev")}
              >
                {"<"}
              </button>
              <button
                className=" z-30 absolute top-1/2 -translate-y-1/2 right-0 bg-gray-400 text-white rounded-full w-10 h-10 mr-6"
                onClick={() => handleArrowClick("next")}
              >
                {">"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
