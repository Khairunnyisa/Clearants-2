import React from "react";
import Marquee from "react-fast-marquee";
import CardBackgroundPath from "../../components/cards/cardBackgroundPath";
import CardVideoIFrame from "../../components/cards/cardVideoIFrame";

const logos = [
  "images/logo/bank-mega.png",
  "images/logo/kalbe.png",
  "images/logo/merdeka.png",
  "images/logo/lintasarta.png",
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-visible">
      <div className="absolute inset-0 z-10 h-[88vh]">
        <CardBackgroundPath
          tabPosition="left"
          borderRadius={0}
          heightCorner={80}
          tabWidth={80}
          tabStart={"55.3vw"}
          isFlippedVertical={true}
          fill="#0B111C"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-[88vh] py-24 px-12 xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between  h-full ">
          <div className=" space-y-6 text-center md:text-left">
            <h1
              className="font-title
    max-w-[860px]
    leading-snug
    text-[28px]
    sm:text-[32px]
    md:text-[45px]"
            >
              Revolutionizing <span className="primary">DevSecOps </span>
              with <span className="text-[#F1FAEE]">Simplicity</span> and{" "}
              <span className="text-[#F1FAEE]">Agility</span>
            </h1>

            <p className="text-sm  max-w-xl">
              Clearants is a comprehensive platform that combines security
              testing and DevSecOps tools into one dashboard. Its modular
              features help companies across various industries safeguard their
              business from the development stage.
            </p>

            <button
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary py-3 px-7 rounded-lg"
            >
              Live Demo
            </button>

            <div className="flex justify-center md:justify-start items-center gap-8 pt-6">
              <div>
                <p
                  className="font-subtitle text-[28px]
    sm:text-[32px]
    md:text-[45px]"
                >
                  100+
                </p>
                <p className="font-desc primary mt-1">Users</p>
              </div>
              <div>
                <p
                  className="font-subtitle text-[28px]
    sm:text-[32px]
    md:text-[45px]"
                >
                  4y
                </p>
                <p className="font-desc primary mt-1">Experience</p>
              </div>
              <div>
                <p
                  className="font-subtitle text-[28px]
    sm:text-[32px]
    md:text-[45px]"
                >
                  1000+
                </p>
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
      <div className="absolute bottom-0 left-0 w-full h-[calc(12vh+80px)] overflow-hidden">
        <div className="relative h-full max-w-7xl mx-auto ">
          <div className="flex items-end justify-between h-full gap-12">
            <div className="overflow-hidden flex h-[12vh] justify-between w-full">
              <Marquee
                speed={40}
                gradient={true}
                pauseOnHover
                gradientWidth={50}
              >
                {logos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="partner logo"
                    className="h-12 opacity-80 mx-6"
                  />
                ))}
              </Marquee>
            </div>

            <div className="hidden md:flex h-[calc(12vh+60px)] justify-end items-start w-full">
              <CardVideoIFrame />
              {/* <img
                src="images/content/hero/video (1).png"
                alt="dummy hero"
                className="w-[calc(580px-5.3vw)] h-[calc(12vh+40px)]" 
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
