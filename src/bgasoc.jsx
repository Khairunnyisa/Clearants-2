import React, { useEffect, useRef } from "react";

const EnergyBeam = ({
  projectId = "hRFfUymDGOHwtFe7evR2",
  className = "",
  bgColor = "bg-[#E94E59]", 
}) => {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      scriptLoadedRef.current = true;
      if (window.UnicornStudio && containerRef.current) {
        console.log("Unicorn Studio loaded, initializing project...");
        window.UnicornStudio.init();
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [projectId]);

  return (
    <div className={`relative w-full h-screen ${bgColor} overflow-hidden ${className}`}>
         <div className="absolute inset-0 bg-gray-600 z-10 opacity-30 pointer-events-none"></div>
      <div ref={containerRef} data-us-project={projectId} className="w-full h-full" />
    </div>
  );
};

export default EnergyBeam;
