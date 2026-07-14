"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 md:px-12 py-12 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[40px] bg-navy/85 backdrop-blur-xl px-8 md:px-16 py-24 text-center border border-white/5 shadow-2xl"
      >
        {/* Decorative Background Mesh / Circles */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.5) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(37,99,235,0.4) 0%, transparent 40%)" }} />
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-white/5 backdrop-blur-md text-gold font-mono text-xs tracking-widest px-4 py-2 rounded-full border border-white/10 mb-6">
            CHOOSE SAFETY · CHOOSE EXCELLENCE
          </span>
          <h2 className="font-display font-extrabold text-white text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight mb-6">
            Your Licence Is <br className="sm:hidden" />
            Closer Than You Think
          </h2>
          <p className="text-slate-300 text-base md:text-xl max-w-lg mx-auto mb-10 leading-relaxed font-body">
            Book a free assessment lesson this week and get matched with an NTSA-certified professional instructor near you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4.5 rounded-full bg-gold text-navy font-bold shadow-[0_8px_24px_-8px_rgba(245,158,11,0.6)] hover:bg-white hover:text-navy hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            Start Your Journey →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
