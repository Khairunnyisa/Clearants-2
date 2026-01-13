import CardBackgroundPath from "../../components/cards/cardBackgroundPath";

const Reports = () => {
  return (
    <section className="w-full my-24 px-4 sm:px-6">
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 bg-cover bg-center text-white rounded-[20px]"
        style={{
          backgroundImage: "url('/images/reports-bg.svg')",
        }}
      >
        <h2
          className="text-center text-[28px]
    sm:text-[32px]
    md:text-[45px] font-title mb-10"
        >
          Reports Overview
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          <div className="flex-1 relative w-full">
            <div className="absolute inset-0 z-10">
              <CardBackgroundPath
                tabPosition="right"
                borderRadius={20}
                heightCorner={40}
                tabWidth={50}
                tabStart={140}
                isFlippedVertical={true}
                fill="#e2e8f0"
              />
            </div>

            {/* Content Layer (Normal Flow - Menentukan Tinggi) */}
            <div className="p-8 flex flex-col justify-start relative z-10 h-full mb-10">
              <div className="flex flex-col items-start text-start gap-3 mb-4">
                <div className="w-15 h-15 rounded-full flex items-center justify-center">
                  <img
                    src="icons/executive-icon.svg"
                    alt="Executive"
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="font-subtitle2 secondary">Executive Report</h3>
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

              <div className="grid grid-cols-2 gap-1 mt-4">
                <img
                  src="images/card-1.png"
                  alt="1"
                  className="w-full h-auto object-contain"
                />
                <img
                  src="images/card-1.2.png"
                  alt="2"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full">
            <div className="absolute inset-0 z-10">
              <CardBackgroundPath
                tabPosition="left"
                fill="#e2e8f0"
                borderRadius={20}
                heightCorner={40}
                tabWidth={50}
                tabStart={140}
              />
            </div>

            <div className="p-8 flex flex-col justify-start relative z-10 h-full">
              <div className="flex flex-col items-start text-start gap-3 mb-5">
                <div className="w-15 h-15 rounded-full flex items-center justify-center">
                  <img
                    src="icons/tech-icon.svg"
                    alt="Technical"
                    className="w-15 h-15"
                  />
                </div>
                <h3 className="font-subtitle2 secondary">Technical Report</h3>
              </div>

              <p className="font-desc mb-2 secondary">
                Offers a high-level overview across multiple projects...
              </p>

              <ul className="list-disc ml-5 font-desct secondary space-y-2 mb-3">
                <li>Covers multiple projects under one organization</li>
                <li>Useful for understanding dependencies and priorities</li>
                <li>Ideal for strategic planning and quarterly reviews</li>
              </ul>

              <div className="grid grid-cols-2 gap-1 mt-4">
                <img
                  src="images/card-1.png"
                  alt="1"
                  className="w-full h-auto object-contain"
                />
                <img
                  src="images/card-1.2.png"
                  alt="2"
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
