"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function BranchesPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">KM 36</span>
            Our Locations
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4.5vw,48px)] leading-tight tracking-tight">
            Wherever you are, <br className="hidden sm:inline" />
            we are nearby
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
            Five strategic branches in major cities across Kenya, fully staffed with certified professional instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group"
            >
              <Link href={`/branches#${b.slug}`} className="relative block h-[380px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <Image
                  src={b.image}
                  alt={`${b.name} branch`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Modern Dark Gradient Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <span className="font-mono text-[10px] uppercase font-semibold text-gold tracking-widest mb-1">
                    Route {b.route}
                  </span>
                  <h3 className="text-white font-display font-bold text-lg tracking-tight group-hover:text-gold transition-colors duration-300">
                    {b.name}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 leading-tight opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
