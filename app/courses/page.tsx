import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses | Premier Driving School Kenya",
  description: "Explore Class B, C, CE, PSV, motorcycle, and refresher driving courses across Kenya.",
};

export default function CoursesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Dark Premium Hero Section with Background Image */}
      <section className="relative pt-44 pb-24 bg-navy/85 hero-gradient flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-65"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop')",
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
              <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">ALL LICENCES</span>
              OUR CURRICULUM
            </div>
            <h1 className="font-display font-bold text-white text-[clamp(34px,5vw,56px)] leading-tight tracking-tight">
              Every Licence Class, One Trusted School
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              All courses strictly adhere to the official NTSA syllabus, delivered by NTSA-certified professional instructors in modern, fully dual-control vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Blur Backgrounds */}
        <div className="absolute top-[10%] left-[-15%] w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((c) => (
            <div
              key={c.slug}
              id={c.slug}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_16px_36px_-12px_rgba(15,23,42,0.06)] hover:shadow-[0_24px_48px_-15px_rgba(15,23,42,0.12)] hover:border-gold/30 transition-all duration-300 scroll-mt-32 flex flex-col h-full group"
            >
              <div className="relative h-64 overflow-hidden">
                <span className="absolute top-5 left-5 z-10 bg-gold text-navy font-mono text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
                  {c.tag}
                </span>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-display font-bold text-navy text-2xl mb-3 tracking-tight group-hover:text-royal transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {c.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 p-5 bg-slate-50 rounded-2xl mb-6">
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Duration</div>
                      <div className="text-navy font-bold text-sm">{c.duration}</div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Pricing</div>
                      <div className="text-royal font-bold text-sm">{c.price}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">Requirements</div>
                    <ul className="space-y-2.5">
                      {c.requirements.map((r) => (
                        <li key={r} className="text-sm text-slate flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 animate-pulse" />
                          <span className="text-slate-600 font-medium leading-normal">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-4 rounded-full bg-navy text-white font-bold hover:bg-gold hover:text-navy hover:-translate-y-0.5 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Apply for {c.tag} Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
}
