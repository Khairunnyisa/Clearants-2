import React, {
  useRef,
  useLayoutEffect,
  useState,
  useMemo,
  useId
} from "react";

export default function CardHeroArticle({
  image,
  borderRadius = 20,
  tabPosition = "right",
  heightCorner = 40,
  tabWidth = 50,
  tabStart = 300,
  className = ""
}) {
  const containerRef = useRef(null);
  const clipId = useId();
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const resize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };

    resize();
    const obs = new ResizeObserver(resize);
    obs.observe(containerRef.current);

    return () => obs.disconnect();
  }, []);

  const { w, h } = size;
  const r = borderRadius;
  const isRight = tabPosition === "right";

  const d = useMemo(() => {
    if (!w || !h) return "";
    return `
      M 0 ${r}
      A ${r} ${r} 0 0 1 ${r} 0
      H ${tabStart}
      C ${tabStart + tabWidth / 3} 0,
        ${tabStart + (tabWidth * 2) / 3} ${heightCorner},
        ${tabStart + tabWidth} ${heightCorner}
      H ${w - r}
      A ${r} ${r} 0 0 1 ${w} ${heightCorner + r}
      V ${h - r}
      A ${r} ${r} 0 0 1 ${w - r} ${h}
      H ${r}
      A ${r} ${r} 0 0 1 0 ${h - r}
      Z
    `;
  }, [w, h, r, tabStart, tabWidth, heightCorner]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={d} />
          </clipPath>
        </defs>

        {/* IMAGE (FULL COVER, NO HOLE) */}
        {image && (
          <g
            clipPath={`url(#${clipId})`}
            transform={
              isRight
                ? `translate(${w} 0) scale(-1 1)`
                : undefined
            }
          >
            <image
              href={image}
              x="0"
              y="0"
              width={w}
              height={h}
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        )}

        {/* OVERLAY */}
        <path
          d={d}
          fill="rgba(0,0,0,0.35)"
          transform={
            isRight
              ? `translate(${w} 0) scale(-1 1)`
              : undefined
          }
        />
      </svg>
    </div>
  );
}
