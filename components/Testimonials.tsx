"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-32 bg-navy overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest uppercase text-royal mb-4">
          <span className="bg-gold text-navy px-2 py-0.5 rounded font-semibold">KM 24</span>
          Student stories
        </div>
        <h2 className="font-display font-bold text-white text-[clamp(32px,4vw,48px)] leading-tight">
          Thousands of drivers started right here
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.15}
        spaceBetween={24}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.6 },
        }}
        className="!px-6 !pl-6 max-w-6xl mx-auto"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur h-full">
              <div className="text-gold text-sm mb-4 tracking-widest">★★★★★</div>
              <p className="text-white/85 text-[15.5px] leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/55 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
