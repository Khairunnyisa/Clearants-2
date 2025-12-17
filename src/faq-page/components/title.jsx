import React, { useState } from "react";

const categories = [
  "Application security",
  "Dynamic Security",
  "Mobile Security",
  "Container Security",
  "Others",
];

export default function () {
  const [active, setActive] = useState("Application security");

  return (
    <section className="w-full bg-[#E9EEF4] py-10 px-6">
      <div className="max-w-[1500px] mx-auto">
        {/* TITLE + BUTTON */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="font-title text-[#111827]">
              Frequently Ask Question
            </h2>
            <p className="text-gray-600 font-desc mt-3 max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet.
            </p>
          </div>

          <button className="border-2 border-[#0B3F70] text-[#0B3F70] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0B3F70] hover:text-white transition">
            Add Question
          </button>
        </div>

        {/* CATEGORY TABS */}
        <div className="bg-white rounded-full w-full flex items-center justify-between py-3 px-4">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(item)}
              className={`
        relative flex-1 text-center cursor-pointer py-3 font-medium transition-all duration-300
        ${active === item ? "text-white" : "text-black"}
      `}
              style={{ isolation: "isolate" }}
            >
              {/* RED BACKGROUND */}
              {active === item && (
                <div className="absolute inset-0 bg-[#FF4056] rounded-full z-0"></div>
              )}

              {/* TEXT */}
              <span className="relative z-10">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
