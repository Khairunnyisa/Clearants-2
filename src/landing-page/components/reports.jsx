import React from "react";

const Reports = () => {
  return (
    <section
      className="flex justify-center mx-10 my-30 py-15 px-5 bg-cover bg-center text-white rounded-[20px]"
      style={{
        backgroundImage: "url('/images/reports-bg.svg')",
      }}
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-center font-title mb-10">
          Reports Overview
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* === CARD 1 === */}
          <div className="flex-1 relative">
            <img
              src="/images/reports-content1.svg"
              alt="Executive Report Shape"
              className="w-full h-auto pointer-events-none select-none"
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-start z-10">
              <div className="flex flex-col items-start text-start gap-3 mb-4">
                <div className="w-15 h-15 rounded-full flex items-center justify-center">
                  <img
                    src="icons/executive-icon.svg"
                    alt="Executive Report Icon"
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="font-subtitle2 secondary">Executive Report</h3>
              </div>

              {/* Description */}
              <p className="font-desc mb-2 secondary">
                Offers a high-level overview across multiple projects within an
                organization, designed to give visibility on overall project
                health and alignment.
              </p>

              <ul className="list-disc ml-5 font-desct secondary space-y-2 mb-3">
                <li>Covers multiple projects under one organization</li>
                <li>Useful for understanding dependencies and priorities</li>
                <li>Ideal for strategic planning and quarterly reviews</li>
              </ul>

              {/* Ganti dua kotak jadi gambar */}
              <div className="grid grid-cols-2 gap-1">
                <img
                  src="images/card-1.png"
                  alt="Report preview 1"
                  className="w-full h-auto object-contain"
                />
                <img
                  src="images/card-1.2.png"
                  alt="Report preview 2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* === CARD 2 === */}
          <div className="flex-1 relative">
            <img
              src="/images/reports-content2.svg"
              alt="Technical Report Shape"
              className="w-full h-auto pointer-events-none select-none"
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-start z-10">
              <div className="flex flex-col items-start text-start gap-3 mb-5">
                <div className="w-15 h-15 rounded-full flex items-center justify-center">
                  <img
                    src="icons/tech-icon.svg"
                    alt="Technical Report Icon"
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="font-subtitle2 secondary">Technical Report</h3>
              </div>

              <p className="font-desc mb-2 secondary">
                Offers a high-level overview across multiple projects within an
                organization, designed to give visibility on overall project
                health and alignment.
              </p>

              <ul className="list-disc ml-5 font-desct secondary space-y-2 mb-3">
                <li>Covers multiple projects under one organization</li>
                <li>Useful for understanding dependencies and priorities</li>
                <li>Ideal for strategic planning and quarterly reviews</li>
              </ul>

              <div className="grid grid-cols-2 gap-1">
                <img
                  src="images/card-1.png"
                  alt="Report preview 1"
                  className="w-full h-auto object-contain"
                />
                <img
                  src="images/card-1.2.png"
                  alt="Report preview 2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
