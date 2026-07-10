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
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">All routes</span>
            Courses
          </div>
          <h1 className="font-display font-bold text-navy text-[clamp(34px,5vw,54px)] leading-tight">
            Every licence class, one trusted school
          </h1>
          <p className="mt-4 text-[#64748B] text-lg leading-relaxed">
            Structured around the NTSA syllabus, taught by certified instructors, in modern
            dual-control vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((c) => (
            <div key={c.slug} id={c.slug} className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] scroll-mt-32">
              <div className="relative h-56">
                <span className="absolute top-4 left-4 z-10 bg-gold text-navy font-mono text-xs font-semibold px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <Image src={c.image} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h2 className="font-display font-semibold text-navy text-2xl mb-2">{c.title}</h2>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{c.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
                  <div>
                    <div className="font-mono text-xs text-royal font-semibold mb-1">DURATION</div>
                    <div className="text-slate font-medium">{c.duration}</div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-royal font-semibold mb-1">PRICING</div>
                    <div className="text-slate font-medium">{c.price}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="font-mono text-xs text-royal font-semibold mb-2">REQUIREMENTS</div>
                  <ul className="space-y-1.5">
                    {c.requirements.map((r) => (
                      <li key={r} className="text-sm text-slate flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-3.5 rounded-full bg-navy text-white font-semibold hover:-translate-y-0.5 transition-transform"
                >
                  Apply for {c.tag}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
