import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ApplicationSecurity from "./components/appsec";
import DynamicSecurity from "./components/dynamicsec";
import MobileSecurity from "./components/mobilesec";
import ContainerSecurity from "./components/containersec";
import InfrastructureSecurity from "./components/infrastructuresec";
import CardModules from "../../../components/cards/cardModules";

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
    <section id="modules" className="relative mt-[100px] mb-20">
      <div className="relative max-w-7xl mx-auto px-6 md:px-15">
        <div className="absolute inset-0 z-0">
          <CardModules color="#E9EEF6" className="w-full h-full" />
        </div>

        <div className="relative z-10 px-6 md:px-16 py-20 lg:py-32">
          <div className="text-center mb-10 pt-8">
            <h2 className="font-subtitle text-black">
              Explore Our Powerful <span className="text-red-500">Modules</span>
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
                    : "bg-white text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pb-10">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
}
