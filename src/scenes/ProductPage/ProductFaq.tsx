import React, { useState } from "react";
import faqImage from "../../assets/faq.webp";
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
const FaqsArray = [
  {
    question: "How does BUFF Pack differ from Muscle Mass?",
    answer:
      "While BUFF Pack is an excellent choice for daily support, BUFF Pack Elite is specifically formulated for intense workouts and high-performance athletes. It contains more electrolytes and performance-enhancing ingredients.",
  },
  {
    question: "How does Elite support energy and stamina?",
    answer:
      "Elite contains a potent blend of 5 key electrolytes along with trace minerals that are essential for maintaining fluid balance in the body, especially during intense workouts. It also contains taurine, which supports cellular hydration.",
  },
  {
    question: "How does BUFF Pack Elite support ATP production?",
    answer:
      "You boil the sectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Is Elite available in sample packs?",
    answer:
      "You boil the hell out of it. Lorer adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const ProductFaq = () => {
  const [accordionOpen, setAccordionOpen] = useState(
    Array(FaqsArray.length).fill(false)
  );

  const toggleAccordion = (index: number) => {
    const updatedAccordion = [...accordionOpen];
    updatedAccordion[index] = !updatedAccordion[index];
    setAccordionOpen(updatedAccordion);
  };

  return (
    <div className="w-full mx-auto sm:px-0 py-24 sm:pt-32 lg:px-0 lg:py-40">
      <div className="sm:grid sm:grid-cols-12 bg-gray-300 w-full">
        <div className="mt-10 sm:col-span-6 lg:mt-0 sm:mr-6 divide-y divide-gray-900/10">
          <h2 className="pl-3 text-2xl font-bold leading-10 tracking-tight text-gray-900">
            FAQs
          </h2>
          <dl className="space-y-4 divide-y divide-gray-900/10">
            {FaqsArray.map((faq, index) => (
              <div key={faq.question} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between w-full p-3 rounded-lg"
                >
                  <span className="text-black">{faq.question}</span>

                  {accordionOpen ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}

                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                    accordionOpen[index] ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="p-3">{faq.answer}</div>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="sm:col-span-6">
          <img className="relative shadow-xl ring-1 ring-gray-400/10 w-full h-full" src={faqImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductFaq;
