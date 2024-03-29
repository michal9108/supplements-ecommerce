import React, { useState } from "react";
import faqImage from "../../assets/faq.webp";

const faqs = [
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
    Array(faqs.length).fill(false)
  );

  const toggleAccordion = (index) => {
    const updatedAccordion = [...accordionOpen];
    updatedAccordion[index] = !updatedAccordion[index];
    setAccordionOpen(updatedAccordion);
  };

  return (
    <div className="w-full mx-auto md:px-0 py-24 sm:pt-32 lg:px-0 lg:py-40">
      <div className="md:grid md:grid-cols-12 bg-gray-300 w-full">
        <div className="mt-10 md:col-span-6 lg:mt-0 md:mr-6 divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="space-y-4 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between w-full p-3 rounded-lg"
                >
                  <span className="text-black">{faq.question}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 transform ${
                      accordionOpen[index] ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className="transition-opacity duration-200 opacity-100"
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transition-opacity duration-200 opacity-0 ${
                        accordionOpen[index] ? "opacity-100" : ""
                      }`}
                    />
                  </svg>
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

        <div className="md:col-span-6">
          <img className="shadow-xl ring-1 ring-gray-400/10" src={faqImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductFaq;
