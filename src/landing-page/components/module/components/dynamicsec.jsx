import CardBackgroundPath from "../../../../components/cards/cardBackgroundPath";
import DynamicCardPath from "../../../../components/cards/cardDynamic";
import ScanCardPath from "../../../../components/cards/cardDynamic";

export default function DynamicSecurity() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-6">
        <div className="relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="relative p-5">
            <img
              src="icons/dynamsec-icon.svg"
              alt="Security Icon"
              className="w-13 h-13 mb-4"
            />
            <h3 className="font-subtitle2 mb-4 text-gray-900 leading-tight">
              Advancing Dynamic Application Security Testing with Extra
              Protection
            </h3>

            <p className="text-sm text-gray-400 max-w-3xl">
              DAST (Dynamic Application Security Tools) helps your developers
              and QA teams test their web applications and APIs for potential
              security threats, so you can identify vulnerabilities that could
              compromise the integrity of data or the privacy of users. This
              helps ensure that your application meets security standards
              securely and properly.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl shadow-sm border border-gray-100 bg-white">
          <h3 className="font-subtitle2 mb-3 text-gray-800">
            Comprehensive API Support Platform
          </h3>
          <p className="text-sm text-gray-400  mb-4">
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

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
  <div className="flex flex-col gap-4 h-full">
    {/* WEBSITE SCAN */}
    <div className="flex-1">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
           <DynamicCardPath
            fill="#EEF2F7"
            borderRadius={10}
            heightCorner={15}
            tabWidth="30px"
            tabStart="12vw"
            tabPosition="left"
          />
        </div>
        <div className="relative z-10 p-6">
          <h4 className="font-subtitle2 text-gray-900 mb-2">
            Website Scan
          </h4>
          <p className="text-sm text-gray-500 max-w-md">
            Website scanning for vulnerabilities and ensuring the app’s security.
          </p>
        </div>
      </div>
    </div>

    {/* API SCAN */}
    <div className="flex-1">
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <div className="absolute inset-0">
          <DynamicCardPath
            fill="#EEF2F7"
            borderRadius={10}
            heightCorner={15}
            tabWidth="30px"
            tabStart="12vw"
            tabPosition="right"
          />
        </div>
        <div className="relative z-10 p-6 text-right ml-auto max-w-md">
          <h4 className="font-subtitle2 text-gray-900 mb-2">
            API Scan
          </h4>
          <p className="text-sm text-gray-500">
            API scanning to discover vulnerabilities and ensure that the
            information contained within the API is secure.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="relative h-[260px] rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden p-4">
          <div className="flex gap-3 h-full">
            <img
              src="images/content/module/api-card.png"
              alt="API Dashboard"
              className="w-full h-full object-contain"
            />

            <img
              src="images/content/module/web-card.png"
              alt="API Dashboard Detail"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
