import type { Metadata } from "next";
import Image from "next/image";
import {
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { branches } from "@/lib/data";

export const metadata: Metadata = {
  title: "Branches | Premier Driving School Kenya",
  description:
    "Find a Premier Driving School branch in Nairobi, Nakuru, Mombasa, Kisumu, or Eldoret.",
};

export default function BranchesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Dark Premium Hero Section with Background Image */}
      <section className="relative pt-44 pb-24 bg-navy/85 hero-gradient flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-65"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1600&auto=format&fit=crop')",
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
              <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">5 TOWNS</span>
              BRANCHES
            </div>
            <h1 className="font-display font-bold text-white text-[clamp(34px,5vw,56px)] leading-tight tracking-tight">
              Find Your Nearest Branch
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Five strategic branches across Kenya&apos;s major towns, making quality driver training accessible wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Mesh */}
        <div className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-blue-50 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="space-y-16">
          {branches.map((b, i) => (
            <div
              key={b.slug}
              id={b.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center scroll-mt-32 bg-white rounded-[32px] p-6 md:p-8 lg:p-10 border border-slate-100 shadow-[0_12px_24px_-10px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] hover:border-gold/30 transition-all duration-300 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Branch Image */}
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={b.image}
                  alt={`${b.name} branch`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <span className="absolute top-5 left-5 bg-gold text-navy font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
                  Route {b.route}
                </span>
              </div>

              {/* Branch Details */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-5 tracking-tight">
                    {b.name}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3.5 text-slate-600">
                      <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                        <HiOutlineLocationMarker size={18} />
                      </div>
                      <span className="text-sm font-medium pt-1.5">{b.address}</span>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-600">
                      <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                        <HiOutlinePhone size={18} />
                      </div>
                      <span className="text-sm font-medium pt-1.5">{b.phone}</span>
                    </div>

                    <div className="flex items-start gap-3.5 text-slate-600">
                      <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                        <HiOutlineClock size={18} />
                      </div>
                      <span className="text-sm font-medium pt-1.5">{b.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mb-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                  <iframe
                    src={`https://maps.google.com/maps?q=${b.lat},${b.lng}&z=15&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${b.name} location`}
                  />
                </div>

                <a
                  href="/contact"
                  className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-navy text-white font-bold hover:bg-gold hover:text-navy hover:-translate-y-0.5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  Inquire about {b.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
}