import React, { useState } from "react";
import useGetFAQs from "../../hooks/queries/getFAQs";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const { data, isLoading } = useGetFAQs({
    condition: true,
    limit: 5, // ✅ cuma 5 FAQ
    page: 1,
    searchValue: "",
  });

  const faqs = data?.data ?? [];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  if (isLoading) {
    return (
      <section className="w-full py-20 text-center">
        <p>Loading FAQ...</p>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-4 light-secondary">
      {/* Label */}
      <div className="flex justify-center mb-3">
        <span className="px-5 py-2 mb-5 bg-white font-desc primary rounded-full">
          • Trusted By
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center text-[28px] sm:text-[32px] md:text-[45px] font-subtitle mb-12">
        Frequently Ask<span className="text-red-500"> Question</span>
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-5">
        {faqs.map((item, i) => (
          <div
            key={item.id}
            className={`w-full transition-all duration-300 ${
              openIndex === i
                ? "bg-white p-7 shadow rounded-2xl"
                : "bg-secondary p-6 rounded-2xl"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span
                className={`font-subtitle2 text-[18px] leading-snug ${
                  openIndex === i ? "text-black" : "text-gray-800"
                }`}
              >
                {item.attributes.question}
              </span>

              <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full font-desc">
                {openIndex === i ? "×" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === i ? "max-h-40 mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {item.attributes.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
