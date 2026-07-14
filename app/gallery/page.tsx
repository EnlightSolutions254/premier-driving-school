import type { Metadata } from "next";
import GalleryView from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Gallery | Premier Driving School Kenya",
  description: "Browse our gallery showing our NTSA-approved lessons, professional instructors, modern fleet of trucks, cars, PSVs, and student graduations.",
};

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Dark Premium Hero Section with Background Image */}
      <section className="relative pt-44 pb-24 bg-navy/85 hero-gradient flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-65"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Modern Visual Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/10" />

        {/* Hero Content */}
        <div className="mx-auto max-w-6xl px-6 relative z-10 w-full text-center flex flex-col items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">BEHIND THE WHEEL</span>
              GALLERY
            </div>
            <h1 className="font-display font-bold text-white text-[clamp(34px,5vw,56px)] leading-tight tracking-tight">
              Moments From The Road To A Licence
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Take a look at our student lessons, certified instructors, modern fleet of training vehicles, and theoretical classrooms.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Gallery component */}
      <GalleryView />
    </main>
  );
}
