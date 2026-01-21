import React from "react";
import CardBackgroundPath from "../../components/cards/cardBackgroundPath";
import { WavyBackground } from "../../testbg";

const AsocHero = () => {
  return (
    <>
      <section className="relative w-full text-white overflow-visible">
        <div className="absolute inset-0 z-0 h-full">
          <CardBackgroundPath
            tabPosition="left"
            borderRadius={0}
            heightCorner={80}
            tabWidth={80}
            tabStart="55.3vw"
            isFlippedVertical={true}
          />
        </div>

<WavyBackground/>
        <div className="relative z-10 max-w-7xl mx-auto h-[88vh] py-24 px-12 xl:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-20">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="font-title md:text-5xl leading-snug">
                Centralized Security Control with ASOC
              </h1>
              <p className="font-desc">
                Streamline your application security with i3gis Application
                Security...
              </p>
              <button className="btn-primary py-3 px-7 rounded-lg">
                Live Demo
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <img
                src="images/content/asoc/asoc-hero.png"
                alt="hero illustration"
                className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] md:w-[80%] lg:w-[90%] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full mt-[-60px] pb-32">
          <div className="max-w-7xl mx-auto px-12 xl:px-0">
            <div className="w-full bg-[#2B3440] rounded-3xl p-10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#E7ECF2] rounded-2xl p-8">
                  <img
                    src="images/content/asoc/asoc-1.svg"
                    className="h-8 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Unified Security Orchestration
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Manage multiple security tools from one platform...
                  </p>
                </div>

                <div className="bg-[#E7ECF2] rounded-2xl p-8">
                  <img
                    src="images/content/asoc/asoc-2.svg"
                    className="h-8 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Unified Security Orchestration
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Manage multiple security tools from one platform...
                  </p>
                </div>

                <div className="bg-[#E7ECF2] rounded-2xl p-8">
                  <img
                    src="images/content/asoc/asoc-3.svg"
                    className="h-8 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Unified Security Orchestration
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Manage multiple security tools from one platform...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-[140px] overflow-hidden">
        <CardBackgroundPath
          tabPosition="left"
          borderRadius={0}
          heightCorner={80}
          tabWidth={80}
          tabStart="55.3vw"
          isFlippedVertical={false}
          fill="#ffffff"
        />
      </div>
    </>
  );
};

export default AsocHero;
