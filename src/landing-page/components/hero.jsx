import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0B111C] text-white overflow-visible">
      <div className="absolute inset-0 from-[#0B111C] to-[#1C0F17] opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-30">
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

          {/* Gambar sekarang akan nempel di pojok kanan */}
          <div className="md:w-1/2 relative">
            <img
              src="images/content/hero/hero-img.png"
              alt="hero illustration"
              className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] md:w-[75%] lg:w-[90%] object-contain rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* BOTTOM CLIP PATH AREA */}
      {/* ===================== */}
      <div className="absolute bottom-0 left-0 w-full h-[270px] overflow-hidden">
        {/* SVG CLIP PATH */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 380"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
        M 0 200
        L 930 200
        L 970 110
        L 1440 110
        L 1440 380
        L 0 400
        Z
      "
            fill="#ffffff"
          />
        </svg>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 w-full h-full px-12 md:px-20">
          {/* LOGOS — KIRI */}
          <div className="absolute left-12 md:left-20 bottom-6">
            <div className="flex gap-18 items-center">
              <img
                src="images/logo/bank-mega.png"
                className="h-15 opacity-80"
              />
              <img src="images/logo/kalbe.png" className="h-15 opacity-80" />
              <img src="images/logo/merdeka.png" className="h-15 opacity-80" />
              <img
                src="images/logo/lintasarta.png"
                className="h-15 opacity-80"
              />
            </div>
          </div>

          {/* VIDEO — KANAN */}
          <div className="hidden md:block absolute right-12 md:right-20 bottom-0 max-w-[440px]">
            <img
              src="images/content/hero/video (1).png"
              alt="dummy hero"
              className="w-full object-contain rounded-tl-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
