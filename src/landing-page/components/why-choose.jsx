import React from "react";

const WhyChoose = () => {
  const cardData = [
    {
      title: "End-to-End DevSecOps Solution",
      desc: "i3GIS offers comprehensive DevSecOps solution to help business fulfill security standard in Indonesia.",
      icon: "images/content/why-choose/why-1.svg",
    },
    {
      title: "Cost Saving Potential",
      desc: "Save more cost by only paying once for more features and modules, no more extra cost from different vendors.",
      icon: "images/content/why-choose/why-2.svg",
    },
    {
      title: "Single Dashboard Management",
      desc: "Manage all aspects of DevSecOps implementation with ease to accelerate your business growth.",
      icon: "images/content/why-choose/why-3.svg",
    },
    {
      title: "Focus on Customer Satisfaction",
      desc: "As your business grows, i3GIS helps facilitate your feedback and feature requests to meet future needs.",
      icon: "images/content/why-choose/why-4.svg",
    },
    {
      title: "Modular Features for Business",
      desc: "Simple to use with existing company software. Choose modules based on what your company needs.",
      icon: "images/content/why-choose/why-5.svg",
    },
    {
      title: "Faster Time-to-Market",
      desc: "Automated tools streamline development and deployment, helping your business deliver updates efficiently.",
      icon: "images/content/why-choose/why-6.svg",
    },
  ];

  return (
    <section
      className="flex flex-col md:flex-row items-start justify-center 
w-full px-10 md:px-16 py-20 gap-1 md:gap-2 overflow-hidden"
    >
      <div
        className="md:w-[45%] w-full bg-contain bg-no-repeat bg-left rounded-3xl py-14 px-10 text-white flex flex-col justify-between min-h-[800px] flex-shrink-0"
        style={{ backgroundImage: "url('images/why-img.png')" }}
      >
        <div>
          <h1 className="font-title mb-5 leading-tight">Why Choose i3GIS?</h1>
          <p className="font-desc text-lg leading-relaxed">
            Your All-in-One DevSecOps Tool for Business Compliance
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-8 w-full md:w-[55%]">
        {Array.from({ length: 3 }).map((_, rowIndex) => {
          const leftIndex = rowIndex * 2;
          const rightIndex = rowIndex * 2 + 1;

          return (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <CardLeft
                title={cardData[leftIndex].title}
                desc={cardData[leftIndex].desc}
                icon={cardData[leftIndex].icon}
              />

              <CardRight
                title={cardData[rightIndex].title}
                desc={cardData[rightIndex].desc}
                icon={cardData[rightIndex].icon}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CardLeft = ({ title, desc, icon }) => (
  <div
    className="rounded-xl py-4 px-8 scale-[0.96]"
    style={{
      backgroundColor: "#e2e8f0",
      clipPath:
        "polygon(0% 20%, 0% 0%, 33% 0%, 40% 12%, 100% 12%, 100% 100%, 0% 100%)",
    }}
  >
    <div className="flex flex-col mt-2">
      <img src={icon} className="w-16 h-16" alt="icon" />
      <h3 className="font-subtitle2 mt-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mt-2">{desc}</p>
    </div>
  </div>
);

const CardRight = ({ title, desc, icon }) => (
  <div
    className="rounded-xl py-4 px-8 scale-[0.96]"
    style={{
      backgroundColor: "#e2e8f0",
      clipPath:
        "polygon(100% 20%, 100% 0%, 67% 0%, 60% 12%, 0% 12%, 0% 100%, 100% 100%)",
    }}
  >
    <div className="flex flex-col mt-2">
      <img src={icon} className="w-16 h-16 self-end" alt="icon" />
      <h3 className="font-subtitle2 mt-3 text-right">{title}</h3>
      <p className="text-gray-600 text-sm text-right leading-relaxed mt-2">
        {desc}
      </p>
    </div>
  </div>
);

export default WhyChoose;
