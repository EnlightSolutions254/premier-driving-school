"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const categories = ["All", "Lessons", "Vehicles", "Graduation", "Instructors", "Classroom"] as const;

const gallery = [
  { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "Student practicing behind the wheel" },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=900&auto=format&fit=crop",
    cat: "Vehicles",
    alt: "Modern training truck",
  },
  { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=900&auto=format&fit=crop", cat: "Graduation", alt: "Graduation ceremony" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "PSV driving lesson" },
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop", cat: "Instructors", alt: "Driving instructor portrait" },
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=900&auto=format&fit=crop",
    cat: "Classroom",
    alt: "Classroom theory session",
  },
  { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "Motorcycle riding lesson" },
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=90&w=900&auto=format&fit=crop",
    cat: "Vehicles",
    alt: "Driving school branch vehicles",
  },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop", cat: "Graduation", alt: "Student receiving certificate" },
];

export default function GalleryView() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.cat === active);

  return (
    <>
      {/* Main Content Area */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-96 h-96 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Categories Navigation */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  active === c
                    ? "bg-navy text-white shadow-md shadow-navy/20"
                    : "bg-white text-slate-600 border border-slate-100 hover:bg-slate-50 hover:text-navy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Gallery Grid Columns */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.button
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={() => setLightbox(img.src)}
                  className="block w-full break-inside-avoid rounded-3xl overflow-hidden relative group border border-slate-100 bg-white p-2 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={500}
                      height={640}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Information overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                      <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold mb-1">
                        {img.cat}
                      </span>
                      <h3 className="text-white font-display font-semibold text-sm leading-snug">
                        {img.alt}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold text-3xl transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
              aria-label="Close lightbox"
            >
              <HiX />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[85vh] max-w-full rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[90vw] max-w-5xl h-[70vh]">
                <Image
                  src={lightbox}
                  alt="Enlarged gallery image"
                  fill
                  sizes="(max-width: 1024px) 90vw, 1024px"
                  className="object-contain"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
