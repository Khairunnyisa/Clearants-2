import React, { useRef, useLayoutEffect, useState } from "react";

const CardModules = ({
  color = "#E9EEF6",
  radius = 10,
  tabHeight = 20,
  tabWidth = 170,
  tabSlope = 40,
  className = "",
}) => {
  const svgRef = useRef(null);
  const [resolved, setResolved] = useState({
    width: tabWidth,
    height: tabHeight,
  });

  useLayoutEffect(() => {
    if (!svgRef.current) return;

    const styles = getComputedStyle(svgRef.current);

    const cssWidth = parseFloat(
      styles.getPropertyValue("--card-tab-width")
    );
    const cssHeight = parseFloat(
      styles.getPropertyValue("--card-tab-height")
    );

    setResolved({
      width: cssWidth || tabWidth,
      height: cssHeight || tabHeight,
    });
  }, [tabWidth, tabHeight]);

  const w = 500;
  const h = 400;

  const topY = 20;
  const baseTop = topY + resolved.height;
  const centerX = w / 2;
  const halfTab = resolved.width / 2;

  const pathData = `
    M ${radius},${baseTop} 
    H ${centerX - halfTab - tabSlope} 
    C ${centerX - halfTab - tabSlope / 2},${baseTop} 
      ${centerX - halfTab - tabSlope / 2},${topY} 
      ${centerX - halfTab},${topY}
    H ${centerX + halfTab}
    C ${centerX + halfTab + tabSlope / 2},${topY} 
      ${centerX + halfTab + tabSlope / 2},${baseTop} 
      ${centerX + halfTab + tabSlope},${baseTop}
    H ${w - radius}
    A ${radius},${radius} 0 0 1 ${w},${baseTop + radius}
    V ${h - radius}
    A ${radius},${radius} 0 0 1 ${w - radius},${h}
    H ${radius}
    A ${radius},${radius} 0 0 1 0,${h - radius}
    V ${baseTop + radius}
    A ${radius},${radius} 0 0 1 ${radius},${baseTop}
    Z
  `;

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ background: "transparent" }}
    >
      <path d={pathData} fill={color} />
    </svg>
  );
};

export default CardModules;
