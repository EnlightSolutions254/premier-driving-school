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
    <main className="pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
            <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">
              5 towns
            </span>
            Branches
          </div>

          <h1 className="font-display font-bold text-navy text-[clamp(34px,5vw,54px)] leading-tight">
            Find your nearest branch
          </h1>

          <p className="mt-4 text-[#64748B] text-lg leading-relaxed">
            Five strategic branches across Kenya's major towns, making quality
            driver training accessible wherever you are.
          </p>
        </div>

        <div className="space-y-10">
          {branches.map((b, i) => (
            <div
              key={b.slug}
              id={b.slug}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center scroll-mt-32 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Branch Image */}
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={b.image}
                  alt={`${b.name} branch`}
                  fill
                  className="object-cover"
                />

                <span className="absolute top-5 left-5 bg-gold text-navy font-mono text-xs font-semibold px-3 py-1 rounded-full">
                  Route {b.route}
                </span>
              </div>

              {/* Branch Details */}
              <div>
                <h2 className="font-display font-bold text-navy text-3xl mb-5">
                  {b.name}
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 text-slate">
                    <HiOutlineLocationMarker
                      className="text-royal shrink-0 mt-0.5"
                      size={20}
                    />
                    <span>{b.address}</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate">
                    <HiOutlinePhone
                      className="text-royal shrink-0 mt-0.5"
                      size={20}
                    />
                    <span>{b.phone}</span>
                  </div>

                  <div className="flex items-start gap-3 text-slate">
                    <HiOutlineClock
                      className="text-royal shrink-0 mt-0.5"
                      size={20}
                    />
                    <span>{b.hours}</span>
                  </div>
                </div>

                {/* Google Map */}
                <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                  <iframe
                    src={`https://maps.google.com/maps?q=${b.lat},${b.lng}&z=15&output=embed`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${b.name} location`}
                  />
                </div>

                <a
                  href="/contact"
                  className="inline-block px-7 py-3.5 rounded-full bg-navy text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Inquire about {b.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}