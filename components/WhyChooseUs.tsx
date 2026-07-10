"use client";

import { motion } from "framer-motion";
import { HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineClock, HiOutlineGlobeAlt } from "react-icons/hi";
import { whyChooseUs } from "@/lib/data";

const icons = [HiOutlineBadgeCheck, HiOutlineTruck, HiOutlineClock, HiOutlineGlobeAlt];

export default function WhyChooseUs() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">KM 0</span>
            Why students choose us
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4vw,48px)] leading-tight">
            Built for the road ahead, not just the test
          </h2>
          <p className="mt-4 text-[#64748B] text-lg leading-relaxed">
            Every lesson is designed around what actually happens on Kenyan roads — roundabouts,
            matatu traffic, and the real NTSA test route.
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
                whileHover={{ y: -10 }}
                className="bg-lightgray hover:bg-white rounded-2xl p-8 border border-transparent hover:border-gold transition-colors hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
              >
                <div className="w-14 h-14 rounded-xl bg-navy text-gold flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
