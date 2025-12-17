import React from "react";

// import videoDummy from "../../assets/video.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center bg-[#0B111C] text-white px-6 md:px-10 lg:px-16 py-5 overflow-visible">
      <div className="absolute inset-0  from-[#0B111C] to-[#1C0F17] opacity-90"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-title md:text-5xl w-[700px] leading-snug">
            Revolutionizing <span className="primary">DevSecOps</span>
            <br />
            with <span className="text-[#F1FAEE]">Simplicity</span> and{" "}
            <span className="text-[#F1FAEE]">Agility</span>
          </h1>

          <p className="font-desc">
            Clearants is a comprehensive platform that combines security testing
            and DevSecOps tools into one dashboard. Its modular features help
            companies across various industries safeguard their business from
            the development stage.
          </p>

          <button className="btn-primary py-3 px-7 rounded-lg">
            Live Demo
          </button>

          <div className="flex justify-center md:justify-start items-center gap-8 pt-6">
            <div>
              <p className="font-title">100+</p>
              <p className="font-desc primary mt-1">Users</p>
            </div>
            <div>
              <p className="font-title">4y</p>
              <p className="font-desc primary mt-1">Experience</p>
            </div>
            <div>
              <p className="font-title">1000+</p>
              <p className="font-desc primary mt-1">Projects</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="images/content/hero/hero-img.png"
            alt="hero illustration"
            className="w-[70%] md:w-[75%] lg:w-[80%] object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-transparent">
        <div className="absolute bottom-0 left-0 w-full z-0">
          <div className="bg-white w-[65%] h-[90px] "></div>
          <div className="absolute right-0 bottom-0 w-[50%] h-[150px] bg-white [clip-path:polygon(30%_0%,100%_0%,100%_100%,15%_100%)] "></div>
        </div>

        <div className="absolute -bottom-25 left-0 w-full flex justify-between items-start px-12 md:px-20 py-5 translate-y-10">
          <div className="flex pt-10 gap-18 items-start">
            <img
              src="images/logo/bank-mega.png"
              alt="partner1"
              className="h-15 opacity-80"
            />
            <img
              src="images/logo/kalbe.png"
              alt="partner2"
              className="h-15 opacity-80"
            />
            <img
              src="images/logo/merdeka.png"
              alt="partner3"
              className="h-15 opacity-80"
            />
            <img
              src="images/logo/lintasarta.png"
              alt="partner4"
              className="h-15 opacity-80"
            />
          </div>

          <div className="hidden md:block rounded-tl-[50px] max-w-[500px] -translate-y-6">
            <img
              src="images/content/hero/video (1).png"
              alt="dummy hero"
              className="w-full h-auto object-contain rounded-tl-[50px] scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
