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
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10">
          {/* LEFT / HERO */}
          <div
            className="w-full rounded-3xl bg-no-repeat bg-left bg-cover text-white 
        p-12 flex flex-col justify-between min-h-[720px]"
            style={{ backgroundImage: "url('images/why-img.png')" }}
          >
            <div>
              <h1 className="font-title mb-5 leading-tight">
                Why Choose i3GIS?
              </h1>
              <p className="font-desc text-lg leading-relaxed max-w-md">
                Your All-in-One DevSecOps Tool for Business Compliance
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cardData.map((item, index) =>
                index % 2 === 0 ? (
                  <CardLeft key={index} {...item} />
                ) : (
                  <CardRight key={index} {...item} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardLeft = ({ title, desc, icon }) => (
  <div
    className="h-full min-h-[210px] rounded-xl px-8 py-6 flex"
    style={{
      backgroundColor: "#e2e8f0",
      clipPath:
        "polygon(0% 20%, 0% 0%, 33% 0%, 40% 12%, 100% 12%, 100% 100%, 0% 100%)",
    }}
  >
    <div className="flex flex-col gap-3">
      <img src={icon} className="w-14 h-14" alt="" />
      <h3 className="font-subtitle2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CardRight = ({ title, desc, icon }) => (
  <div
    className="h-full min-h-[210px] rounded-xl px-8 py-6 flex justify-end"
    style={{
      backgroundColor: "#e2e8f0",
      clipPath:
        "polygon(100% 20%, 100% 0%, 67% 0%, 60% 12%, 0% 12%, 0% 100%, 100% 100%)",
    }}
  >
    <div className="flex flex-col gap-3 text-right">
      <img src={icon} className="w-14 h-14 self-end" alt="" />
      <h3 className="font-subtitle2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default WhyChoose;
