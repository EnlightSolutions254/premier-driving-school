"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="font-mono font-semibold text-gold text-[clamp(36px,4.5vw,56px)] leading-none">
        0{suffix}
      </div>
    );
  }

  return <CounterInner value={value} suffix={suffix} />;
}

function CounterInner({ value, suffix }: { value: number; suffix: string }) {
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
    <section className="bg-[#0b0f19] py-20 relative overflow-hidden">
      {/* Decorative Background Mesh */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 60%), radial-gradient(circle at 10% 90%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative overflow-hidden bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-gold/30 hover:shadow-[0_12px_24px_-10px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              {/* Card Corner Subtle Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col justify-between h-full">
                <Counter value={s.value} suffix={s.suffix} />
                <div className="mt-4 text-slate-400 text-xs font-mono tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
