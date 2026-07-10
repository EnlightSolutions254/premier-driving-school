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
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">Since 2004</span>
            About us
          </div>
          <h1 className="font-display font-bold text-navy text-[clamp(34px,5vw,54px)] leading-tight">
            Twenty years of putting Kenya safely in the driver&apos;s seat
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-28">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop" alt="Founding instructor with early students" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-navy text-2xl mb-4">Our story</h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Premier Driving School opened its first classroom in Nairobi in 2004 with two
              instructors and a single saloon car. Two decades later, we operate 12 branches
              across the country and have put more than 15,000 graduates safely on the road.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              What hasn&apos;t changed is our belief that a good driver is built through patient,
              honest instruction — not shortcuts to a test pass.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-28">
          <div className="bg-lightgray rounded-2xl p-10">
            <h3 className="font-display font-semibold text-navy text-xl mb-3">Our mission</h3>
            <p className="text-[#64748B] leading-relaxed">
              To equip every student with the skill, judgment, and confidence to drive safely on
              Kenyan roads for life — not just to pass a test.
            </p>
          </div>
          <div className="bg-lightgray rounded-2xl p-10">
            <h3 className="font-display font-semibold text-navy text-xl mb-3">Our vision</h3>
            <p className="text-[#64748B] leading-relaxed">
              A Kenya where every driver on the road was trained properly, and road accidents
              caused by poor driving are a thing of the past.
            </p>
          </div>
        </div>

        <div className="mb-28">
          <h3 className="font-display font-semibold text-navy text-2xl mb-8">Core values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Safety first", "Patience", "Integrity", "Local expertise"].map((v) => (
              <div key={v} className="border border-[#EEF1F5] rounded-xl p-6">
                <div className="w-2 h-2 rounded-full bg-gold mb-4" />
                <div className="font-semibold text-navy">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-28">
          <h3 className="font-display font-semibold text-navy text-2xl mb-8">Meet our instructors</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {instructors.map((ins) => (
              <div key={ins.name} className="text-center">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                  <Image src={ins.image} alt={ins.name} fill className="object-cover" />
                </div>
                <div className="font-semibold text-navy">{ins.name}</div>
                <div className="text-sm text-[#64748B]">{ins.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-navy text-2xl mb-8">By the numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-mono font-semibold text-royal text-4xl">
                  {s.value.toLocaleString()}
                  {s.suffix}
                </div>
                <div className="text-sm text-[#64748B] mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
