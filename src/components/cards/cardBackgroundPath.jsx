import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";

const CardBackgroundPath = ({
  fill = "#111111",
  borderRadius = 10,
  tabPosition = "left",
  isFlippedVertical = false,
  heightCorner = 40,
  tabWidth = "15vw",
  tabStart = "5vw",
  className = "",
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, vw: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width,
          height,
          vw: window.innerWidth / 100, // 1vw dalam pixel
        });
      }
    };

    const observer = new ResizeObserver(() => updateDimensions());
    observer.observe(containerRef.current);

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Helper untuk memproses unit (px atau vw)
  const parseValue = useCallback((val) => {
    if (typeof val === "string" && val.endsWith("vw")) {
      return parseFloat(val) * dimensions.vw;
    }
    return parseFloat(val) || 0;
  });

  const { width: w, height: h } = dimensions;
  const r = borderRadius;

  // Hitung nilai pixel akhir
  const tw = useMemo(() => parseValue(tabWidth), [parseValue, tabWidth]);
  const ts = useMemo(() => parseValue(tabStart), [parseValue, tabStart]);

  const d = useMemo(() => {
    if (!w || !h) return "";

    return `
      M 0 ${r}
      A ${r} ${r} 0 0 1 ${r} 0
      H ${ts} 
      C ${ts + tw / 3} 0, ${ts + (tw * 2) / 3} ${heightCorner}, ${
      ts + tw
    } ${heightCorner}  
      H ${w - r}
      A ${r} ${r} 0 0 1 ${w} ${heightCorner + r}
      V ${h - r}
      A ${r} ${r} 0 0 1 ${w - r} ${h}
      H ${r}
      A ${r} ${r} 0 0 1 0 ${h - r}
      V ${r}
      Z
    `;
  }, [w, h, r, ts, tw, heightCorner]);

  const transforms = [];
  if (tabPosition === "right") transforms.push("scaleX(-1)");
  if (isFlippedVertical) transforms.push("scaleY(-1)");

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        style={{
          width: "100%",
          height: "100%",
          transform: transforms.length > 0 ? transforms.join(" ") : "none",
          transformOrigin: "center",
          display: "block",
          transition: "transform 0.3s ease",
        }}
        preserveAspectRatio="none"
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
};

export default CardBackgroundPath;
