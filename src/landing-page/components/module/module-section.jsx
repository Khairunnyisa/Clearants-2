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
    <section
      id="modules"
      className="relative flex justify-center mt-[200px] mb-20"
    >
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] z-0"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 0 120
            Q 0 60 60 60
            L 430 60
            Q 460 20 520 20
            L 920 20
            Q 970 20 1010 60
            L 1380 60
            Q 1440 60 1440 120
            L 1440 900
            L 0 900
            Z
          "
          fill="#E6EBF2"
        />
      </svg>

      <div className="relative z-10 w-[90%] max-w-6xl px-6 py-40">
        <div className="text-center mb-6">
          <h2 className="font-subtitle black">
            Explore Our Powerful <span className="primary">Modules</span>
          </h2>
          <p className="font-desc mt-2">
            Discover the core modules that power Clearants for efficiency,
            precision, and seamless operations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        {renderContent()}
      </div>
    </section>
  );
}
