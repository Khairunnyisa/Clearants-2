export default function MobileSecurity() {
  return (
    <div className="space-y-6">
      {/* ===================================== */}
      {/* ROW 1 — Dua kotak ukuran sama          */}
      {/* ===================================== */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr] gap-6">
        {/* LEFT BOX — LEBIH LEBAR */}
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
         
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

      </div>

      {/* ===================================== */}
      {/* ROW 2 — Kolom kiri kecil, kanan lebar */}
      {/* ===================================== */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6">
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
