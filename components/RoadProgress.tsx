"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function RoadProgress() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <RoadProgressInner />;
}

function RoadProgressInner() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 });
  const top = useTransform(smooth, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="hidden lg:block fixed left-1/2 top-0 bottom-0 w-[2px] z-40 -translate-x-1/2 pointer-events-none">
      <svg className="absolute inset-0 h-full w-[2px] overflow-visible">
        <line x1="1" y1="0" x2="1" y2="100%" stroke="#F59E0B" strokeWidth="3" strokeDasharray="2 14" />
      </svg>
      <motion.div style={{ top }} className="absolute -translate-x-1/2 -translate-y-1/2">
        <svg width="26" height="26" viewBox="0 0 26 26" style={{ filter: "drop-shadow(0 4px 10px rgba(245,158,11,0.5))" }}>
          <circle cx="13" cy="13" r="12" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <path d="M8 13.5l3 3 7-7" stroke="#F59E0B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}
