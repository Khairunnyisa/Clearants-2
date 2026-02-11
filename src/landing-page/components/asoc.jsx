import React from "react";
import { Link } from "react-router-dom";

export default function AsocSection() {
  return (
    <section className="w-full bg-[#E94E59] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        <div className="relative flex items-center justify-center">
          <img
            src="images/content/asoc/asoc-left.png"
            alt="decor-left"
            className="
              hidden md:block
              absolute left-0 top-[43%] -translate-y-1/2
              translate-x-[40px]
              w-[360px]
              pointer-events-none
            "
          />

          <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
            <h2 className="font-title text-white">ASOC</h2>

            <div
              className="
              inline-block bg-white text-[#E94E59] 
              font-semibold font-subtitle2 
              px-25 py-5 rounded-full 
              shadow-lg my-10
            "
            >
              Centralized your Security Control
            </div>

            <p className="font-desc text-white mx-auto mb-10">
              Integrate your existing security tools to automate vulnerability
              management, giving your developers an end-to-end solution for
              detecting and fixing issues quickly and ensuring complete
              protection.
            </p>


<Link
  to="/asoc"
  className="
    inline-flex items-center justify-center
    bg-white text-[#E94E59] 
    px-10 py-3 rounded-full 
    text-lg font-semibold 
    hover:bg-gray-100 transition shadow-md
  "
>
  Learn More
</Link>

          </div>

          <img
            src="images/content/asoc/asoc-right.png"
            alt="decor-right"
            className="
              hidden md:block
              absolute right-0 top-[41%] -translate-y-1/2
              -translate-x-[40px]
              w-[360px]
              pointer-events-none
            "
          />
        </div>
      </div>
    </section>
  );
}
