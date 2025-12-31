import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "images/logo/bank-mega.png",
  "images/logo/kalbe.png",
  "images/logo/merdeka.png",
  "images/logo/lintasarta.png",
  "images/logo/bank-mega.png",
  "images/logo/kalbe.png",
  "images/logo/merdeka.png",
  "images/logo/lintasarta.png",
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B111C] text-white overflow-visible">
      <div className="absolute inset-0 from-[#0B111C] to-[#1C0F17] opacity-90"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-30">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/ space-y-6 text-center md:text-left">
            <h1 className="font-title max-w-[860px] leading-snug">
              Revolutionizing <span className="primary">DevSecOps </span>
              with <span className="text-[#F1FAEE]">Simplicity</span> and{" "}
              <span className="text-[#F1FAEE]">Agility</span>
            </h1>

            <p className="font-desc max-w-xl">
              Clearants is a comprehensive platform that combines security
              testing and DevSecOps tools into one dashboard. Its modular
              features help companies across various industries safeguard their
              business from the development stage.
            </p>

            <button className="btn-primary py-3 px-7 rounded-lg">
              Live Demo
            </button>

            <div className="flex justify-center md:justify-start items-center gap-8 pt-6">
              <div>
                <p className="font-subtitle">100+</p>
                <p className="font-desc primary mt-1">Users</p>
              </div>
              <div>
                <p className="font-subtitle">4y</p>
                <p className="font-desc primary mt-1">Experience</p>
              </div>
              <div>
                <p className="font-subtitle">1000+</p>
                <p className="font-desc primary mt-1">Projects</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <img
              src="images/content/hero/hero-img.png"
              alt="hero illustration"
              className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] md:w-[75%] lg:w-[90%] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM CLIP */}
      <div className="absolute bottom-0 left-0 w-full h-[270px] overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 380"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M 0 200
              L 900 200
              L 940 110
              L 1440 110
              L 1440 380
              L 0 400
              Z
            "
            fill="#ffffff"
          />
        </svg>
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-12 md:px-16">
          <div className="flex items-end justify-between h-full">
            <div className="pb-6 w-[750px] overflow-hidden">
              <Marquee speed={40} gradient={false} pauseOnHover>
                {logos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="partner logo"
                    className="h-15 opacity-80 mx-6"
                  />
                ))}
              </Marquee>
            </div>

            <div className="hidden md:block max-w-[440px]">
              <img
                src="images/content/hero/video (1).png"
                alt="dummy hero"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
