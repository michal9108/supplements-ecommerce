import { WorkoutType } from "@/shared/types";
import image1 from "@/assets/workouts1.png";
import image2 from "@/assets/workouts2.png";
import image3 from "@/assets/workouts3.png";
import image4 from "@/assets/workouts4.png";
import image5 from "@/assets/workouts5.png";
import image6 from "@/assets/workouts6.png";
import { motion } from "framer-motion";
import Workout from "./Workout"

const workout: Array<WorkoutType> = [
  {
    name: "Weight Training workout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga workout",
    image: image2,
  },
  {
    name: "Ab Core workout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure workout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness workout",
    image: image5,
  },
  {
    name: "Training workout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];


const OurWorkouts = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-10">
      <motion.div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="w-full">
            <h2 className="font-bold text-3xl text-center">OUR WORKOUTS</h2>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full no-scrollbar  overflow-y-hidden">
          <ul className="w-[2800px] primary-100space-nowrap">
            {workout.map((item: WorkoutType, index) => (
              <Workout
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurWorkouts;