import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export function WavyBackground({
  className = "",
  colors = ["#C1001A", "#E85808", "#9D0837", "#B42B41"],
  blur = 12,
  speed = "slow",
  waveOpacity = 0.20,
  backgroundFill = "#0B111C",
}) {
  const canvasRef = useRef(null);
  const noise = createNoise3D();
  let animationId;

  const getSpeed = () => (speed === "fast" ? 0.300 : 0.010);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;

    window.onresize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    let nt = 0;

    const render = () => {
      nt += getSpeed();
      ctx.globalAlpha = waveOpacity;
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = 60;
        ctx.strokeStyle = colors[i % colors.length];

        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, i * 0.3, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 ${className}`}
    />
  );
}
