"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

export default function CoursesPreview() {
  return (
    <section className="py-32 bg-lightgray">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">KM 12</span>
            Courses
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4vw,48px)] leading-tight">
            Pick your class, we&apos;ll handle the route
          </h2>
          <p className="mt-4 text-[#64748B] text-lg leading-relaxed">
            From your first learner&apos;s permit to a full PSV licence — structured courses built
            around the NTSA syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)]"
            >
              <div className="relative h-48 overflow-hidden group">
                <span className="absolute top-4 left-4 z-10 bg-gold text-navy font-mono text-xs font-semibold px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{c.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{c.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#EEF1F5]">
                  <span className="font-mono text-xs font-semibold text-royal">{c.duration.toUpperCase()}</span>
                  <Link href={`/courses#${c.slug}`} className="text-sm font-semibold text-navy flex items-center gap-1">
                    Apply →
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
