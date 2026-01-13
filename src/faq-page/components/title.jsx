import React from "react";

export default function () {
  return (
    <section className="w-full bg-[#E9EEF4]  px-6">
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
      </div>
    </section>
  );
}
