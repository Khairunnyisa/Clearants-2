import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ApplicationSecurity from "./components/appsec";
import DynamicSecurity from "./components/dynamicsec";
import MobileSecurity from "./components/mobilesec";
import ContainerSecurity from "./components/containersec";
import InfrastructureSecurity from "./components/infrastructuresec";

export default function ModulesSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("application");

  useEffect(() => {
    const hash = location.hash;

    if (hash === "#modules-application") setActiveTab("application");
    if (hash === "#modules-dynamic") setActiveTab("dynamic");
    if (hash === "#modules-mobile") setActiveTab("mobile");
    if (hash === "#modules-container") setActiveTab("container");
    if (hash === "#modules-infra") setActiveTab("infra");

    if (hash.startsWith("#modules")) {
      document
        .getElementById("modules")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  // 🔁 TAB CLICK → UPDATE HASH
  const handleTabClick = (id) => {
    setActiveTab(id);
    navigate(`#modules-${id}`, { replace: true });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "application":
        return <ApplicationSecurity />;
      case "dynamic":
        return <DynamicSecurity />;
      case "mobile":
        return <MobileSecurity />;
      case "container":
        return <ContainerSecurity />;
      case "infra":
        return <InfrastructureSecurity />;
      default:
        return null;
    }
  };

  return (
    <section id="modules" className="relative mt-[200px] mb-20">
  <div className="max-w-[1400px] mx-auto px-6 ">

    {/* WRAPPER BACKGROUND */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-15">

      {/* SVG BACKGROUND */}
     <svg
  className="absolute inset-y-0 left-1/2 -translate-x-1/2 
             w-[calc(100%+120px)] max-w-[1400px] h-full -z-10"
  viewBox="0 0 1440 900"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="
      M 100 140
      Q 100 70 170 70
      L 300 70
      Q 380 70 460 30
      L 980 30
      Q 1060 70 1140 70
      L 1270 70
      Q 1340 70 1340 140
      L 1340 820
      Q 1340 880 1280 880
      L 160 880
      Q 100 880 100 820
      Z
    "
    fill="#EEF2F6"
  />
</svg>




      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-16 py-32">
        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="font-subtitle black">
            Explore Our Powerful <span className="primary">Modules</span>
          </h2>
          <p className="font-desc mt-2">
            Discover the core modules that power Clearants for efficiency,
            precision, and seamless operations.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { id: "application", label: "Application Security" },
            { id: "dynamic", label: "Dynamic Security" },
            { id: "mobile", label: "Mobile Security" },
            { id: "container", label: "Container Security" },
            { id: "infra", label: "Infrastructure Security" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-5 py-2 rounded-full font-desc border transition-all ${
                activeTab === tab.id
                  ? "bg-red-500 text-white shadow-sm"
                  : "secondary hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {renderContent()}
      </div>
    </div>
  </div>
</section>

  );
}
