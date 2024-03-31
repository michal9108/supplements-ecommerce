import Accordion from "./Accordion";
import H2 from "@/shared/H2";

export default function Faq() {
  return (
    <div className="bg-">
      <div className="lg:w-4/6 md:w-4/6 sm:w-4/6 xs:w-4/6 xxs:w-5/6 m-auto ">
        <span className="flex justify-center flex-col">
          <H2 color="black-900">FAQ</H2>
          <p className="text-center font-bold text-black-900">
            We know you’ve got questions and we’ve got all the answers
          </p>
        </span>
        <div className="py-4">
          <Accordion
            title="How do I make a return?"
            answer="If you have a return, email us at support@bodybuff.com and we'd be glad to help you! Returns are accepted on products within 60-days from the date of purchase."
          />

          <Accordion
            title="What are the benefits of protein supplements?"
            answer="Protein supplements can help with muscle growth, recovery, and overall fitness. They provide essential amino acids and can be a convenient way to increase protein intake."
          />

          <Accordion
            title="How long do I have to wait for my order?"
            answer="The delivery time depends on your location and the shipping method chosen. Our standard shipping usually takes 3-5 business days, but please allow up to 7-10 business days for international orders."
          />

          <Accordion
            title="What are the different types of protein supplements?"
            answer="There are different types of protein supplements, including whey protein, casein protein, soy protein, and plant-based protein. Each type has its own benefits and uses."
          />

          <Accordion
            title="What is the recommended daily intake of protein?"
            answer="The recommended daily intake of protein varies depending on factors such as age, sex, weight, and activity level. As a general guideline, adults should aim for 0.8 grams of protein per kilogram of body weight."
          />

          <Accordion
            title="Can I cancel my order?"
            answer="If you need to cancel your order, please contact us as soon as possible. Once an order has been shipped, it cannot be canceled."
          />

          <Accordion
            title="Do you offer international shipping?"
            answer="Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on your location."
          />

          <Accordion
            title="Are there any side effects of protein supplements?"
            answer="Protein supplements are generally safe when used as directed. However, some people may experience side effects such as digestive issues or allergic reactions."
          />

          <Accordion
            title="Can protein supplements help with weight loss?"
            answer="Protein supplements can be a helpful tool for weight loss when combined with a healthy diet and regular exercise. They can help you feel full and satisfied, which may reduce overall calorie intake."
          />

          <Accordion
            title="How do I track my order?"
            answer="You can track your order by logging into your account on our website and checking the order status. Once your order has been shipped, you will receive a tracking number."
          />
        </div>
      </div>
    </div>
  );
}
