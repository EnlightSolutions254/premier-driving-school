"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

export default function CoursesPreview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-blue-50/80 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">KM 12</span>
            Courses Offered
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4.5vw,48px)] leading-tight tracking-tight">
            Pick your class, <br className="hidden sm:inline" />
            we&apos;ll handle the route
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
            From your very first driving lesson to specialized heavy transport and passenger vehicle endorsements, our courses are tailored to the NTSA standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-gold/30 hover:shadow-[0_24px_48px_-15px_rgba(15,23,42,0.12)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden group">
                <span className="absolute top-4 left-4 z-10 bg-gold text-navy font-mono text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                  {c.tag}
                </span>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3 tracking-tight hover:text-royal transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {c.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Duration</span>
                    <span className="font-sans font-bold text-xs text-navy">{c.duration}</span>
                  </div>
                  <Link
                    href={`/courses#${c.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 text-slate font-bold text-xs hover:bg-gold hover:text-navy hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
