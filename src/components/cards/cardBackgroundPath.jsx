import React from "react";

const CardBackgroundPath = ({
  fill = "#111111",
  width = "450px",
  height = "300px",
  borderRadius = 10,
  tabPosition = "left",
  isFlippedVertical = false,
  className = "",
  heightCorner = 40,
}) => {
  const w = 450;
  const h = 300;
  const r = borderRadius;

  const d = `
    M 0 ${r}
    A ${r} ${r} 0 0 1 ${r} 0
    H 130 
    C 155 0, 155 ${heightCorner}, 180 ${heightCorner}  
    H ${w - r}
    A ${r} ${r} 0 0 1 ${w} ${heightCorner + r}
    V ${h - r}
    A ${r} ${r} 0 0 1 ${w - r} ${h}
    H ${r}
    A ${r} ${r} 0 0 1 0 ${h - r}
    V ${r}
    Z
  `;

  const transforms = [];
  if (tabPosition === "right") {
    transforms.push("scaleX(-1)");
  }
  if (isFlippedVertical) {
    transforms.push("scaleY(-1)");
  }

  const transformStyle = transforms.length > 0 ? transforms.join(" ") : "none";

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      width={width}
      height={height}
      className={className}
      preserveAspectRatio="none"
      style={{
        transform: transformStyle,
        transformOrigin: "center center",
        transition: "transform 0.3s ease",
      }}
    >
      <path d={d} fill={fill} />
    </svg>
  );
};

export default CardBackgroundPath;
