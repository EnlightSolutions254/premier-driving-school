"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="bg-[#0b0f19] text-white/70 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-white tracking-tight">
              <span className="w-10 h-10 rounded-xl bg-gold text-navy flex items-center justify-center font-extrabold text-base shadow-[0_4px_12px_rgba(245,158,11,0.3)]">
                P
              </span>
              <div className="flex flex-col">
                <span className="leading-tight text-[16px]">Premier</span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-gold font-bold">Driving School</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Kenya&apos;s trusted driving school since 2004. Equipped with NTSA-certified professional instructors and a modern, dual-control training fleet.
            </p>
            <div className="flex gap-3">
              {[{ icon: FaFacebookF, href: "https://www.facebook.com/", label: "Facebook" }, { icon: FaInstagram, href: "https://www.instagram.com/", label: "Instagram" }, { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" }, { icon: FaYoutube, href: "https://www.youtube.com/", label: "YouTube" }].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:bg-gold hover:text-navy hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono text-xs font-bold tracking-wider uppercase mb-6">Quick links</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/courses" className="hover:text-gold transition-colors text-slate-300 hover:pl-1 transition-all">Courses</Link></li>
              <li><Link href="/branches" className="hover:text-gold transition-colors text-slate-300 hover:pl-1 transition-all">Branches</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors text-slate-300 hover:pl-1 transition-all">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors text-slate-300 hover:pl-1 transition-all">About us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors text-slate-300 hover:pl-1 transition-all">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-mono text-xs font-bold tracking-wider uppercase">Newsletter</h4>
            <p className="text-sm text-slate-400 leading-relaxed">Get intake dates and driving safety tips delivered directly in your inbox.</p>
            {joined ? (
              <p className="text-sm text-gold font-medium">Subscribed — welcome aboard.</p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setJoined(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 min-w-0 px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                />
                <button type="submit" className="px-5 py-3 rounded-2xl bg-gold text-navy text-sm font-bold shadow-md hover:bg-white hover:-translate-y-0.5 transition-all">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} Premier Driving School Kenya. All rights reserved.</span>
          <span className="font-mono">NTSA Reg. No. DS-2004-1187</span>
        </div>
      </div>
    </footer>
  );
}
