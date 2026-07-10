"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(180deg, rgba(15,23,42,.55), rgba(15,23,42,.88)), url('/images/hero/hero-1.png')",
  }}
/>

      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gold/20 top-[18%] left-[8%]"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-16 h-16 rounded-full border-2 border-gold/40 top-[65%] left-[14%]"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-52 h-52 rounded-full bg-royal/25 blur-3xl top-[10%] right-[6%]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white text-navy font-mono font-semibold text-xs tracking-wide px-4 py-2 rounded-md border-2 border-navy mb-7"
        >
          <span className="bg-navy text-white w-5 h-5 rounded flex items-center justify-center font-extrabold">
            L
          </span>
          NTSA CERTIFIED · EST. 2004
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
          className="font-display font-extrabold text-white leading-[0.98] text-[clamp(48px,7.5vw,96px)] max-w-3xl"
        >
          Learn. Drive.
          <br />
          <span className="text-gold">Succeed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
          className="text-white/80 text-lg max-w-lg mt-6 mb-10 leading-relaxed"
        >
          Kenya&apos;s trusted driving school helping thousands of students become safe and confident
          drivers — from your first three-point turn to your NTSA road test.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gold text-navy font-semibold hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(245,158,11,0.55)] transition-all"
          >
            Enroll now →
          </Link>
          <Link
            href="/courses"
            className="px-8 py-4 rounded-full border-[1.5px] border-white/35 bg-white/10 backdrop-blur text-white font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all"
          >
            Explore courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
