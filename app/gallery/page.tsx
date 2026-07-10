"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const categories = ["All", "Lessons", "Vehicles", "Graduation", "Instructors", "Classroom"] as const;

const gallery = [
  { src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "Student practicing behind the wheel" },
  { src: "https://images.unsplash.com/photo-1601929095185-cfb2e3ee2e0e?q=80&w=900&auto=format&fit=crop", cat: "Vehicles", alt: "Modern training truck" },
  { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=900&auto=format&fit=crop", cat: "Graduation", alt: "Graduation ceremony" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "PSV driving lesson" },
  { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=900&auto=format&fit=crop", cat: "Instructors", alt: "Driving instructor portrait" },
  { src: "https://images.unsplash.com/photo-1580746738099-89cffa1c6478?q=80&w=900&auto=format&fit=crop", cat: "Classroom", alt: "Classroom theory session" },
  { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=900&auto=format&fit=crop", cat: "Lessons", alt: "Motorcycle riding lesson" },
  { src: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=900&auto=format&fit=crop", cat: "Vehicles", alt: "Driving school branch vehicles" },
  { src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=900&auto=format&fit=crop", cat: "Graduation", alt: "Student receiving certificate" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.cat === active);

  return (
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">Behind the wheel</span>
            Gallery
          </div>
          <h1 className="font-display font-bold text-navy text-[clamp(34px,5vw,54px)] leading-tight">
            Moments from the road to a licence
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === c ? "bg-navy text-white" : "bg-lightgray text-slate hover:bg-navy/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(img.src)}
                className="block w-full break-inside-avoid rounded-2xl overflow-hidden relative group"
              >
                <Image src={img.src} alt={img.alt} width={500} height={640} className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl" aria-label="Close lightbox">
              <HiX />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Enlarged gallery image"
              className="max-h-[85vh] max-w-full rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
