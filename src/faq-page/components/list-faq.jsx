import React, { useState, useRef } from "react";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const faqs = [
    {
      q: "Where does the issue with standard security findings come from?",
      a: "These findings usually come from automated scanning tools that detect vulnerabilities based on preset rules.",
    },
    {
      q: "How does i3GIS help with DevSecOps?",
      a: "i3GIS streamlines the security integration process, making it easier for teams to comply with standards.",
    },
    {
      q: "Is it compatible with existing workflows?",
      a: "Yes, i3GIS supports various CI/CD pipelines, including GitLab, Jenkins, and GitHub Actions.",
    },
    {
      q: "How frequently are the findings updated?",
      a: "Findings are updated based on scheduled scans or automated triggers inside the DevSecOps pipeline.",
    },
    {
      q: "Can the results be exported?",
      a: "Yes, results can be exported in multiple formats depending on business needs.",
    },
    {
      q: "Does it support integration with ITSM tools?",
      a: "It supports integrations with Jira, ServiceNow, and similar platforms for seamless issue management.",
    },
    {
      q: "Does i3GIS support multi-tenant environments?",
      a: "Yes, i3GIS supports multi-tenancy for organizations managing multiple client or internal environments.",
    },
    {
      q: "Is onboarding difficult for new team members?",
      a: "i3GIS is designed with simplicity in mind, making onboarding quick and efficient.",
    },

  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full max-w-[1550px] mx-auto px-6 flex flex-col gap-5 mt-10">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className={`w-full transition-all duration-300 ${
              isOpen
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
                  isOpen ? "text-black" : "text-gray-800"
                }`}
              >
                {item.q}
              </span>

              <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full font-desc">
                {isOpen ? "×" : "+"}
              </span>
            </button>

            {/* Auto-height animation */}
            <div
              ref={(el) => (refs.current[i] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: isOpen
                  ? `${refs.current[i]?.scrollHeight}px`
                  : "0px",
              }}
            >
              <p className="text-gray-600 leading-relaxed mt-4">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqList;
