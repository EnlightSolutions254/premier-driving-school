"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { branches } from "@/lib/data";

export default function BranchesPreview() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">KM 36</span>
            Branches
          </div>
          <h2 className="font-display font-bold text-navy text-[clamp(32px,4vw,48px)] leading-tight">
            Wherever you are, we&apos;re nearby
          </h2>
          <p className="mt-4 text-[#64748B] text-lg leading-relaxed">
            Twelve branches across Kenya&apos;s major towns — pick the one closest to home or work.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {branches.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group"
            >
              <Link href={`/branches#${b.slug}`} className="relative block h-[340px] rounded-2xl overflow-hidden">
                <Image
                  src={b.image}
                  alt={`${b.name} branch`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/10 to-transparent flex flex-col justify-end p-5">
                  <span className="font-mono text-xs text-gold mb-1">{b.route}</span>
                  <h3 className="text-white font-display font-semibold text-lg">{b.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
