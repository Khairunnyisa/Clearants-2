import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DynamicVideoMask = ({
  id = "video-card-mask",
  radius = 20,
  slantOffset = 140,
  refWidth = 600,
  refHeight = 250,
}) => {
  const rx = radius / refWidth;
  const ry = radius / refHeight;
  const sx = slantOffset / refWidth;

  const pathData = `
    M ${sx + rx},0 
    H ${1 - rx}
    A ${rx},${ry} 0 0 1 1,${ry}
    V ${1 - ry}
    A ${rx},${ry} 0 0 1 ${1 - rx},1
    H ${rx}
    A ${rx},${ry} 0 0 1 0,${1 - ry}
    L ${sx - rx * 0.5},${ry * 0.5}
    A ${rx},${ry} 0 0 1 ${sx + rx},0
    Z
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={id} clipPathUnits="objectBoundingBox">
          <path d={pathData} />
        </clipPath>
      </defs>
    </svg>
  );
};

const CardVideoIFrame = ({ youtubeId = "dQw4w9WgXcQ" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const thumbnail = `https://img.youtube.com/vi/KZeIEiBrT_w/maxresdefault.jpg`;
  const fullVideoUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <>
      <div className="flex justify-center">
        <div
          className="relative group cursor-pointer w-[calc(580px-5.3vw)] h-[calc(12vh+40px)]"
          onClick={() => setIsModalOpen(true)}
        >
          <div
            className="absolute inset-0 bg-black overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-101 ring-1 ring-white/10"
            style={{
              clipPath: "url(#video-card-mask)",
            }}
          >
            <div className="relative w-full h-full bg-zinc-900">
              <img
                src={thumbnail}
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover scale-125 opacity-80 group-hover:opacity-100 transition-opacity"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-red-600/90 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Play className="w-6 h-6 text-white ml-1 fill-white" />
            </div>
          </div>
        </div>
      </div>
      <DynamicVideoMask />
      {createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>

                <iframe
                  className="w-full h-full"
                  src={fullVideoUrl}
                  title="Full Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default CardVideoIFrame;
