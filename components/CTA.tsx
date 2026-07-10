"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-royal to-blue-700 px-8 md:px-16 py-20 text-center"
      >
        <div className="absolute w-96 h-96 bg-gold/25 rounded-full blur-3xl -top-40 -right-24" />
        <div className="relative">
          <h2 className="font-display font-bold text-white text-[clamp(30px,4.2vw,46px)] max-w-2xl mx-auto mb-5 leading-tight">
            Your licence is closer than you think
          </h2>
          <p className="text-white/85 text-lg max-w-lg mx-auto mb-9">
            Book a free assessment lesson this week and get matched with an instructor near you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-gold text-navy font-semibold hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(245,158,11,0.55)] transition-all"
          >
            Start your journey →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
