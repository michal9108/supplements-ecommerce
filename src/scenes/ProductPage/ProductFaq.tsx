import React, { useState } from "react";
import faqImage from "../../assets/faq.webp";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { ProductType } from "@/shared/types";
import H2 from "@/shared/H2";

const FaqsArray = [
  {
    question: "What are the key benefits of MUSCLE MASS PREMIUM?",
    answer:
      "MUSCLE MASS PREMIUM is designed to revitalize your body and mind with sustained energy throughout the day. It enhances mental clarity, focus, and provides a healthy natural boost to your energy levels.",
  },
  {
    question: "How does MUSCLE MASS PREMIUM differ from BOOST PLUS?",
    answer:
      "While both supplements offer energy and performance boosts, MUSCLE MASS PREMIUM focuses on sustained energy throughout the day with natural ingredients. BOOST PLUS, on the other hand, provides maximum boost for intense workouts with improved endurance and recovery.",
  },
  {
    question: "What ingredients are in POWER GAIN?",
    answer:
      "POWER GAIN contains a clinically tested formula designed to build lean muscle mass, increase strength and power, and optimize muscle recovery. It is formulated with ingredients backed by scientific research to ensure effectiveness.",
  },
  {
    question: "How do I use these supplements for best results?",
    answer:
      "For optimal results, it's essential to follow the recommended dosage instructions provided on the product packaging. Additionally, incorporating a balanced diet and regular exercise routine can further enhance the benefits of these supplements.",
  },
  {
    question: "Are these supplements safe and free from side effects?",
    answer:
      "Yes, these supplements are formulated with natural ingredients and are free from harmful additives and fillers. However, it's always recommended to consult with a healthcare professional before starting any new supplement regimen, especially if you have pre-existing health conditions or are taking other medications.",
  },
];

const ProductFaq = ({ images }: ProductType) => {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(FaqsArray.length).fill(false),
  );

  const toggleAccordion = (index: number) => {
    const updatedAccordion = [...accordionOpen];
    updatedAccordion[index] = !updatedAccordion[index];
    setAccordionOpen(updatedAccordion);
  };

  return (
    <>
          <H2 children="FAQs" color={"black-900"}></H2>
    <h2 className="pl-3 text-2xl font-bold leading-10 tracking-tight text-gray-900">
    
  </h2>
    <div className="w-full mx-auto sm:px-0">
      <div className="sm:grid sm:grid-cols-12 bg-gray-300 w-full">
        <div className=" sm:col-span-6 my-auto sm:mr-6 divide-y divide-gray-900/10">
         
          <dl className="space-y-4 divide-y divide-gray-900/10">
            {FaqsArray.map((faq, index) => (
              <div key={faq.question} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between w-full p-3 rounded-lg"
                >
                  <span className="text-black md:text-md">{faq.question}</span>

                  {/* {accordionOpen[index] ? (
                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                  )} */}

                  <svg
                    className="fill-black-900 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen[index] && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen[index] && "!rotate-180"
                      }`}
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen[index]
                      ? "block opacity-100"
                      : "hidden opacity-0"
                  }`}
                >
                  <div className="p-3 md:text-md text-black-900">{faq.answer}</div>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="sm:col-span-6">
          <img
            className="relative shadow-xl ring-1 ring-gray-400/10 w-full h-full"
            src={images[8].src}
            alt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductFaq;
