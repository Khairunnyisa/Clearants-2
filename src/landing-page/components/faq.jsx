import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Where does the issue with standard security findings come from?",
      a: "The issue stems from the OWASP Top 10 and CVE (Common Vulnerabilities and Exposures) findings; the infrastructure module will then refer to the CIS benchmark.",
    },
    {
      q: "Where does the issue with standard security findings come from?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ad.",
    },
    {
      q: "Where does the issue with standard security findings come from?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, modi.",
    },
    {
      q: "Where does the issue with standard security findings come from?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ea!",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-20 px-4 light-secondary">
      {/* Label */}
      <div className="flex justify-center mb-3">
        <span className="px-5 py-2 mb-5  bg-white font-desc primary rounded-full">
          • Trusted By
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center font-subtitle mb-12">
        Frequently Ask<span className="text-red-500"> Question</span>
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-5">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`w-full transition-all duration-300 ${
  openIndex === i
    ? "bg-white p-7 shadow rounded-2xl"
    : "bg-secondary p-6 rounded-full"
}`}
          >
            {/* Header */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span
                className={`font-subtitle2 ${
                  openIndex === i ? "text-black" : "text-gray-800"
                }`}
              >
                {item.q}
              </span>

              <span
                className="w-8 h-8 flex items-center justify-center 
                           bg-white rounded-full font-desc"
              >
                {openIndex === i ? "×" : "+"}
              </span>
            </button>

            {/* Dropdown body with animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
