"use client";

import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineClock, HiOutlineGlobeAlt } from "react-icons/hi";
import { whyChooseUs } from "@/lib/data";

const icons = [HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineClock, HiOutlineGlobeAlt];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle geometric shape */}
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 rounded-full bg-slate-100/50 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">KM 0</span>
            Why students choose us
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4.5vw,48px)] leading-tight tracking-tight">
            Built for the road ahead, <br className="hidden sm:inline" />
            not just a quick test pass
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
            Every lesson is meticulously structured around real-world Kenyan driving conditions. Master roundabouts, highway merging, and defensive techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-50/50 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_24px_48px_-15px_rgba(15,23,42,0.08)]"
              >
                {/* Modern subtle card numbering */}
                <div className="absolute top-6 right-8 font-mono text-xs text-slate-200 group-hover:text-gold/40 font-bold transition-colors">
                  0{i + 1}
                </div>

                <div className="w-12 h-12 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6 shadow-[0_4px_12px_rgba(15,23,42,0.15)] group-hover:scale-110 transition-transform">
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2 tracking-tight group-hover:text-royal transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
