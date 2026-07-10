"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value, motionValue]);

  return (
    <div ref={ref} className="font-mono font-semibold text-gold text-[clamp(36px,4.5vw,56px)] leading-none">
      {display.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`text-left ${i !== 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <div className="mt-3 text-white/75 text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
