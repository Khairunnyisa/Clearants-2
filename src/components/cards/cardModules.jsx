import React from "react";

const CustomTabCard = ({
  color = "#E9EEF6",
  radius = 10, // Radius sudut kotak luar
  tabHeight = 20, // Tinggi tonjolan tab
  tabWidth = 170, // Lebar area datar di atas tab
  tabSlope = 40, // LEKUKAN YANG ANDA LINGKARI (Slope width)
  className = "",
}) => {
  const w = 500;
  const h = 400;

  // Kalkulasi koordinat
  const topY = 20; // Titik paling atas tab
  const baseTop = topY + tabHeight; // Garis datar bahu box
  const centerX = w / 2;
  const halfTab = tabWidth / 2;

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
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d={pathData} fill={color} />
    </svg>
  );
};

export default CustomTabCard;
