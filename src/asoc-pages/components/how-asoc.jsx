import React from "react";

const Timeline = () => {
  return (
    <>
      <section className="relative w-full bg-white pt-56 pb-40">
        {/* WRAPPER UNTUK NAIKKAN SEMUA KONTEN */}
        <div className="-mt-60 relative">
          {/* TITLE SECTION */}
          <div className="w-full flex flex-col items-center text-center mb-20">
            <h2 className="font-title md:text-4xl font-bold text-black">
              How <span className="text-red-600">ASOC</span> Work
            </h2>

            <p className="text-gray-700 mt-3 leading-relaxed font-desc md:text-base max-w-[700px]">
              ASOC simplifies and streamlines your application security process
              by integrating powerful DevSecOps tools in a seamless, automated
              workflow.
            </p>
          </div>

          {/* GARIS TENGAH */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 mt-24 w-[4px] h-full bg-gradient-to-b from-[#FF5A5A] to-[#D7DCE2]"></div>

          <div className="max-w-[1500px] mx-auto px-6">
            {/* STEP 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 relative">
              <img
                src="images/content/asoc/timeline-1.png"
                className="mx-auto"
              />

              <div>
                <h3 className="font-subtitle2  text-black">
                  Connect Your Security Stack
                </h3>
                <p className="text-gray-600 mt-3">
                  Create an ASOC project by selecting multiple security tools,
                  both free and premium from an available integrations list.
                </p>
              </div>

              {/* DOT MERAH */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-9 h-9 bg-[#FF6C6C] rounded-full border-[8px] border-[#FFD6D6]"></div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 relative">
              <div className="text-right md:order-1 order-2">
                <h3 className="text-xl font-bold text-black">
                  View Consolidated Results
                </h3>
                <p className="text-gray-600 mt-3">
                  Visualize and analyze the results from all connected tools.
                  Identify overlaps, highlight gaps, and gain a unified view of
                  your security posture.
                </p>
              </div>

              <img
                src="images/content/asoc/timeline-2.png"
                className="mx-auto md:order-2 order-1"
              />

              {/* DOT MERAH */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-9 h-9 bg-[#FF6C6C] rounded-full border-[8px] border-[#FFD6D6]"></div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 relative">
              <img
                src="images/content/asoc/timeline-3.png"
                className="mx-auto"
              />

              <div>
                <h3 className="text-xl font-bold text-black">
                  Generate Actionable Reports
                </h3>
                <p className="text-gray-600 mt-3">
                  Receive comprehensive reports that summarize vulnerabilities,
                  highlight severity levels, and provide
                  recommendations—empowering developers to act with clarity.
                </p>
              </div>

              {/* DOT MERAH */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-9 h-9 bg-[#FF6C6C] rounded-full border-[8px] border-[#FFD6D6]"></div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-20 relative">
              <div className="text-right md:order-1 order-2">
                <h3 className="text-xl font-bold text-black">
                  Push Issues to ITSM Platforms
                </h3>
                <p className="text-gray-600 mt-3 max-w-[500px] ml-auto text-right">
                  Transfer selected issues directly into your organization’s
                  ITSM platform, such as Jira or ServiceNow, for streamlined
                  tracking and remediation workflows.
                </p>
              </div>

              <img
                src="images/content/asoc/timeline-4.png"
                className="mx-auto md:order-2 order-1"
              />

              {/* DOT MERAH */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-9 h-9 bg-[#FF6C6C] rounded-full border-[8px] border-[#FFD6D6]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
