"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/branches", label: "Branches" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-100/80 shadow-sm py-4"
          : "bg-gradient-to-b from-navy/60 to-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          <span className="w-10 h-10 rounded-xl bg-gold text-navy flex items-center justify-center font-extrabold text-base shadow-[0_4px_12px_-2px_rgba(245,158,11,0.4)] transform hover:rotate-6 transition-transform duration-300">
            P
          </span>
          <div className="flex flex-col">
            <span className="leading-tight text-[16px] md:text-[18px]">Premier</span>
            <span className="text-[9px] uppercase font-mono tracking-widest text-gold font-bold">Driving School</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] font-semibold tracking-wide hover:text-gold transition-all relative py-1 group ${
                scrolled ? "text-slate" : "text-white/95"
              }`}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-navy text-white text-sm font-bold shadow-md hover:bg-gold hover:text-navy hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="fixed top-4 right-4 z-[60] md:hidden flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/95 text-navy shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-[320px] bg-navy border-l border-white/10 p-8 flex flex-col justify-between shadow-2xl z-50 transform transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-8">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-white" onClick={() => setOpen(false)}>
              <span className="w-8 h-8 rounded-lg bg-gold text-navy flex items-center justify-center font-extrabold text-sm">
                P
              </span>
              Premier
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-white/10 hover:text-gold transition-colors text-xl"
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white hover:text-gold font-bold text-lg transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <Link
            href="/contact"
            className="block w-full py-3.5 rounded-full bg-gold text-navy text-center font-bold shadow-lg hover:bg-white transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Enroll Now
          </Link>
          <p className="text-[11px] text-center text-white/50 font-mono">
            NTSA Reg. No. DS-2004-1187
          </p>
        </div>
      </div>

      {/* Backdrop overlay for mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-navy/75 backdrop-blur-md z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}
