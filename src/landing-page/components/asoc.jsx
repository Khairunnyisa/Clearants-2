import React from "react";

export default function AsocSection() {
  return (
    <section className="relative w-full h-[640px] bg-[#E94E59] flex items-center justify-center overflow-hidden px-6">
      <img
        src="images/content/asoc/asoc-left.png"
        alt="decor-left"
        className="absolute left-40 top-[17%] w-[400px]  pointer-events-none"
      />

      <img
        src="images/content/asoc/asoc-right.png"
        alt="decor-right"
        className="absolute right-40 top-[17%] w-[400px]  pointer-events-none"
      />

      <div className="relative text-center max-w-3xl flex flex-col items-center">
        <h2 className="font-title white">ASOC</h2>

        <div className="inline-block bg-white text-[#E94E59] font-semibold text-2xl mt-15 md:text-3xl px-10 py-5 rounded-full shadow-lg mb-10 relative z-10">
          Centralized your Security Control
        </div>

        <p className="font-desc white mx-auto mb-10">
          Integrate your existing security tools to automate vulnerability
          management, giving your developers an end-to-end solution for
          detecting and fixing issues quickly and ensuring complete protection.
        </p>

        <button className="bg-white text-[#E94E59] px-10 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-md">
          Learn More
        </button>
      </div>
    </section>
  );
}
