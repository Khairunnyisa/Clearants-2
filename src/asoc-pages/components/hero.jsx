import React from "react";

const AsocHero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col items-center bg-[#0B111C] text-white px-4 md:px-8 lg:px-12 py-30 pb-40 overflow-visible">
        {/* HERO BACKGROUND GRADIENT */}
       
        <div className="absolute inset-0 from-[#0B111C] to-[#1C0F17] opacity-90"></div>

        <div className="relative z-10 w-full max-w-[1600px] flex flex-col md:flex-row items-center justify-between gap-20">
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

          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src="images/content/asoc/asoc-hero.png"
              alt="hero illustration"
              className="w-[85%] md:w-[90%] lg:w-[95%] object-contain rounded-xl"
            />
          </div>
        </div>

        <div className="relative z-10 w-full flex justify-center mt-15 px-4">
          <div className="w-full max-w-[1500px] bg-[#2B3440] rounded-3xl p-10 shadow-xl">
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
                  Faster, Informed Remediation
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  By correlating results across tools...
                </p>
              </div>

              <div className="bg-[#E7ECF2] rounded-2xl p-8">
                <img
                  src="images/content/asoc/asoc-3.svg"
                  className="h-8 mb-4"
                />
                <h3 className="text-xl font-semibold text-black mb-3">
                  Seamless Integration
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Push identified issues directly into ITSM platforms...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[250px]">
          <div className="absolute bottom-0 left-0 w-full z-0 translate-y-[40px]">
            <div className="bg-white w-[65%] h-[90px]"></div>

            <div className="absolute right-0 bottom-0 w-[50%] h-[150px] bg-white [clip-path:polygon(30%_0%,100%_0%,100%_100%,15%_100%)]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AsocHero;
