import React, {
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";

const DynamicCardPath = ({
  fill = "#EEF2F7",
  borderRadius = 10,
  tabPosition = "right",
  heightCorner = 40,
  tabWidth = "15vw",
  tabStart = "5vw",
  className = "",
}) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, vw: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const update = () => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({
        width,
        height,
        vw: window.innerWidth / 100,
      });
    };

    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    update();

    return () => ro.disconnect();
  }, []);

  const parseValue = useCallback(
    (v) => (typeof v === "string" && v.endsWith("vw") ? parseFloat(v) * dimensions.vw : parseFloat(v)),
    [dimensions.vw]
  );

  const { width: w, height: h } = dimensions;
  const r = borderRadius;
  const tw = useMemo(() => parseValue(tabWidth), [parseValue, tabWidth]);
  const ts = useMemo(() => parseValue(tabStart), [parseValue, tabStart]);

  const lift = heightCorner * 1.8; // 🔥 bagian yang bikin “naik & melengkung”

  const d = useMemo(() => {
    if (!w || !h) return "";

    return `
      M 0 ${r}
      A ${r} ${r} 0 0 1 ${r} 0
      H ${ts}
      C
        ${ts + tw * 0.2} 0,
        ${ts + tw * 0.8} ${lift},
        ${ts + tw} ${lift}
      H ${w - r}
      A ${r} ${r} 0 0 1 ${w} ${lift + r}
      V ${h - r}
      A ${r} ${r} 0 0 1 ${w - r} ${h}
      H ${r}
      A ${r} ${r} 0 0 1 0 ${h - r}
      V ${r}
      Z
    `;
  }, [w, h, r, ts, tw, lift]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{
          transform: tabPosition === "right" ? "scaleX(-1)" : "none",
          transformOrigin: "center",
        }}
      >
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
};

export default DynamicCardPath;
