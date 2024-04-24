import CardTemplate from "@/shared/CardTemplate";
import beforeafter1 from "@/assets/beforeafter1.webp";
import beforeafter2 from "@/assets/beforeafter2.webp";
import beforeafter3 from "@/assets/beforeafter3.webp";
import H2 from "@/shared/H2";
import { Link } from "react-router-dom";

const transformations = [
  {
    id: 1,
    name: "Abbie - Lawyer",
    showStars: false,
    img: beforeafter3,
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
    <> 
  
    <div className="bg-white ">
    <div className=" lg:w-4/6 md:w-5/6 sm:w-5/6 xs:w-5/6  xxs:w-5/6 mx-auto ">
      <div className="mx-auto max-w-2xl text-center">
      <H2 color="black-900">transformations</H2>
        
      </div>
      <div className="mx-auto grid md:grid-col-3 sm:grid-cols-3 xs-grid-cols-2 xxs:grid-cols-2  gap-x-5 gap-y-20 lg:mx-0 lg:max-w-none">
        {transformations.map((transformation, index) => (
          <article key={transformation.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={transformation.img}
                alt=""
                className="w-full h-full rounded-2xl bg-gray-100 object-fit "
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                
               
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                 
                    <span className="absolute inset-0" />
                    {transformation.name}
                 
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{transformation.description}</p>
              </div>
            
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  </>
  );
}
