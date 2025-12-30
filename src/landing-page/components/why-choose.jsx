import React from "react";
import CardBackgroundPath from "../../components/cards/cardBackgroundPath";
import {
  CheckBadgeIcon,
  CircleStackIcon,
  ComputerDesktopIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";

const WhyChoose = () => {
  const cardData = [
    {
      title: "End-to-End DevSecOps Solution",
      desc: "i3GIS offers comprehensive DevSecOps solution to help business fulfill security standard in Indonesia.",
      icon: <CheckBadgeIcon className="size-6 text-white" />,
    },
    {
      title: "Cost Saving Potential",
      desc: "Save more cost by only paying once for more features and modules, no more extra cost from different vendors.",
      icon: <CircleStackIcon className="size-6 text-white" />,
    },
    {
      title: "Single Dashboard Management",
      desc: "Manage all aspects of DevSecOps implementation with ease to accelerate your business growth.",
      icon: <ComputerDesktopIcon className="size-6 text-white" />,
    },
    {
      title: "Focus on Customer Satisfaction",
      desc: "As your business grows, i3GIS helps facilitate your feedback and feature requests to meet future needs.",
      icon: <PhoneIcon className="size-6 text-white" />,
    },
    {
      title: "Modular Features for Business",
      desc: "Simple to use with existing company software. Choose modules based on what your company needs.",
      icon: <CubeTransparentIcon className="size-6 text-white" />,
    },
    {
      title: "Faster Time-to-Market",
      desc: "Automated tools streamline development and deployment, helping your business deliver updates efficiently.",
      icon: <BuildingOfficeIcon className="size-6 text-white" />,
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
  <div className="relative h-full min-h-[250px] w-full flex flex-col  p-8">
    <div className="absolute inset-0 z-0">
      <CardBackgroundPath
        tabPosition="left"
        borderRadius={20}
        fill="#e2e8f0"
        width="100%"
        height="100%"
      />
    </div>

    <div className="relative z-10 flex flex-col gap-4">
      <div className="w-14 h-14 bg-[#ff4d5a] rounded-2xl flex items-center justify-center shadow-md mb-2">
        {icon}
      </div>

      <h3 className="text-[#1a2b3b] font-bold text-xl leading-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const CardRight = ({ title, desc, icon }) => (
  <div className="relative h-full min-h-[250px] w-full flex flex-col p-8">
    <div className="absolute inset-0 z-0">
      <CardBackgroundPath
        tabPosition="right"
        borderRadius={20}
        fill="#e2e8f0"
        width="100%"
        height="100%"
      />
    </div>
    <div className="relative z-10 flex flex-col gap-4 items-end ">
      <div className="w-14 h-14 bg-[#ff4d5a] rounded-2xl flex items-center justify-center shadow-md mb-2">
        {icon}
      </div>

      <h3 className="text-[#1a2b3b] font-bold text-xl leading-tight">
        {title}
      </h3>

      <p className="text-slate-500 text-sm leading-relaxed text-right">
        {desc}
      </p>
    </div>
  </div>
);

export default WhyChoose;
