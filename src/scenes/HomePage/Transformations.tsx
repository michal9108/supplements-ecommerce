import CardTemplate from "@/shared/CardTemplate";
import beforeafter1 from "@/assets/beforeafter1.png";
import beforeafter2 from "@/assets/beforeafter2.png";
import beforeafter3 from "@/assets/beforeafter3.jpeg";
import H2 from "@/shared/H2";
import { Link } from "react-router-dom";

const transformations = [
  {
    id: 1,
    name: "Abbie - Lawyer",
    showStars: false,
    img: beforeafter1,
    description:
      "Abbie achieved an incredible transformation in just 6 months with the Buff Baddie Program. During this time, she successfully eliminated 17 pounds of pure fat while gaining the ideal amount of muscle. Notably, she accomplished her first pull-up, showcasing her dedication and achievements. Congratulations, Abbie!",
    verifiedBuyer: false,
  },
  {
    id: 2,
    name: "John - Accountant",
    showStars: false,
    img: beforeafter2,
    description:
      "In a span of 8 months, John underwent an impressive transformation by shedding 35 pounds of fat and building substantial muscle mass. His journey involved utilizing the cutting protocol to lean down effortlessly, followed by a seamless transition into our lean bulk protocol, resulting in the addition of dense muscle size.",
    verifiedBuyer: false,
  },
  {
    id: 3,
    name: "Luke - Doctor",
    showStars: false,
    img: beforeafter1,
    description:
      "Luke not only shed more than 20 pounds of fat but also built significant strength and muscle during his impressive transformation. In just 7 months, he transformed from a softer physique to one that appears carved out of granite. The remarkable outcome? He successfully secured a Microsoft commercial opportunity after his transformation",
    verifiedBuyer: false,
  },
];

export default function Transformations() {
  return (
    <section className="mx-auto min-h-full w-5/6 lg:w-4/6  py-1 text-center">
      <H2 color="black-900">transformations</H2>
      <span className="flex max-md:flex-wrap  justify-center align-center ">
        <div className="mx-auto mt-20 w-5/6 px-6 sm:mt-5 lg:px-8">

          <div className="mx-auto m-10 grid max-w-4xl auto-rows-fr grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {transformations.map((transformation, index) => (
              <article
                key={transformation.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={transformation.img}
                  alt=""
                  className="absolute inset-0 -z-10 w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                     
                      {transformation.name}
                    </div>
                  </div>
                </div>
             
                  <h4 className="mt-3 text-xs font-base leading-6 text-white ">
                    <span className="absolute inset-0 " />
                    {transformation.description}
                  </h4>
           
              </article>
            ))}
          </div>
        </div>
      </span>
    </section>
  );
}
