import type { Metadata } from "next";
import Image from "next/image";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Premier Driving School Kenya",
  description: "Our story, mission, values, and the instructors behind Premier Driving School Kenya.",
};

const instructors = [
  { name: "James Mutua", role: "Head Instructor, Nairobi", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
  { name: "Grace Chebet", role: "PSV Lead Instructor", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop" },
  { name: "Peter Omondi", role: "Heavy Vehicle Instructor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop" },
  { name: "Mary Wambui", role: "Motorcycle Instructor", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Dark Premium Hero Section with Background Image */}
      <section className="relative pt-44 pb-24 bg-navy/85 hero-gradient flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-65"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop')",
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
              <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">SINCE 2004</span>
              ABOUT US
            </div>
            <h1 className="font-display font-bold text-white text-[clamp(34px,5vw,56px)] leading-tight tracking-tight">
              Twenty Years of Putting Kenya Safely in the Driver&apos;s Seat
            </h1>
            <p className="mt-4 text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed">
              Our story, mission, core values, and certified instructors dedicated to helping you achieve safe driving habits for life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* Founding Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-28">
          <div className="relative h-96 rounded-[32px] overflow-hidden shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop"
              alt="Founding instructor with early students"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="font-display font-bold text-navy text-3xl mb-5 tracking-tight">Our Story</h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              Premier Driving School opened its first classroom in Nairobi in 2004 with two instructors and a single saloon car. Two decades later, we operate 5 premium branches across Kenya and have put more than 15,000 graduates safely on the road.
            </p>
            <p className="text-slate-600 leading-relaxed text-base font-medium">
              What hasn&apos;t changed is our belief that a good driver is built through patient, honest instruction — not shortcuts to a test pass.
            </p>
          </div>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-[0_12px_24px_-10px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-gold/30 transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-gold font-bold uppercase block mb-3">Our Mission</span>
            <h3 className="font-display font-bold text-navy text-2xl mb-4 tracking-tight">Educating Safe Drivers</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              To equip every student with the skill, judgment, and confidence to drive safely on Kenyan roads for life — not just to pass a test.
            </p>
          </div>
          <div className="bg-white border border-slate-100 rounded-[32px] p-10 shadow-[0_12px_24px_-10px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-gold/30 transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-gold font-bold uppercase block mb-3">Our Vision</span>
            <h3 className="font-display font-bold text-navy text-2xl mb-4 tracking-tight">Accident-Free Roads</h3>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              A Kenya where every driver on the road was trained properly, and road accidents caused by poor driving are a thing of the past.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-28">
          <h3 className="font-display font-bold text-navy text-3xl mb-8 tracking-tight text-center md:text-left">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Safety first", "Patience", "Integrity", "Local expertise"].map((v, i) => (
              <div
                key={v}
                className="bg-white border border-slate-100 hover:border-gold/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-navy/5 text-navy flex items-center justify-center font-mono font-bold text-sm mb-5">
                  0{i + 1}
                </div>
                <div className="font-display font-bold text-navy text-lg">{v}</div>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                  Deeply integrated into our daily instruction habits and school standards.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-28">
          <h3 className="font-display font-bold text-navy text-3xl mb-8 tracking-tight text-center md:text-left">Meet Our Instructors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {instructors.map((ins) => (
              <div key={ins.name} className="bg-white rounded-3xl overflow-hidden border border-slate-100 p-4 hover:border-gold/30 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={ins.image}
                    alt={ins.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="font-display font-bold text-navy text-lg group-hover:text-royal transition-colors">{ins.name}</div>
                <div className="text-xs text-gold font-mono tracking-wider font-semibold uppercase mt-1">{ins.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#0b0f19] rounded-[32px] p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-4">
                <div className="font-display font-black text-gold text-3xl md:text-4xl tracking-tight">
                  {s.value.toLocaleString()}
                  {s.suffix}
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
