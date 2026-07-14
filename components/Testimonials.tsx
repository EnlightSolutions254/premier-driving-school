"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-32 bg-navy/85 backdrop-blur-sm relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-royal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
          <span className="bg-gold text-navy px-2.5 py-1 rounded-full font-bold text-[10px]">Student stories</span>
          TESTIMONIALS
        </div>
        <h2 className="font-display font-bold text-white text-[clamp(32px,4vw,48px)] leading-tight tracking-tight max-w-2xl">
          Thousands of Drivers Started Right Here
        </h2>
        <p className="text-slate-400 text-sm md:text-base mt-4 max-w-lg leading-relaxed font-body">
          Hear from our graduates across Kenya who successfully unlocked their freedom and careers on the road.
        </p>
      </div>

      <div className="relative z-10 w-full">
        {mounted ? (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.8 },
            }}
            className="!px-6 !pl-6 max-w-6xl mx-auto"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto pb-4">
                <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 hover:border-gold/40 hover:-translate-y-1.5 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] hover:shadow-[0_24px_48px_-12px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col justify-between h-[340px] relative overflow-hidden group">
                  {/* Highlight gradient line on hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                  
                  <div>
                    {/* Modern Double Quote Visual */}
                    <div className="text-gold font-serif text-6xl leading-none h-6 select-none opacity-50 mb-4">&ldquo;</div>
                    <p className="text-slate-700 leading-relaxed mb-6 font-medium italic text-sm md:text-base line-clamp-5">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gold/30">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="font-display font-bold text-navy text-sm tracking-tight">{t.name}</div>
                      <div className="text-slate-500 font-mono text-[10px] tracking-wider uppercase mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.name}
                className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] flex flex-col justify-between h-[340px]"
              >
                <div>
                  <div className="text-gold font-serif text-6xl leading-none h-6 select-none opacity-50 mb-4">&ldquo;</div>
                  <p className="text-slate-700 leading-relaxed mb-6 font-medium italic text-sm md:text-base line-clamp-5">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-gold/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-sm tracking-tight">{t.name}</div>
                    <div className="text-slate-500 font-mono text-[10px] tracking-wider uppercase mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
