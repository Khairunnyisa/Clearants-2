export default function DynamicSecurity() {
  return (
    <div className="space-y-6">
      {/* ===================================== */}
      {/* ROW 1 — Dua kotak ukuran sama          */}
      {/* ===================================== */}
      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-6">
        {/* LEFT BOX — LEBIH LEBAR */}
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          {/* HEADER IMAGE (NO PADDING) */}
          <img
            src="images/content/module/dynamic-title.svg"
            alt="Dynamic Security"
            className="absolute top-0 left-0 w-[300px] object-contain"
          />

          {/* CONTENT */}
          <div className="relative p-8 pt-18">
            <h3 className="font-subtitle2 mb-4 text-gray-900 leading-tight">
              Advancing Dynamic Application Security Testing with Extra
              Protection
            </h3>

            <p className="font-desc max-w-3xl">
              DAST (Dynamic Application Security Tools) helps your developers
              and QA teams test their web applications and APIs for potential
              security threats, so you can identify vulnerabilities that could
              compromise the integrity of data or the privacy of users. This
              helps ensure that your application meets security standards
              securely and properly.
            </p>
          </div>
        </div>

        {/* RIGHT BOX — LEBIH KECIL */}
        <div className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white">
          <h3 className="font-subtitle2 mb-3 text-gray-800">
            Comprehensive API Support Platform
          </h3>
          <p className="text-gray-500 font-desc mb-4">
            Our platform offers unparalleled support for API types...
          </p>

          <div className="flex gap-3 flex-wrap">
            <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm">
              SOAP API
            </span>
            <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm">
              GraphQL
            </span>
            <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm">
              REST/Open API
            </span>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* ROW 2 — Kolom kiri kecil, kanan lebar */}
      {/* ===================================== */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        {/* LEFT SMALL CARD */}
        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <div className="flex flex-col gap-3 h-full">
            {/* IMAGE TOP */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src="images/content/module/web-scan.png"
                alt="Website Scan"
                className="inset-0 w-full h-full "
              />
            </div>

            {/* IMAGE BOTTOM */}
            <div className="relative flex-1 overflow-hidden ">
              <img
                src="images/content/module/api-scan.png"
                alt="API Scan"
                className=" inset-0 w-full h-full "
              />
            </div>
          </div>
        </div>

        {/* RIGHT WIDE CARD */}
        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <div className="flex gap-3 h-full">
            {/* IMAGE LEFT */}
            <div className="relative flex-1 rounded-xl overflow-hidden bg-gray-100">
              <img
                src="images/content/module/api-card.png"
                alt="API Dashboard"
                className="absolute inset-0 w-full h-full  object-top"
              />
            </div>

            {/* IMAGE RIGHT */}
            <div className="relative flex-1 rounded-xl overflow-hidden bg-gray-100">
              <img
                src="images/content/module/web-card.png"
                alt="API Dashboard Detail"
                className="absolute inset-0 w-full h-full  object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
