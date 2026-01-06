export default function ContainerSecurity() {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-stretch">
      {/* ================= LEFT COLUMN ================= */}
      <div className="grid grid-rows-[2fr_2fr] gap-6 h-full">
        {/* LEFT TOP */}
        <div className="min-h-[220px] p-5 rounded-2xl shadow-sm border border-gray-100 bg-white flex flex-col justify-between">
         <img
              src="icons/consec-icon.svg"
              alt="Security Icon"
              className="w-13 h-13 mb-4"
            />
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
            Level Up Your Container Security with Top-Tier Protection
            </h3>
            <p className="text-gray-500 leading-relaxed mb-3">
              We protect application containers prior to deployment and installation to ensure they are protected from cyber attacks and conform to security standards and privacy regulations. This module is still in development and will be coming soon.
            </p>
          </div>

          
        </div>

        {/* LEFT BOTTOM */}
        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <img
            src="images/container-img.png"
            alt=""
            className="
      absolute
      left-1/2
      -translate-x-1/2
      bottom-[-5px]
      w-[250px]
      md:w-[550px]
      pointer-events-none
      select-none
    "
          />
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="grid grid-rows-[2fr_1fr] gap-6 h-full">
        {/* RIGHT TOP */}
        <div className="min-h-[200px] rounded-2xl shadow-sm border border-gray-100 bg-white flex items-center justify-center">
          <img
            src="images/appsec-img2.png"
            alt="Code Protection"
            className="w-[90%]  object-contain"
          />
        </div>

        {/* RIGHT BOTTOM */}
        <div className="min-h-[150px] text-center p-5 rounded-2xl shadow-sm border border-gray-100 bg-white flex flex-col justify-center">
          <h4 className="font-semibold text-gray-800 mb-2">
            Record your code changes
          </h4>
          <p className="text-gray-500 text-sm">
            This process involves documenting modifications made to the source code, enabling developers to track and manage the evolution of a project over time. 
          </p>
        </div>
      </div>
    </div>
  );
}
