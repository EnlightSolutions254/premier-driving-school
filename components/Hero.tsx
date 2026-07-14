"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy/85 hero-gradient">
      {/* Background Image with Dark Gradient Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-60"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* Modern Visual Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Subtle Floating Background Elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gold/10 top-[15%] left-[5%] blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-royal/15 blur-3xl bottom-[10%] right-[5%]"
        animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <div className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full bg-gold/50 animate-ping" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        {/* Sleek Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-white font-mono font-medium text-xs tracking-widest px-4 py-2 rounded-full border border-white/15 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          NTSA CERTIFIED · EST. 2004
        </motion.div>

        {/* Premium Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[clamp(40px,7.5vw,84px)] max-w-4xl mx-auto"
        >
          Learn. Drive. <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-gold via-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Succeed.
          </span>
        </motion.h1>

        {/* Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
          className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed font-body"
        >
          Kenya&apos;s trusted driving school helping thousands of students become safe and confident
          drivers. Experience personalized instruction under NTSA standard road tests.
        </motion.p>

        {/* Responsive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-navy font-bold shadow-[0_8px_24px_-8px_rgba(245,158,11,0.6)] hover:bg-white hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Enroll Now →
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Courses
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
          className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto"
        >
          {[
            { title: "NTSA Approved", text: "Certified instructors and road-test readiness" },
            { title: "12 Branches", text: "Coverage across Kenya with local support" },
            { title: "Flexible Timing", text: "Weekend and weekday lessons to fit your schedule" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sleek Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
