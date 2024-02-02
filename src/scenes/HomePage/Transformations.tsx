import React from "react";
import image6 from "../../assets/image6.png";
import CardTemplate from "@/shared/CardTemplate";
import beforeafter1 from "../../assets/beforeafter1.png"
import beforeafter2 from "../../assets/beforeafter2.png"
import beforeafter3 from "../../assets/beforeafter3.jpeg"
export default function Transformations() {
  return (
    <section className="text-center">    <h2 className="font-bold text-4xl text-black">TRANSFORMATIONS</h2>

    <span className="flex justify-center align-center ">
      <CardTemplate
        name="Abbie | Lawyer"
        showStars={false}
        img={beforeafter1}
        description="Abbie achieved an incredible transformation in just 6 months with the Buff Baddie Program. During this time, she successfully eliminated 17 pounds of pure fat while gaining the ideal amount of muscle. Notably, she accomplished her first pull-up, showcasing her dedication and achievements. Congratulations, Abbie!"
      />
      {/* img={image11}
        title="Diego"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, rerum" */}
      <CardTemplate
        name="John | Strudent"
        showStars={false}
        img={beforeafter2}
description="In a span of 8 months, John underwent an impressive transformation by shedding 35 pounds of fat and building substantial muscle mass. His journey involved utilizing the cutting protocol to lean down effortlessly, followed by a seamless transition into our lean bulk protocol, resulting in the addition of dense muscle size."
/>
      <CardTemplate
        name="Luke | Doctor"
        showStars={false}
        img={beforeafter3}
        description="Luke not only shed more than 20 pounds of fat but also built significant strength and muscle during his impressive transformation. In just 7 months, he transformed from a softer physique to one that appears carved out of granite. The remarkable outcome? He successfully secured a Microsoft commercial opportunity after his transformation."
      />
     
    </span>
    </section>
  );
}
